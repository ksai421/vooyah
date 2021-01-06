import { TravelPackage } from './../staycation.types';
import { Component, OnInit } from '@angular/core';
import { StaycationService } from '../service-module/staycation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfileService } from '@app/service-module/user-profile.service';
import { ModalController, Platform } from '@ionic/angular';
import { LoginComponent } from '@app/account/components/login.component';
import { UserItineraryService } from '@app/service-module/user-itinerary.service';
import { TravellersDetails } from '@ojashub/voyaah-common';
import { PaymentService } from '@app/service-module/payment.service';
// import $ from 'jquery';
const { v1: uuidv1 } = require('uuid');
@Component({
  selector: 'app-staycation-preview',
  templateUrl: './staycation-preview.component.html',
  styleUrls: ['./staycation-preview.component.scss'],
})
export class StaycationCitiesComponent implements OnInit {
  showTourPlan = true;
  showLocation = false;
  staycationPreviewData: TravelPackage;
  values: any;
  traveler_messages: any = [];
  staycationPreviewData1: any = [];
  packages: TravelPackage[];
  key: string;
  item_qty: any;
  userLoggedIn: boolean;
  adultscount = 1;
  childrencount = 0;
  infantscount = 0;
  stayCationTravellersDetails: TravellersDetails;
  isLoading = false;
  onAndroidPLatform = false;
  onIOSPlatform = false;
  // userData: any = [];
  constructor(
    private staycationService: StaycationService,
    private route: ActivatedRoute,
    private router: Router,
    private userProfileService: UserProfileService,
    public modalController: ModalController,
    private userItineraryService: UserItineraryService,
    private pay: PaymentService,
    private platform: Platform
  ) {
    this.route.params.subscribe((params) => (this.key = params.id));
    this.getPackages();
    this.onAndroidPLatform = this.platform.is('android');
    this.onIOSPlatform = this.platform.is('ios');
    console.log('platform', this.onAndroidPLatform, this.onIOSPlatform);
    this.item_qty = 0;
  }

  ngOnInit() {
    // this.staycationService.selectedPackageId.subscribe((id) => {
    //   this.staycationPreviewData = this.staycationService.getPackage(id);
    //   console.log('selected package', this.staycationPreviewData);
    //   if (this.staycationPreviewData.values.activities.length === 0)
    //     this.showTourPlan = false;
    // });
    this.userProfileService.currentUserNavigate.subscribe((res) => {
      console.log(res, 'rsep');
      this.userLoggedIn = res;
    });
    this.staycationService.staycationTravellersChanged.subscribe(
      (travellers: TravellersDetails) => {
        this.stayCationTravellersDetails = travellers;
        console.log('staycationtravelers', this.stayCationTravellersDetails);
      }
    );
  }

  async getPackages() {
    try {
      this.packages = await this.staycationService.getStaycations();
      console.log('staycations', this.packages);
      this.packages.map((data) => {
        if (data.id === this.key) {
          this.staycationPreviewData = data;
          this.assignMinimumCount();
          if (this.staycationPreviewData.values.activities.length === 0)
            this.showTourPlan = false;
          console.log('11', this.staycationPreviewData);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
  assignMinimumCount() {
    this.adultscount = this.staycationPreviewData.values.travellers.minAdults;
    this.childrencount = this.staycationPreviewData.values.travellers.minChildren;
  }
  // infantIncrementQty() {
  //   this.item_qty += 1;
  //   console.log(this.item_qty + 1);
  // }
  // infantDecrementQty() {
  //   if (this.item_qty - 1 < 1) {
  //     this.item_qty = 0;
  //     console.log('item_1->' + this.item_qty);
  //   } else {
  //     this.item_qty -= 1;
  //     console.log('item_2->' + this.item_qty);
  //   }
  // }
  async processBooking() {
    this.userItineraryService.updateTravellers({
      adultCount: this.adultscount,
      childCount: this.childrencount,
      infantCount: this.infantscount,
    });
    if (this.userLoggedIn === true) {
      if (this.stayCationTravellersDetails.adults.length > 0) {
        console.log('travellers selected');
        await this.bookStaycation();
      } else {
        this.userProfileService.navigateToTravellers.next('fromstaycations');
        this.router.navigate(['/travellers']);
      }
    } else {
      const modal = await this.modalController.create({
        component: LoginComponent,
        cssClass: 'login-modal-css',
        componentProps: { value: 123 },
      });
      return await modal.present();
    }
  }
  adultCountChange(type) {
    if (type == 'decrease') {
      if (
        this.adultscount >
        this.staycationPreviewData.values.travellers.minAdults
      ) {
        this.adultscount--;
      }
    } else {
      if (
        this.adultscount <
        this.staycationPreviewData.values.travellers.maxAdults
      ) {
        this.adultscount++;
      }
    }
  }
  childCountChange(type) {
    if (type == 'decrease') {
      if (
        this.childrencount >
        this.staycationPreviewData.values.travellers.minChildren
      ) {
        this.childrencount--;
      }
    } else {
      if (
        this.childrencount <
        this.staycationPreviewData.values.travellers.maxChildren
      ) {
        this.childrencount++;
      }
    }
  }
  infantCountChange(type) {
    if (type == 'decrease') {
      // this.infantscount--;
    } else {
      // this.infantscount++;
    }
  }
  gototravellers() {
    this.userProfileService.navigateToTravellers.next('fromstaycations');
    this.router.navigate(['/travellers']);
  }
  async bookStaycation() {
    this.isLoading = true;
    await this.staycationService
      .bookStaycations(
        this.staycationPreviewData,
        this.stayCationTravellersDetails
      )
      .then((returnvalue) => {
        console.log('return_in_stay_preview', returnvalue);
        var tranId = this.staycationService.getStaycationTransactionId();
        if (this.onIOSPlatform == true || this.onAndroidPLatform == true) {
          this.pay.redirectToPayment(
            tranId,
            this.staycationPreviewData.values.fare.totalFare,
            'INR',
            'EN',
            'staycation',
            'mobile'
          );
        } else {
          this.pay.redirectToPayment(
            tranId,
            this.staycationPreviewData.values.fare.totalFare,
            'INR',
            'EN',
            'staycation'
          );
        }
      })
      .catch((error) => {
        console.log(error);
        this.isLoading = false;
      });
  }
}
