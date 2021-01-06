import { Component, OnInit } from '@angular/core';
import { TravellerCount, TravellersDetails } from '@ojashub/voyaah-common';
import { UserItineraryService } from '@app/service-module/user-itinerary.service';
import { UserProfileDetails } from '@ojashub/voyaah-common';
import { UserProfileService } from '@app/service-module/user-profile.service';
import { PopoverController } from '@ionic/angular';
import * as moment from 'moment';
import { AddTravellersSlideMenuComponent } from '../myaccount/add-travellers-slide-menu/add-travellers-slide-menu.component';
import {
  FormGroup,
  FormArray,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StaycationService } from '@app/staycation/service-module/staycation.service';
declare var $;
@Component({
  selector: 'app-traveller-selection',
  templateUrl: './traveller-selection.component.html',
  styleUrls: ['./traveller-selection.component.scss'],
})
export class TravellerSelectionComponent implements OnInit {
  submitted = false;
  travellersList: UserProfileDetails[] = [];
  adults: UserProfileDetails[] = [];
  children: UserProfileDetails[] = [];
  infants: UserProfileDetails[] = [];
  adultSelectedIndexes: number[] = [];
  childSelectedIndexes: number[] = [];
  infantSelectedIndexes: number[] = [];
  userDetails: UserProfileDetails;
  homeSelectedCount: TravellerCount = {
    adultCount: 1,
    childCount: 0,
    infantCount: 0,
  };
  dynamicForm: FormGroup;
  adultDisplay: boolean[] = [];
  childDisplay: boolean[] = [];
  infantDisplay: boolean[] = [];
  navFrom: string;
  key: any;
  constructor(
    private itineraryService: UserItineraryService,
    private userProfileService: UserProfileService,
    public popoverController: PopoverController,
    private formBuilder: FormBuilder,
    private router: Router,
    private staycationService: StaycationService
  ) {
    this.staycationService.selectedPackageId.subscribe((id) => {
      this.key = id;
    });
    this.userProfileService.routeToTravellers.subscribe((from) => {
      this.navFrom = from;
    });
  }

  ngOnInit() {
    this.dynamicForm = this.formBuilder.group({
      adultsInput: new FormArray([]),
      childrenInput: new FormArray([]),
      infantsInput: new FormArray([]),
    });

    console.log('navfrom', this.navFrom);
    this.userProfileService.currentUserProfileData.subscribe((res) => {
      this.userDetails = this.userProfileService.getUserDetails();
      this.travellersList = this.userProfileService.getFamilyDetails();
      this.devideIntoCatogories();
      // this.popoverController.dismiss();
    });
    this.itineraryService.itineraryChanged.subscribe((r) => {
      this.homeSelectedCount = this.itineraryService.userItineraryData().travellers;
      this.devideIntoCatogories();
      this.createFormFields();
    });
    this.homeSelectedCount = this.itineraryService.userItineraryData().travellers;
    this.userDetails = this.userProfileService.getUserDetails();
    this.travellersList = this.userProfileService.getFamilyDetails();
    this.devideIntoCatogories();
    this.createFormFields();
  }
  get f() {
    return this.dynamicForm.controls;
  }
  get adultsInput(): FormArray {
    return this.dynamicForm.get('adultsInput') as FormArray;
  }
  get childrenInput(): FormArray {
    return this.dynamicForm.get('childrenInput') as FormArray;
  }
  get infantsInput(): FormArray {
    return this.dynamicForm.get('infantsInput') as FormArray;
  }
  getValidity(i, age) {
    if (age == 'adult') {
      return (<FormArray>this.dynamicForm.get('adultsInput')).controls[i]
        .invalid;
    }
    if (age == 'child') {
      return (<FormArray>this.dynamicForm.get('childrenInput')).controls[i]
        .invalid;
    }
    if (age == 'infant') {
      return (<FormArray>this.dynamicForm.get('infantsInput')).controls[i]
        .invalid;
    }
  }
  createFormFields() {
    this.adultSelectedIndexes = [];
    this.childSelectedIndexes = [];
    this.infantSelectedIndexes = [];
    const adultControl = <FormArray>this.dynamicForm.controls.adultsInput;
    adultControl.controls = [];
    const childControl = <FormArray>this.dynamicForm.controls.childrenInput;
    childControl.controls = [];
    const infantControl = <FormArray>this.dynamicForm.controls.infantsInput;
    infantControl.controls = [];
    for (let i = 0; i < this.homeSelectedCount.adultCount; i++) {
      this.adultsInput.push(new FormControl('', Validators.required));
      this.adultSelectedIndexes.push(undefined);
    }
    for (let i = 0; i < this.homeSelectedCount.childCount; i++) {
      this.childrenInput.push(new FormControl('', Validators.required));
      this.childSelectedIndexes.push(undefined);
    }
    for (let i = 0; i < this.homeSelectedCount.infantCount; i++) {
      this.infantsInput.push(new FormControl('', Validators.required));
      this, this.infantSelectedIndexes.push(undefined);
    }
  }

