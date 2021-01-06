import { UserProfileDetails } from '@ojashub/voyaah-common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, PopoverController } from '@ionic/angular';
import { AddTravellersSlideMenuComponent } from '../add-travellers-slide-menu/add-travellers-slide-menu.component';
import { UserProfileService } from '@app/service-module/user-profile.service';
import { UserItineraryService } from '@app/service-module/user-itinerary.service';
import { Router } from '@angular/router';
import { Agent } from 'http';
import * as moment from 'moment';
import { TravellerCount, TravellersDetails } from '@ojashub/voyaah-common';
declare var $;
@Component({
  selector: 'app-addtravellers',
  templateUrl: './addtravellers.component.html',
  styleUrls: ['./addtravellers.component.scss'],
})
export class AddtravellersComponent implements OnInit {
  travellersList: UserProfileDetails[] = [];
  adults: UserProfileDetails[] = [];
  children: UserProfileDetails[] = [];
  infants: UserProfileDetails[] = [];
  registerForm: FormGroup;
  selectedtraveller;
  submitted = false;
  show = false;
  userDetails: any;
  nameChange = true;
  userName: string;
  iconName: string;
  userNameShow: string;
  constructor(
    public popoverController: PopoverController,
    public modalController: ModalController,
    private fb: FormBuilder,
    private userProfileService: UserProfileService
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNo: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      passport: this.fb.group({
        number: [''],
        country: [''],
        expiry: [''],
      }),
    });
    this.userDetails = this.userProfileService.getUserDetails();
    this.travellersList = this.userProfileService.getFamilyDetails();
    this.UserName();
    this.devideIntoCatogories();
    this.userProfileService.currentUserProfileData.subscribe((res) => {
      this.userDetails = this.userProfileService.getUserDetails();
      this.travellersList = this.userProfileService.getFamilyDetails();
      console.log(
        'travelers list constructor add traveller component',
        this.travellersList
      );
      console.log(res, this.userDetails);
      // this.popoverController.dismiss();
      this.UserName();
      this.devideIntoCatogories();
    });
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }
  modelChangeFn(value) {
    if (value) {
      this.show = true;
    } else if (value == '') {
      this.show = false;
    }
  }
  devideIntoCatogories() {
    this.adults = [];
    this.children = [];
    this.infants = [];
    for (let i = 0; i < this.travellersList.length; i++) {
      let age = this.age(this.travellersList[i].dateOfBirth);
      if (age >= 12) {
        this.adults.push(this.travellersList[i]);
      }
      if (age >= 2 && age < 12) {
        this.children.push(this.travellersList[i]);
      }
      if (age < 2) {
        this.infants.push(this.travellersList[i]);
      }
    }
    console.log(
      this.adults,
      'adults',
      this.children,
      'child',
      this.infants,
      'infants'
    );
  }
  age(dob) {
    const age = moment().diff(dob, 'years');
    console.log(age, 'ageeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
    return age;
  }
  UserName() {
    this.userName = this.userDetails.firstName;
    if (this.userName) {
      let nameOfUser = this.userName;
      nameOfUser = nameOfUser.substring(1);
      this.nameChange = false;
      this.iconName =
        this.userName[0].toUpperCase() + this.userName[1].toLowerCase();
      this.userNameShow =
        this.userName[0].toUpperCase() + nameOfUser.toLowerCase();
    }
  }

  editTraveller(member, id) {
    this.registerForm.controls.firstName.setValue(member.firstName);
    this.registerForm.controls.gender.setValue(member.gender);
    this.registerForm.controls.email.setValue(member.email);
    this.registerForm.controls.mobileNo.setValue(member.mobileNo);
    this.registerForm.controls.dateOfBirth.setValue(
      member.dateOfBirth.split('T')[0]
    );
    this.registerForm.get('passport.number').setValue(member.passport.number);
    this.registerForm.get('passport.country').setValue(member.passport.country);
    this.registerForm
      .get('passport.expiry')
      .setValue(member.passport.expiry.split('T')[0]);
    console.log(member);
    $('#myModal').modal('show');
    for (let i = 0; i < this.travellersList.length; i++) {
      if (id == this.travellersList[i].id) {
        this.selectedtraveller = i;
        break;
      }
    }
  }
  delete(id) {
    let ind;
    for (let i = 0; i < this.travellersList.length; i++) {
      if (id == this.travellersList[i].id) {
        ind = i;
        break;
      }
    }
    this.userProfileService.deleteFamilyMember(ind);
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.userProfileService.editFamilyDetails(
        this.registerForm.value,
        this.selectedtraveller
      );
      $('#myModal').modal('hide');
    }
  }
  onReset() {
    // this.registerForm.resetForm();
    this.registerForm.reset();
  }

  async presentPopover(ev: any, common) {
    const popover = await this.popoverController.create({
      component: AddTravellersSlideMenuComponent,
      cssClass: 'popoverroll',
      // cssClass: 'fullscreen',
      componentProps: {
        age: common,
      },
      event: ev,
      translucent: true,
      showBackdrop: false,
    });
    return await popover.present();
  }

  onDelete() {}
}
