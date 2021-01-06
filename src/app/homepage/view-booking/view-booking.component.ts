import { Component, OnInit } from '@angular/core';
import { BookingServiceService } from '@app/service-module/booking-service.service';
import { CurrentItinerary } from '@ojashub/voyaah-common';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.scss'],
})
export class ViewBookingComponent implements OnInit {
  showFlightPrice = false;
  showActivityPrice = false;
  flightButtonName = 'chevron-down-outline';
  activityButtonName = 'chevron-down-outline';
  totalDays = 0;
  selectedBooking: CurrentItinerary;
  hotelCurrency: string;
  flightCount = 0;
  hotelCount = 0;
  constructor(private bookingService: BookingServiceService) {
    this.bookingService.selectedBookingData.subscribe(
      (selectedBooking: CurrentItinerary) => {
        console.log('viewbooking', selectedBooking);
        this.selectedBooking = selectedBooking;
      }
    );
    this.calculateDays();
    this.findHotelCurrency();
    this.calculateCount();
  }

  ngOnInit() {}
  calculateDays() {
    this.totalDays =
      (Date.UTC(
        new Date(this.selectedBooking.endDate).getFullYear(),
        new Date(this.selectedBooking.endDate).getMonth(),
        new Date(this.selectedBooking.endDate).getDate()
      ) -
        Date.UTC(
          new Date(this.selectedBooking.startDate).getFullYear(),
          new Date(this.selectedBooking.startDate).getMonth(),
          new Date(this.selectedBooking.startDate).getDate()
        )) /
      86400000;
    console.log(this.totalDays);
  }
  findHotelCurrency() {
    Loop1: for (let i = 0; i < this.selectedBooking.dayPlanner.length; i++) {
      for (
        let j = 0;
        j < this.selectedBooking.dayPlanner[i].hotelDetails.rooms.length;
        j++
      ) {
        if (
          this.selectedBooking.dayPlanner[i].hotelDetails.rooms[j].currency !=
            '' ||
          this.selectedBooking.dayPlanner[i].hotelDetails.rooms[j].currency !=
            null ||
          this.selectedBooking.dayPlanner[i].hotelDetails.rooms[j].currency !=
            undefined
        ) {
          this.hotelCurrency = this.selectedBooking.dayPlanner[
            i
          ].hotelDetails.rooms[j].currency;
          break Loop1;
        }
      }
    }
  }
  calculateCount() {
    //flights count
    for (let i = 0; i < this.selectedBooking.dayPlanner.length; i++) {
      if (this.selectedBooking.dayPlanner[i].flightDetails.sequenceNumber) {
        this.flightCount = this.flightCount + 1;
      }
    }
    //hotels count
    for (let i = 0; i < this.selectedBooking.dayPlanner.length; i++) {
      if (this.selectedBooking.dayPlanner[i].hotelDetails.selectedRoomPrice) {
        this.hotelCount = this.hotelCount + 1;
      }
    }
  }
  toggleFlightPrice() {
    this.showFlightPrice = !this.showFlightPrice;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.showFlightPrice) this.flightButtonName = 'chevron-up-outline';
    else this.flightButtonName = 'chevron-down-outline';
  }
  toggleActivityPrice() {
    this.showActivityPrice = !this.showActivityPrice;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.showActivityPrice) this.activityButtonName = 'chevron-up-outline';
    else this.activityButtonName = 'chevron-down-outline';
  }
  diff(start, end) {
    var startDate = new Date(start);
    var endDate = new Date(end);
    var diff = endDate.getTime() - startDate.getTime();
    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(diff / 1000 / 60);
    if (hours < 0) hours = hours + 24;
    return (
      (hours <= 9 ? '0' : '') +
      hours +
      'h ' +
      (minutes <= 9 ? '0' : '') +
      minutes +
      'm'
    );
  }
}
