import { error } from 'protractor';
import { async } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '@app/config.service';

import { environment } from '../../../environments/environment';
import { StaycationTransaction } from '@ojashub/voyaah-common';
import { TravelPackage } from '@ojashub/voyaah-common';
import { BehaviorSubject, Observable } from 'rxjs';
import { TravellersDetails } from '@ojashub/voyaah-common';
import { AwsStaycationSyncService } from '@app/service-module/aws-staycation-sync.service';
import {
  CreateAWSStaycationTransactionModelInput,
  UpdateAWSStaycationTransactionModelInput,
} from '@app/service-module/aws-current-itinerary.service';
import * as moment from 'moment';
import { User } from '@app/account/models';
import { AccountService } from '@app/account/services';
const { v1: uuidv1 } = require('uuid');
@Injectable({
  providedIn: 'root',
})
export class StaycationService {
  static StacationsListKey = 'satacations-list';
  public packageId = new BehaviorSubject<string>('');
  selectedPackageId = this.packageId.asObservable();
  baseURL: any = environment.apiServer;
  stayCationTravellersDetails: TravellersDetails = {
    adults: [],
    children: [],
    infants: [],
  };
  _travelPackages: TravelPackage[] = [];
  public staycationTravellers = new BehaviorSubject<TravellersDetails>(
    this.stayCationTravellersDetails
  );
  staycationTravellersChanged = this.staycationTravellers.asObservable();
  stacationsData: TravelPackage[];
  user: User;
  staycationTransactionId: string;
  constructor(
    private http: HttpClient,
    private configService: ConfigService,
    private staycationSyncService: AwsStaycationSyncService,
    private accountService: AccountService
  ) {
    this.getStaycations();
    this.stacationsData = [];
    this._readstacationsFromServer(true);
    this._subscribeToUserLogin();
  }
  private _subscribeToUserLogin(): void {
    this.accountService.user.subscribe((user) => {
      this.user = user;
    });
  }
  private _readstacationsFromServer(forceRefresh: boolean = false) {
    this._loadStacations();
    if (this.stacationsData.length === 0 || forceRefresh === true) {
      this.http.get(this.configService.apiUrl.staycations).subscribe(
        (res) => {
          //console.log('Dataa', res);
          this.stacationsData = this._parseStacationsFromServer(
            res as TravelPackage[]
          );
          this._cleanstacationsData();
          this._storeStacations();
        },
        (err) => {
          console.log('failed to get Stacation data ' + err);
        }
      );
    }
  }

  private _parseStacationsFromServer(
    stacationsFromServer: TravelPackage[]
  ): TravelPackage[] {
    let parsedStacations: TravelPackage[] = stacationsFromServer.map(
      (packages) => {
        return {
          ...packages,
        };
      }
    );
    return parsedStacations;
  }

  public stacationList() {
    return this.stacationsData;
  }

