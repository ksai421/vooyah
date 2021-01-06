import { error } from 'protractor';
import { async } from '@angular/core/testing';
import { StaycationTransaction, TravelPackage } from '@ojashub/voyaah-common';
import { Injectable } from '@angular/core';
import {
  APIService as APIServiceCurrentItinerary,
  CreateAWSStaycationTransactionModelInput,
  CreateAwsStaycationTransactionModelMutation,
  ListAwsStaycationTransactionModelsQuery,
  ModelAWSStaycationTransactionModelFilterInput,
  ModelStringFilterInput,
  UpdateAWSStaycationTransactionModelInput,
} from './aws-current-itinerary.service';
import * as moment from 'moment';
import { AccountService } from '@app/account/services';
import { User } from '@app/account/models';
import { v4 as uuid } from 'uuid';
import { TravellersDetails } from '@ojashub/voyaah-common';
const { v1: uuidv1 } = require('uuid');
@Injectable({
  providedIn: 'root',
})
export class AwsStaycationSyncService {
  user: User;
  constructor(
    private apiServiceCurrentItinerary: APIServiceCurrentItinerary,
    private accountService: AccountService
  ) {
    this._subscribeToUserLogin();
  }
  private _subscribeToUserLogin(): void {
    this.accountService.user.subscribe((user) => {
      this.user = user;
    });
  }
  public async AWSCreateStaycationTransaction(
    AWSStaycationTransactionType: CreateAWSStaycationTransactionModelInput
  ): Promise<StaycationTransaction> {
    try {
      var result = await this._AWSCreateStaycationTransaction(
        AWSStaycationTransactionType
      );
      delete result.__typename;
      result.transactionDetails = JSON.parse(result.transactionDetails);
      return result;
    } catch (error) {
      console.log('staycationsyncpublic', error);
      throw error;
    }
  }
  private async _AWSCreateStaycationTransaction(
    AWSStaycationTransactionType: CreateAWSStaycationTransactionModelInput
  ): Promise<any> {
    try {
      var result = await this.apiServiceCurrentItinerary.CreateAwsStaycationTransactionModel(
        AWSStaycationTransactionType
      );
      localStorage.setItem(
        'staycationTransaction',
        JSON.stringify(AWSStaycationTransactionType)
      );
      console.log('staycationTransCreate', result);
      return result;
    } catch (error) {
      console.log('staycationsyncprivate', error);
      throw error;
    }
  }
  public async AWSUpdateStaycationTransaction(
    AWSStaycationTransactionType: UpdateAWSStaycationTransactionModelInput
  ): Promise<StaycationTransaction> {
    try {
      var result = await this._AWSUpdateStaycationTransaction(
        AWSStaycationTransactionType
      );
      delete result.__typename;
      result.transactionDetails = JSON.parse(result.transactionDetails);
      return result;
    } catch (error) {
      console.log('staycationsyncpublic', error);
      throw error;
    }
  }
  private async _AWSUpdateStaycationTransaction(
    AWSStaycationTransactionType: UpdateAWSStaycationTransactionModelInput
  ): Promise<any> {
    try {
      var result = await this.apiServiceCurrentItinerary.UpdateAwsStaycationTransactionModel(
        AWSStaycationTransactionType
      );
      console.log('staycationStatusUpdate', result);
      return result;
    } catch (error) {
      console.log('staycationStatusUpdatePrivate', error);
      throw error;
    }
  }
  public async getAWSStaycationTransaction(
    transactionId: string
  ): Promise<StaycationTransaction> {
    try {
      let result = await this._getAWSStaycationTransaction(transactionId);
      result.transactionDetails = JSON.parse(result.transactionDetails);
      return result;
    } catch (error) {
      console.log('getAWSStaycationTransaction', error);
      throw error;
    }
  }
  private async _getAWSStaycationTransaction(
    transactionId: string
  ): Promise<any> {
    try {
      let userFilter: ModelStringFilterInput = {
        eq: transactionId,
      };
      let filterInput: ModelAWSStaycationTransactionModelFilterInput = {
        transactionId: userFilter,
      };
      let response: ListAwsStaycationTransactionModelsQuery = await this.apiServiceCurrentItinerary.ListAwsStaycationTransactionModels(
        filterInput
      );
      delete response.items[0].__typename;
      return response.items[0];
    } catch (error) {
      throw error;
    }
  }
}