  devideIntoCatogories() {
    this.adults = [];
    this.children = [];
    this.infants = [];
    // logged in user category
    let loggedInUserAge = this.age(this.userDetails.dateOfBirth);
    if (loggedInUserAge >= 12) {
      this.adults.push(this.userDetails);
      this.adultDisplay.push(true);
    } else if (loggedInUserAge >= 2 && loggedInUserAge < 12) {
      this.children.push(this.userDetails);
      this.childDisplay.push(true);
    } else {
      this.infants.push(this.userDetails);
      this.infantDisplay.push(true);
    }
    //family category
    for (let i = 0; i < this.travellersList.length; i++) {
      let age = this.age(this.travellersList[i].dateOfBirth);
      if (age >= 12) {
        this.adults.push(this.travellersList[i]);
        this.adultDisplay.push(true);
      }
      if (age >= 2 && age < 12) {
        this.children.push(this.travellersList[i]);
        this.childDisplay.push(true);
      }
      if (age < 2) {
        this.infants.push(this.travellersList[i]);
        this.infantDisplay.push(true);
      }
    }
  }
  age(dob) {
    const age = moment().diff(dob, 'years');
    return age;
  }
  adultSelect(value, formIndex, adultIndex) {
    $('#adultCollapse-' + formIndex).collapse('hide');
    console.log(value, formIndex, adultIndex);
    this.adultsInput.at(formIndex).setValue(value.firstName);
    if (this.adultSelectedIndexes.includes(adultIndex)) {
      console.log('already present');
    } else {
      this.adultSelectedIndexes[formIndex] = adultIndex;
      this.addRemoveFromDropDown('adult');
    }
    console.log('adultSelect', this.adultSelectedIndexes);
  }
  childSelect(value, formIndex, childIndex) {
    $('#childrenCollapse-' + formIndex).collapse('hide');
    console.log(value, formIndex, childIndex);
    this.childrenInput.at(formIndex).setValue(value.firstName);
    if (this.childSelectedIndexes.includes(childIndex)) {
      console.log('already present');
    } else {
      this.childSelectedIndexes[formIndex] = childIndex;
      this.addRemoveFromDropDown('child');
    }
    console.log('childSelect', this.childSelectedIndexes);
  }
  infantSelect(value, formIndex, infantIndex) {
    $('#infantCollapse-' + formIndex).collapse('hide');
    console.log(value, formIndex, infantIndex);
    this.infantsInput.at(formIndex).setValue(value.firstName);
    if (this.infantSelectedIndexes.includes(infantIndex)) {
      console.log('already present');
    } else {
      this.infantSelectedIndexes[formIndex] = infantIndex;
      this.addRemoveFromDropDown('infant');
    }
    console.log('infantSelect', this.infantSelectedIndexes);
  }
  addRemoveFromDropDown(ageGroup) {
    if (ageGroup == 'adult') {
      this.adultDisplay = [];
      this.adults.map((r) => {
        this.adultDisplay.push(true);
      });
      for (let i = 0; i < this.adultSelectedIndexes.length; i++) {
        if (this.adultSelectedIndexes[i] != undefined) {
          this.adultDisplay[this.adultSelectedIndexes[i]] = false;
        }
      }
    } else if (ageGroup == 'child') {
      this.childDisplay = [];
      this.children.map((r) => {
        this.childDisplay.push(true);
      });
      for (let i = 0; i < this.childSelectedIndexes.length; i++) {
        if (this.childSelectedIndexes[i] != undefined) {
          this.childDisplay[this.childSelectedIndexes[i]] = false;
        }
      }
    } else {
      this.infantDisplay = [];
      this.infants.map((r) => {
        this.infantDisplay.push(true);
      });
      for (let i = 0; i < this.infantSelectedIndexes.length; i++) {
        if (this.infantSelectedIndexes[i] != undefined) {
          this.infantDisplay[this.infantSelectedIndexes[i]] = false;
        }
      }
    }
  }
  async presentPopover(ev, age) {
    const popover = await this.popoverController.create({
      component: AddTravellersSlideMenuComponent,
      cssClass: 'addTravellerPopover',
      componentProps: {
        age: age,
      },
      event: ev,
      translucent: true,
      showBackdrop: false,
    });
    return await popover.present();
  }
  onSubmit() {
    this.submitted = true;
    if (this.dynamicForm.invalid) {
      console.log('invaid');
      return;
    }
    let travellers: TravellersDetails = {
      adults: [],
      children: [],
      infants: [],
    };
    this.adultSelectedIndexes.sort();
    this.childSelectedIndexes.sort();
    this.infantSelectedIndexes.sort();
    for (let i = 0; i < this.adultSelectedIndexes.length; i++) {
      travellers.adults.push(this.adults[this.adultSelectedIndexes[i]]);
    }
    for (let i = 0; i < this.childSelectedIndexes.length; i++) {
      travellers.children.push(this.children[this.childSelectedIndexes[i]]);
    }
    for (let i = 0; i < this.infantSelectedIndexes.length; i++) {
      travellers.infants.push(this.infants[this.infantSelectedIndexes[i]]);
    }
    if (this.navFrom != 'fromstaycations') {
      this.itineraryService.setTravellers(travellers);
      this.router.navigate(['/preview']);
    } else {
      this.staycationService.staycationTravellers.next(travellers);
      this.router.navigate(['/staycation-preview/' + this.key]);
    }
  }
}
