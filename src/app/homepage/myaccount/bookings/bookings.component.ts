import { error } from 'protractor';
import { CurrentItinerary } from '@ojashub/voyaah-common';
import { Component, OnInit } from '@angular/core';
import { BookingServiceService } from '../../../service-module/booking-service.service';
import { Router } from '@angular/router';
import { UserItineraryService } from '@app/service-module/user-itinerary.service';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss'],
})
export class BookingsComponent implements OnInit {
  transactions: CurrentItinerary[] = [];
  history: CurrentItinerary[] = [];
  upcoming: CurrentItinerary[] = [];
  constructor(
    private bookingService: BookingServiceService,
    private userItineraryService: UserItineraryService,
    private router: Router
  ) {
    this.getTransactions();
  }

  ngOnInit() {}
  async getTransactions() {
    try {
      await this.bookingService.getBookingHistory().then((transactions) => {
        this.transactions = transactions;
        this.categorize();
      });

      console.log('transactions', this.transactions);
    } catch (error) {
      console.log(error);
    }
  }
  categorize() {
    let today: Date = new Date();
    for (let i = 0; i < this.transactions.length; i++) {
      if (new Date(this.transactions[i].startDate) > today) {
        this.upcoming.push(this.transactions[i]);
      } else {
        this.history.push(this.transactions[i]);
      }
    }
    console.log('history', this.history);
    console.log('upcoming', this.upcoming);
  }
  viewTrip(index) {
    this.bookingService.selectedBooking.next(this.upcoming[index]);
    this.router.navigate(['/view-booking']);

    // this.userItineraryService.setreturnPlan(this.upcoming[index].returnPlan);
    // this.userItineraryService.updateTimelineData(
    //   this.upcoming[index].dayPlanner
    // );
    // this.router.navigate(['/preview']);
  }
}
