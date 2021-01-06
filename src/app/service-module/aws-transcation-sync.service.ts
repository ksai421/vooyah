import { Injectable } from '@angular/core';
import {
  APIService as APIServiceCurrentItinerary,
  CreateAWSTransactionModelInput,
  AWSTravelType,
  ListAwsTransactionModelsQuery,
  ModelAWSTransactionModelFilterInput,
  ModelStringFilterInput,
  UpdateAWSTransactionModelInput,
} from '../service-module/aws-current-itinerary.service';
import { AccountService } from '@app/account/services';
import { User } from '@app/account/models';
import { CurrentItinerary, TravelType } from '@ojashub/voyaah-common';
import { UserProfileService } from './user-profile.service';

import { TransactionModel } from '@ojashub/voyaah-common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AwsTranscationSyncService {
  user: User;
  transactionStringId: any;
  transactionData: any;
  currenttransactionId: any;
  private userData = new BehaviorSubject<boolean>(false);
  checkUser$ = this.userData.asObservable();

  createData(data: boolean) {
    this.userData.next(data);
  }

  constructor(
    private apiServiceCurrentItinerary: APIServiceCurrentItinerary,
    private accountService: AccountService,
    private userProfileService: UserProfileService
  ) {
    this._subscribeToUserLogin();
    this.currenttransactionId = localStorage.getItem('currentTransctionId');
    console.log(this.currenttransactionId, 'currenttransactionId');
    this.getTranscationTotalData();
  }

  private _subscribeToUserLogin(): void {
    this.accountService.user.subscribe((user) => {
      this.user = user;
    });
    console.log(this.user, ' this.user');
  }

  public async saveTranscationData(
    transactionModel: TransactionModel
  ): Promise<void> {
    const currentTransction: CreateAWSTransactionModelInput = {
      id: transactionModel.id,
      username: this.user.username,
      transactionType: transactionModel.transactionType,
      transactionStatus: transactionModel.transactionStatus,
      travelStartDate: transactionModel.travelStartDate,
      transactionId: transactionModel.transactionId,
      transactionDetails: JSON.stringify(transactionModel.transactionDetails),
      email: transactionModel.email,
      mobile: transactionModel.mobile,
      travelCity: transactionModel.travelCity,
    };
    console.log(
      'AwsTranscationSyncService: saveTranscationData',
      currentTransction
    );
    // localStorage.setItem('IdofBooking', currentTransction.id);
    localStorage.setItem(
      'currentTransctionId',
      currentTransction.transactionId
    );

    try {
      this.accountService.isLoggedIn().then(async (loggedIn) => {
        console.log(loggedIn, 'loggedin');
        try {
          if (loggedIn) {
            const result = await this.apiServiceCurrentItinerary.CreateAwsTransactionModel(
              currentTransction
            );
            this.transactionStringId = result.transactionId;
          }
        } catch (error) {
          console.log(error);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  // public async updateTranscationData(
  //   transactionModel: TransactionModel
  // ): Promise<void> {
  //   const updateTransction: UpdateAWSTransactionModelInput = {
  //     id: transactionModel.id,
  //     username: this.user.username,
  //     transactionType: transactionModel.transactionType,
  //     transactionStatus: transactionModel.transactionStatus,
  //     transactionDate: transactionModel.transactionDate,
  //     transactionId: transactionModel.transactionId,
  //     transactionDetails: transactionModel.transactionDetails,
  //   };
  //   console.log(
  //     'AwsTranscationSyncService: saveTranscationData',
  //     updateTransction
  //   );
  //   try {
  //     this.accountService.isLoggedIn().then(async (loggedIn) => {
  //       console.log(loggedIn, 'loggedin');
  //       try {
  //         if (loggedIn) {
  //           const result = await this.apiServiceCurrentItinerary.UpdateAwsTransactionModel(
  //             updateTransction
  //           );
  //           this.transactionStringId = result.transactionId;
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  public async getTranscationTotalData(): Promise<
    CreateAWSTransactionModelInput[]
  > {
    try {
      if (this.accountService.isLoggedIn()) {
        let userFilter: ModelStringFilterInput = {
          eq: this.currenttransactionId,
        };
        let filterInput: ModelAWSTransactionModelFilterInput = {
          transactionId: userFilter,
        };
        const data: ListAwsTransactionModelsQuery = await this.apiServiceCurrentItinerary.ListAwsTransactionModels(
          filterInput
        );

        let totalTransactions = data.items;
        console.log(totalTransactions, 'data');
        let transactions: CreateAWSTransactionModelInput[] = [];
        transactions = data.items;
        console.log(
          'AwsTranscationSyncService: getTranscationTotalData: ',
          transactions
        );
        return transactions;
      }
    } catch (error) {
      console.log('getTransaction in sync', error);
      throw error;
    }
  }

  public async getTranscationData(): Promise<CurrentItinerary[]> {
    try {
      if (this.accountService.isLoggedIn()) {
        let userFilter: ModelStringFilterInput = {
          eq: this.user.username,
        };
        let filterInput: ModelAWSTransactionModelFilterInput = {
          username: userFilter,
        };
        const data: ListAwsTransactionModelsQuery = await this.apiServiceCurrentItinerary.ListAwsTransactionModels(
          filterInput
        );

        let transactions: CurrentItinerary[] = [];
        for (let i = 0; i < data.items.length; i++) {
          transactions.push(JSON.parse(data.items[i].transactionDetails));
        }
        console.log(
          'AwsTranscationSyncService: getTranscationData: ',
          transactions
        );
        return transactions;
      }
    } catch (error) {
      console.log('getTransaction in sync', error);
      throw error;
    }
  }
}
