import { Injectable } from '@angular/core';
import { UserItineraryService } from './user-itinerary.service';
import { HttpClient } from '@angular/common/http';
import { AwsTranscationSyncService } from './aws-transcation-sync.service';
import { CurrentItinerary } from '@ojashub/voyaah-common';
import { error } from 'protractor';
import { BehaviorSubject } from 'rxjs';
import { CreateAWSTransactionModelInput } from './aws-current-itinerary.service';

@Injectable({
  providedIn: 'root',
})
export class BookingServiceService {
  public selectedBooking = new BehaviorSubject<any>({});
  selectedBookingData = this.selectedBooking.asObservable();

  constructor(
    public http: HttpClient,
    public awsTransactionService: AwsTranscationSyncService
  ) {}

  public async getBookingHistory(): Promise<CurrentItinerary[]> {
    let bookingHistory: CurrentItinerary[] = [];
    try {
      await this.awsTransactionService
        .getTranscationData()
        .then((transactions: CurrentItinerary[]) => {
          bookingHistory = transactions;
        });
      console.log('booking history', bookingHistory);
      return bookingHistory;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async getBookingHistoryTranscation(): Promise<
    CreateAWSTransactionModelInput[]
  > {
    let bookingHistory: CreateAWSTransactionModelInput[] = [];
    try {
      await this.awsTransactionService
        .getTranscationTotalData()
        .then((transactions: CreateAWSTransactionModelInput[]) => {
          bookingHistory = transactions;
        });
      console.log('booking history', bookingHistory);
      return bookingHistory;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
