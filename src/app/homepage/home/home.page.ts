import { DatePipe } from '@angular/common';
import { CitiesListService } from './../../service-module/cities-list.service';
import { City } from '@ojashub/voyaah-common';
import { UserItineraryService } from './../../service-module/user-itinerary.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { StaycationService } from '@app/staycation/service-module/staycation.service';
import { TravelPackage } from '@ojashub/voyaah-common';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  providers: [DatePipe],
})
export class HomePage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    autoplay: {
      delay: 3000,
    },
  };
  @ViewChild(IonSlides) slides: IonSlides;
  @ViewChild('slideWithNav2', { static: false }) slideWithNav2: IonSlides;
  @ViewChild('slideWithNav3', { static: false }) slideWithNav3: IonSlides;

  packages: TravelPackage[];
  packageData: TravelPackage[];

  adultplus = '';
  adultminus = '';
  childplus = '';
  childminus = '';
  inftplus = '';
  inftminus = '';
  date: Date;
  minDate: Date;
  maxDate: Date;
  adultscount = 1;
  childrencount = 0;
  infantscount = 0;
  tocitylist = [];
  tocityitarate = [];
  showconformcard = false;
  showhomecard = true;
  stars = [1, 2, 3, 4, 5];
  setcount = 0;
  citiesdata: any;
  datafromlocals: any;
  fromcitysearchTerm: FormControl = new FormControl();
  tocitysearchTerm: FormControl = new FormControl();
  filterfromdata = [];
  filtertodata = [];
  setorigincityname: string;
  setdestinationcityname: string;
  showtocity = false;
  showfromcity = false;
  fromCity: string;
  toCity: string;
  timerange = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  confirmdestinationDates = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  setFromcard;
  timelinearray = [];
  todestinationsarray = [];
  currentDate: Date;
  currentOriginCity: City;
  currentdestinationCity: City;
  confirmOrigincity: City;
  confirmDestinationcities: City[];
  getFromCityId: number;
  getToCityId: number;
  featuredPackeges: any = [];
  bestValuePackeges: any = [];
  categoryPackages: any = [];
  exploreDestinationsCategory: any = [];
  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private citiesListService: CitiesListService,
    private userItineraryService: UserItineraryService,
    private datePipe: DatePipe,
    private menuCtrl: MenuController,
    private staycationService: StaycationService
  ) {
    this.currentOriginCity = this.userItineraryService.userItineraryData().originCity;
    this.activatedRoute.params.subscribe((res) => {
      this.setFromcard = res.setcard;
      if (this.setFromcard === 'confirmDesitinations') {
        this.showconformcard = true;
        this.showhomecard = false;
        this.confirmDesitinations();
      }
    });
  }

  ngOnInit(): void {
    let currentDate = new Date();
    this.minDate = new Date(currentDate);
    this.maxDate = new Date(currentDate.getFullYear() + 1, 11, 31);
    const userItineraryData = this.userItineraryService.userItineraryData();
    if (userItineraryData.originCity?.cityName) {
      this.setorigincityname =
        userItineraryData.originCity.cityName +
        ' , ' +
        userItineraryData.originCity.countryName +
        ' , ' +
        userItineraryData.originCity.airportCode;
      this.setdestinationcityname =
        userItineraryData?.destinationCities[0]?.cityName +
        ' , ' +
        userItineraryData.destinationCities[0]?.countryName +
        ' , ' +
        userItineraryData.destinationCities[0]?.airportCode;
      this.adultscount = userItineraryData.travellers.adultCount;
      this.childrencount = userItineraryData.travellers.childCount;
      this.infantscount = userItineraryData.travellers.infantCount;
      this.getFromCityId = userItineraryData.originCity.id;
      this.getToCityId = userItineraryData?.destinationCities[0]?.id;
      const dateCurrent = this.datePipe.transform(currentDate, 'yyyy/MM/dd');
      const dateStart = this.datePipe.transform(
        new Date(userItineraryData.startDate),
        'yyyy/MM/dd'
      );
      const dateEnd = this.datePipe.transform(
        new Date(userItineraryData.endDate),
        'yyyy/MM/dd'
      );
      if (dateStart < dateCurrent || dateEnd < dateCurrent) {
        this.timerange.controls.start.setValue(null);
        this.timerange.controls.end.setValue(null);
      } else {
        this.timerange.controls.start.setValue(userItineraryData.startDate);
        this.timerange.controls.end.setValue(userItineraryData.endDate);
      }
    }

    this.subscribeToCityChanges();
    if (this.adultscount + this.childrencount == 9) {
      this.adultplus = 'desabled_display';
      this.childplus = 'desabled_display';
    } else {
      this.adultplus = '';
      this.childplus = '';
    }

    if (this.adultscount == 1) {
      this.adultminus = 'desabled_display';
    } else {
      this.adultminus = '';
    }
    if (this.childrencount == 0) {
      this.childminus = 'desabled_display';
    } else {
      this.childminus = '';
    }
    if (this.infantscount == this.adultscount) {
      this.inftplus = 'desabled_display';
      this.inftminus = '';
    } else {
      this.inftplus = '';
    }
    if (this.infantscount == 0) {
      this.inftminus = 'desabled_display';
    }
    this.menuCtrl.enable(false);
    this.getFeaturedList();
  }

  confirmDesitinations(): void {
    const userItineraryData = this.userItineraryService.userItineraryData();
    this.confirmOrigincity = userItineraryData.originCity;
    this.confirmDestinationcities = userItineraryData.destinationCities;
    this.confirmdestinationDates.controls.start.setValue(
      userItineraryData.startDate
    );
    this.confirmdestinationDates.controls.end.setValue(
      userItineraryData.endDate
    );
    this.adultscount = userItineraryData.travellers.adultCount;
    this.childrencount = userItineraryData.travellers.childCount;
    this.infantscount = userItineraryData.travellers.infantCount;
  }

  stp_prp(event: any): void {
    event.stopPropagation();
  }

  // Form City start
  subscribeToCityChanges(): void {
    this.fromcitysearchTerm.valueChanges.subscribe((partialName: string) => {
      if (partialName === undefined || partialName === '') {
        this.showfromcity = false;
        return;
      }
      this.showfromcity = true;
      this.fromCity = partialName;
      this.filterfromdata = this.citiesListService.filterCitiesByPartialName(
        partialName
      );
    });

    this.tocitysearchTerm.valueChanges.subscribe((partialName) => {
      if (partialName === undefined || partialName === '') {
        this.showtocity = false;
        return;
      }
      this.showtocity = true;
      this.toCity = partialName;
      this.filtertodata = this.citiesListService.filterCitiesByPartialName(
        partialName
      );
    });
  }

  getOriginCity(
    cityName: string,
    countryName: string,
    id: number,
    airportCode: string
  ): void {
    this.getFromCityId = null;
    this.setorigincityname =
      cityName + ' , ' + countryName + ' (' + airportCode + ')';
    this.showfromcity = false;
    this.currentOriginCity = this.citiesListService.getCityById(id);
  }

  getDestinationCity(
    cityName: string,
    countryName: string,
    id: number,
    airportCode: string
  ): void {
    this.getToCityId = null;
    this.setdestinationcityname =
      cityName + ' , ' + countryName + ' (' + airportCode + ')';
    this.showtocity = false;
    this.currentdestinationCity = this.citiesListService.getCityById(id);
  }

  async navigationToAddDestination(): Promise<void> {
    let verification: boolean;
    if (
      this.datePipe.transform(this.timerange.value.end, 'yyyy/MM/dd') !==
      this.datePipe.transform(this.timerange.value.start, 'yyyy/MM/dd')
    ) {
      if (this.getFromCityId !== null) {
        this.currentOriginCity = this.citiesListService.getCityById(
          this.getFromCityId
        );
      }

      if (this.getToCityId !== null) {
        this.currentdestinationCity = this.citiesListService.getCityById(
          this.getToCityId
        );
      }

      if (
        (this.currentOriginCity,
          this.currentdestinationCity,
          this.timerange.value.start,
          this.timerange.value.end)
      ) {
        verification = this.citiesListService.verificationData(
          this.currentOriginCity,
          this.currentdestinationCity,
          this.timerange.value.start,
          this.timerange.value.end
        );
      }
      if (verification != true) {
        return;
      } else {
        this.userItineraryService.setBasicInfo(
          this.timerange.value.start,
          this.timerange.value.end,
          this.currentOriginCity,
          [this.currentdestinationCity]
        );
        this.userItineraryService.updateTravellers({
          adultCount: this.adultscount,
          childCount: this.childrencount,
          infantCount: this.infantscount,
        });
        this.route.navigateByUrl('/destination');
      }
    }
  }

  navigationConfirmDestinationToAddDestination(): void {
    this.userItineraryService.setBasicInfo(
      this.confirmdestinationDates.value.start,
      this.confirmdestinationDates.value.end,
      this.confirmOrigincity,
      this.confirmDestinationcities
    );
    this.userItineraryService.updateTravellers({
      adultCount: this.adultscount,
      childCount: this.childrencount,
      infantCount: this.infantscount,
    });
    this.route.navigateByUrl('/destination');
  }

  navigationConfirmDestinationToTimelinepage(): void {
    // TODO Date validation
    if (
      this.datePipe.transform(
        this.confirmdestinationDates.value.end,
        'yyyy/MM/dd'
      ) !==
      this.datePipe.transform(
        this.confirmdestinationDates.value.start,
        'yyyy/MM/dd'
      )
    ) {
      this.userItineraryService.getBooleanValue(true);
      this.userItineraryService.setBasicInfo(
        this.confirmdestinationDates.value.start,
        this.confirmdestinationDates.value.end,
        this.confirmOrigincity,
        this.confirmDestinationcities
      );
      this.userItineraryService.updateTravellers({
        adultCount: this.adultscount,
        childCount: this.childrencount,
        infantCount: this.infantscount,
      });
      this.route.navigateByUrl('/time-line');
    }
  }

  navigatetotimeline(): void {
    this.userItineraryService.getBooleanValue(true);
    if (this.getFromCityId !== null) {
      this.currentOriginCity = this.citiesListService.getCityById(
        this.getFromCityId
      );
    }

    if (this.getToCityId !== null) {
      this.currentdestinationCity = this.citiesListService.getCityById(
        this.getToCityId
      );
    }

    let verification: boolean;
    if (
      (this.currentOriginCity,
        this.currentdestinationCity,
        this.timerange.value.start,
        this.timerange.value.end)
    ) {
      verification = this.citiesListService.verificationData(
        this.currentOriginCity,
        this.currentdestinationCity,
        this.timerange.value.start,
        this.timerange.value.end
      );
    }
    if (verification != true) {
      return;
    } else {
      this.userItineraryService.setBasicInfo(
        this.timerange.value.start,
        this.timerange.value.end,
        this.currentOriginCity,
        [this.currentdestinationCity]
      );
      this.userItineraryService.updateTravellers({
        adultCount: this.adultscount,
        childCount: this.childrencount,
        infantCount: this.infantscount,
      });
      this.route.navigateByUrl('/time-line');
    }
  }

  getadultsplus() {
    if (this.adultscount + this.childrencount < 9) {
      this.adultscount++;
      if (this.adultscount + this.childrencount == 9) {
        this.adultplus = 'desabled_display';
        this.childplus = 'desabled_display';
      } else {
        this.adultplus = '';
        this.childplus = '';
      }
    }

    if (this.adultscount == 1) {
      this.adultminus = 'desabled_display';
    } else {
      this.adultminus = '';
    }
    if (this.adultscount == this.infantscount || this.infantscount == 4) {
      this.inftplus = 'desabled_display';
    } else {
      this.inftplus = '';
    }
  }

  getadultsminus() {
    if (this.adultscount > 1) {
      this.adultscount--;
    }
    if (this.adultscount < this.infantscount) {
      this.infantscount--;
    }
    if (this.adultscount == 1) {
      this.adultminus = 'desabled_display';
    } else {
      this.adultminus = '';
    }
    if (this.adultscount != 9) {
      this.adultplus = '';
      this.childplus = '';
    }
    if (this.adultscount == this.infantscount) {
      this.inftplus = 'desabled_display';
    }
  }

  getchildrenplus() {
    if (this.adultscount + this.childrencount < 9) {
      this.childrencount++;
      if (this.adultscount + this.childrencount == 9) {
        this.childplus = 'desabled_display';
        this.adultplus = 'desabled_display';
      } else {
        this.childplus = '';
        this.adultplus = '';
      }
    }
    if (this.childrencount == 0) {
      this.childminus = 'desabled_display';
    } else {
      this.childminus = '';
    }
  }

  getchildrenminus() {
    if (this.childrencount > 0) {
      this.childrencount--;
      if (this.childrencount == 0) {
        this.childminus = 'desabled_display';
      } else {
        this.childminus = '';
      }
      if (this.adultscount + this.childrencount != 9) {
        this.childplus = '';
        this.adultplus = '';
      }
    }
  }

  getinfantsplus() {
    if (this.infantscount < this.adultscount) {
      if (this.infantscount < 4) {
        this.infantscount++;
      }
      if (this.infantscount == this.adultscount || this.infantscount == 4) {
        this.inftplus = 'desabled_display';
      } else {
        this.inftplus = '';
      }
    }
    if (this.infantscount == 0) {
      this.inftminus = 'desabled_display';
    } else {
      this.inftminus = '';
    }
  }

  getinfantsminus() {
    if (this.infantscount > 0) {
      this.infantscount--;
      this.inftplus = '';
    }
    if (this.infantscount == 0) {
      this.inftminus = 'desabled_display';
    }
  }
  resetclick() {
    this.adultscount = 1;
    this.childrencount = 0;
    this.infantscount = 0;
    this.adultplus = '';
    this.adultminus = 'desabled_display';
    this.childplus = '';
    this.childminus = 'desabled_display';
    this.inftplus = '';
    this.inftminus = 'desabled_display';
  }

  deletedestination(id) {
    let filterd_toCity;
    let searchavail = this.confirmDestinationcities.filter((x) => {
      if (x === id) {
        filterd_toCity = id;
      }
    });
    if (searchavail.length == 0) {
      let index_value = this.confirmDestinationcities.indexOf(filterd_toCity);
      this.confirmDestinationcities.splice(index_value, 1);
    }
  }

  imagesPackages = [
    {
      city: 'Honeymoon Special',
      packages: '65+packages',
      imageUrl: '../../assets/images/NoPath - Copy (13).png',
    },
    {
      city: 'Adventure',
      packages: '30+packages',
      imageUrl: '../../assets/images/NoPath - Copy (64).png',
    },
    {
      city: 'Wild Life',
      packages: '18+packages',
      imageUrl: '../../assets/images/NoPath - Copy (13).png',
    },
    {
      city: 'Nature',
      packages: '40+packages',
      imageUrl: '../../assets/images/NoPath - Copy (64).png',
    },
  ];

  slidePre() {
    this.slides.slidePrev();
  }
  slideNex() {
    this.slides.slideNext();
  }
  async getFeaturedList() {
    try {
      this.packages = await this.staycationService.stacationList();
      this.packageData = this.packages;
      this.packageData.map((res) => {
        if (res.values?.tags?.length > 0) {
          if (res.values.tags[0] === 'BestValue') {
            this.bestValuePackeges.push(res);
          } else {
            if (res.values.tags[0] === 'featured') {
              this.featuredPackeges.push(res);
            }
          }
        }
        for (var i = 0; i < res.values.category.length; i++) {
         // console.log(res.values.category[i], 'exploreDestinations');
          if (res.values?.category?.length > 0) {
            if (res.values.category[i]) {
              this.categoryPackages.push(res);
              this.exploreDestinationsCategory = new Set(this.categoryPackages);
            }
            //console.log(this.categoryPackages, '23232');
          }
        }
      });
    } catch (e) {
      console.log(e);
    }
  }
  nextSlide() { }
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }
  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  slideOptsTwo = {
    // initialSlide: 1,
    // slidesPerView: 4,
    // loop: false,
    // centeredSlides: false,
    // spaceBetween: 20,
    initialSlide: 0,
    slidesPerView: 4,
  };
  travellerPackagePreview(value) {
    this.staycationService.packageId.next(value);
    this.route.navigate(['/staycation-preview/' + value]);
  }
}
