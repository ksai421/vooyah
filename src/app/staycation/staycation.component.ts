import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaycationService } from './service-module/staycation.service';
import { TravelPackage } from './staycation.types';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Options } from 'ng5-slider/options';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-staycation',
  templateUrl: './staycation.component.html',
  styleUrls: ['./staycation.component.scss'],
})
export class StaycationComponent implements OnInit {
  cityTourList: any = [
    { id: 1, name: 'Yoga and Wellness ' },
    { id: 2, name: 'Island' },
    { id: 3, name: 'Adventure' },
    { id: 4, name: 'Desert' },
    { id: 5, name: 'Lakes and Rivers' },
    { id: 6, name: 'History and Culture' },
    { id: 7, name: 'Metro life' },
    { id: 8, name: 'Beach' },
    { id: 9, name: 'Hills and Mountains ' },
    { id: 10, name: 'Forest and Wildlife ' },
  ];
  minValue = 20000;
  maxValue = 50000;
  options: Options = {
    floor: 5000,
    ceil: 100000,
  };
  timerange = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  date: Date;
  minDate: Date;
  maxDate: Date;
  values: any;
  p = 1;
  range: any;
  packages: TravelPackage[];
  packageData: TravelPackage[];
  filterpackages = [];
  cities_list: any;
  filteredItems: any;
  destinationName: any;
  cityName: string;
  showCityNames: boolean;
  isSliderRange: boolean;
  errorMessage = false;
  interval;
  timeLeft: number;
  tourCityNames: any;
  checkedList: any = [];

  constructor(
    private Router: Router,
    private staycationService: StaycationService,
    private formBuilder: FormBuilder,
    public toastController: ToastController
  ) {
    //this.getPackages();
    this.getStacationsList();
  }
  registerForm: FormGroup;
  submitted = false;
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      destination: [''],
      startDate: [''],
      endDate: [''],
    });
    this.getCItiesList();
  }

  async getStacationsList() {
    try {
      this.packages = await this.staycationService.stacationList();
      console.log('Stacations', this.packages);
      this.packageData = this.packages;
    } catch (e) {
      console.log(e);
    }
  }

  // async getPackages() {
  //   try {
  //     this.packages = await this.staycationService.getStaycations();
  //     console.log(this.packages[0].values.tags, 'featured tags');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  sort(order) {
    switch (
      order.taget.value
      // case 'low-to-high': {
      //   this.values = this.values[0].sort(
      //     (low: pData, high) => +low.price - +high.Price
      //   );
      //   break;
      // }
    ) {
    }
  }
  UserDetails(value) {
    this.staycationService.packageId.next(value);
    this.Router.navigate(['/staycation-preview/' + value]);
  }
  get f() {
    return this.registerForm.controls;
  }

  onSumbit() {
    this.submitted = true;
    // stop here if form is invalid
    if (
      this.registerForm.invalid ||
      this.registerForm.controls.destination.value == undefined ||
      this.registerForm.controls.destination.value == '' ||
      this.registerForm.controls.destination.value == null
    ) {
      this.errorMessage = false;
      // return;
    }
    this.destinationName = this.registerForm.controls.destination.value;
    if (this.tourCityNames) {
      this.getAdvanceTourFilter();
    } else if (this.destinationName) {
      this.getDestination();
    }

    console.log(this.destinationName, 'destinationName');
  }

  // slider range max and min
  valueChange(minValue, maxValue): void {
    console.log(minValue, 'minValue');
    console.log(maxValue, 'maxValue');
  }

  // Get Destination List from api
  async getCItiesList() {
    try {
      this.staycationService.getcitylist().subscribe((result) => {
        this.cities_list = result;
        console.log(this.cities_list, 'Data is fetching. . .');
        // return result;
      });
    } catch (error) {
      console.log('while getting data is err', error);
    }
  }

  //  Destination cityList filters

  filterItem(e) {
    //console.log('heloooo', e.target.value.length);
    let datalist: TravelPackage[] = this.packages;
    if (e.target.value.length == 0) {
      this.packages = this.packageData;
    }
    if (e.target.value) {
      let data: TravelPackage[];
      data = this.packages.filter((res) => {
        return res.name.toLowerCase().includes(e.target.value.toLowerCase());
      });
      if (data) {
        this.packages = data;
      } else {
        this.packages = this.packageData;
      }
      if (data.length === 0) {
        this.packages = this.packageData;
      }
    } else {
      this.packages = this.packageData;
    }
    //TODO: use the below things for cards on search
    // if (e.length == 0) {
    //   this.packages = datalist;
    //   this.showCityNames = true;
    // }
    // if (e.length < 1) {
    //   this.showCityNames = false;
    // }

    // if (data.length > 1) {
    //   this.packages = data;
    // } else {
    //   this.packages = datalist;
    // }
    // console.log('llo', data);
    // when nothing has typed
    // this.filteredItems = Object.assign([], this.cities_list).filter(
    //   (item) =>
    //     item.destinationName.toLowerCase().indexOf(value.toLowerCase()) > -1
    // );
  }
  // Get Destination ClityList from api
  async getDestination() {
    try {
      this.staycationService
        .getDestinationCity(this.destinationName)
        .subscribe((result) => {
          if (result.length === 0) {
            this.errorMessage = true;
            this.getStacationsList();
            //   let toast = this.toastController.create({
            //     message: `${this.destinationName}`,
            //     duration: 3500,
            //     position: 'middle',
            //     cssClass: 'toast-scheme',
            //   });
            //   toast.then((toast) => toast.present());
            // } else {
            //   this.errorMessage = false;
          }
          // this.packages = result;
          if ((this.packages = result)) {
            return result;
          }
        });
      this.interval = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          clearInterval(this.interval);
          this.errorMessage = false;
          this.timeLeft = null;
          return;
        }
      }, 2500);
    } catch (error) {
      console.log('while getting data is err', error);
    }
  }

  // get Tour Categories from api

  async getAdvanceTourFilter() {
    try {
      this.staycationService
        .getAdvanceTourCategories(this.tourCityNames)
        .subscribe((tourCitysResponce) => {
          if (tourCitysResponce.length === 0) {
            //this.errorMessage = true;
            this.getStacationsList();
            let toast = this.toastController.create({
              message: `No tour categories avaliable at "${this.tourCityNames}"`,
              duration: 1500,
              position: 'middle',
              cssClass: 'toast-scheme',
            });
            toast.then((toast) => toast.present());
          }
          // else {
          //   this.errorMessage = false;
          // }
          if ((this.packages = tourCitysResponce)) {
            return tourCitysResponce;
          }
        });
    } catch (error) {}
  }

  getCity(name) {
    this.cityName = name;
    this.showCityNames = false;
  }
  sliderForm() {
    this.isSliderRange = !this.isSliderRange;
    event.stopPropagation();
  }
  keyPress(event: any) {
    const pattern = /^[a-zA-Z ]*$/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

  // checkbox Tour Categories names
  onCheckboxChange(option, event) {
    if (event.target.checked) {
      this.checkedList.push(option.value);
    } else {
      for (var i = 0; i < this.cityTourList.length; i++) {
        if (this.checkedList[i] == option.value) {
          this.checkedList.splice(i, 1);
          this.getStacationsList();
        }
      }
    }

    this.tourCityNames = this.checkedList + '';
    console.log(this.tourCityNames, 'rep');
  }
}