  private _storeStacations(): void {
    try {
      localStorage.setItem(
        StaycationService.StacationsListKey,
        JSON.stringify(this.stacationsData)
      );
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  private _cleanstacationsData() {
    this.stacationsData = this.stacationsData.filter((pacakages) => {
      if (this._isNull(pacakages)) return false;
      if (this._isNull(pacakages.id)) return false;
      // ToDo: Can add More Package details here ....!!!
      return true;
    });
  }

  private _isNull(val: any): boolean {
    if (val === null || val === undefined || val === '') {
      return true;
    }
    return false;
  }

  private _loadStacations() {
    const StacationsFromLocalStore = JSON.parse(
      localStorage.getItem(StaycationService.StacationsListKey)
    ) as TravelPackage[];
    if (StacationsFromLocalStore) {
      this.stacationsData = StacationsFromLocalStore;
    }
  }

  public async getStaycations(): Promise<TravelPackage[]> {
    try {
      if (this._travelPackages.length > 0) {
        return this._travelPackages;
      }

      //Packages are not available. Request server

      await this._fetchPackagesFromServer().then((value: TravelPackage[]) => {
        this._travelPackages = value;
      });
      console.log('publlic', this._travelPackages);
      return this._travelPackages;
    } catch (error) {
      throw error;
    }
  }
  private async _fetchPackagesFromServer(): Promise<TravelPackage[]> {
    try {
      let apiResponse: Observable<TravelPackage[]> = this.http.get<
        TravelPackage[]
      >(this.configService.apiUrl.staycations);
      const packages: TravelPackage[] = await apiResponse.toPromise();
      console.log('private', packages);
      return packages;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  public getPackage(id): TravelPackage {
    let selectedPackage: TravelPackage;
    for (let i = 0; i < this._travelPackages.length; i++) {
      if (id === this._travelPackages[i].id) {
        selectedPackage = this._travelPackages[i];
        break;
      }
    }
    return selectedPackage;
  }
  public getcitylist() {
    return this.http.get<any>(this.baseURL + `/api/citylist`);
  }
  public getDestinationCity(name: any) {
    return this.http.get<any>(
      this.baseURL + `/api/staycations?destinationName` + '=' + name
    );
  }
  public getAdvanceTourCategories(tourCategories: any) {
    return this.http.get<any>(
      this.baseURL + `/api/categorylist?categories` + '=' + tourCategories
    );
  }
  public async bookStaycations(
    staycationPackage: TravelPackage,
    stayCationTravellers: TravellersDetails
  ): Promise<StaycationTransaction> {
    console.log('booking package', staycationPackage);
    try {
      var AWSStaycationTransactionType: CreateAWSStaycationTransactionModelInput = {
        id: uuidv1(),
        username: this.user.username,
        itineraryName: staycationPackage.name,
        transactionId: uuidv1(),
        transactionType: 'Staycation Booking',
        transactionStatus: 'paymentPending',
        transactionDate: moment(new Date()).toISOString(),
        transactionDetails: JSON.stringify(stayCationTravellers),
        vendorId: '',
        packageId: staycationPackage.id,
        bookingReference: '',
      };
      var result = await this.staycationSyncService.AWSCreateStaycationTransaction(
        AWSStaycationTransactionType
      );
      localStorage.setItem(
        'bookedStaycationPackage',
        JSON.stringify(staycationPackage)
      );
      this.staycationTransactionId = AWSStaycationTransactionType.transactionId;
      return result;
    } catch (error) {
      console.log('staycationservice', error);
      throw error;
    }
  }
  public async updateStaycationTransactionStatus(): Promise<
    StaycationTransaction
  > {
    try {
      var savedTransaction: CreateAWSStaycationTransactionModelInput = JSON.parse(
        localStorage.getItem('staycationTransaction')
      );
      var AWSStaycationTransactionType: UpdateAWSStaycationTransactionModelInput = {
        id: savedTransaction.id,
        username: savedTransaction.username,
        itineraryName: savedTransaction.itineraryName,
        transactionId: savedTransaction.transactionId,
        transactionType: 'Staycation Booking',
        transactionStatus: 'Pending-Booking',
        transactionDate: savedTransaction.transactionDate,
        transactionDetails: savedTransaction.transactionDetails,
        vendorId: savedTransaction.vendorId,
        packageId: savedTransaction.packageId,
        bookingReference: savedTransaction.bookingReference,
      };
      var result = await this.staycationSyncService.AWSUpdateStaycationTransaction(
        AWSStaycationTransactionType
      );
      return result;
    } catch (error) {
      console.log('staycationservice', error);
      throw error;
    }
  }
  public async getStaycationWithTransactionId(
    transactionId: string
  ): Promise<StaycationTransaction> {
    try {
      let response: StaycationTransaction = await this.staycationSyncService.getAWSStaycationTransaction(
        transactionId
      );
      return response;
    } catch (error) {
      console.log('getStaycation', error);
      throw error;
    }
  }
  public getStaycationTransactionId() {
    return this.staycationTransactionId;
  }
}
