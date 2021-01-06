import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserProfileDetails } from '@ojashub/voyaah-common';
import { UserProfileService } from '@app/service-module/user-profile.service';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-add-travellers-slide-menu',
  templateUrl: './add-travellers-slide-menu.component.html',
  styleUrls: ['./add-travellers-slide-menu.component.scss'],
})
export class AddTravellersSlideMenuComponent implements OnInit {
  travellersList: UserProfileDetails[] = [];
  registerForm: FormGroup;
  submitted = false;
  show = false;
  todaysdate;
  minAge;
  maxAge;
  age: string;
  calculatedMaxAge = new Date();
  calculatedMinAge = new Date();
  userPresent: any;
  userVerify = false;
  constructor(
    private fb: FormBuilder,
    private userProfileService: UserProfileService,
    private navParams: NavParams
  ) {}
  ngOnInit() {
    let userDetail = JSON.parse(localStorage.getItem('user'));
    this.userPresent = userDetail;
    if (this.userPresent.username.includes('@')) {
      this.userVerify = true;
    } else {
      this.userVerify = false;
    }

    console.log('calculatedMinAge', this.calculatedMinAge);
    this.age = this.navParams.data.age;
    console.log(this.age);
    this.setDate(this.age);
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNo: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      dateOfBirth: ['', Validators.required],
      passport: this.fb.group({
        number: ['', Validators.required],
        country: ['', Validators.required],
        expiry: ['', Validators.required],
      }),
    });
    if (this.userVerify === true) {
      this.registerForm.controls.email.setValue(this.userPresent.username);
    } else {
      this.registerForm.controls.mobileNo.setValue(this.userPresent.username);
    }
    this.travellersList = this.userProfileService.getFamilyDetails();
    this.userProfileService.currentUserProfileData.subscribe((res) => {
      this.travellersList = this.userProfileService.getFamilyDetails();
      console.log('travelers list oninit', this.travellersList);
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
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    console.log('form in travellers', this.registerForm.value);
    // this.travellersList.push(this.registerForm.value);
    console.log('save in slide', this.travellersList);
    this.userProfileService.updateFamilyProfile(this.registerForm.value);
  }
  onReset() {
    // this.registerForm.resetForm();
    this.registerForm.reset();
  }
  setDate(ageGroup) {
    if (ageGroup == 'adult') {
      this.calculatedMaxAge.setFullYear(
        this.calculatedMaxAge.getFullYear() - 12
      );
      this.calculatedMinAge.setFullYear(new Date('1900').getFullYear());
    } else if (ageGroup == 'child') {
      this.calculatedMaxAge.setFullYear(
        this.calculatedMaxAge.getFullYear() - 2
      );
      this.calculatedMinAge.setFullYear(
        this.calculatedMinAge.getFullYear() - 12
      );
    } else if (ageGroup == 'infant') {
      this.calculatedMaxAge.setFullYear(this.calculatedMaxAge.getFullYear());
      this.calculatedMinAge.setFullYear(
        this.calculatedMinAge.getFullYear() - 2
      );
    } else {
      this.calculatedMaxAge.setFullYear(this.calculatedMaxAge.getFullYear());
      this.calculatedMinAge.setFullYear(new Date('1900').getFullYear());
    }

    console.log(this.calculatedMaxAge);
    this.maxAge =
      this.calculatedMaxAge.getFullYear() +
      '-' +
      ('0' + (this.calculatedMaxAge.getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + this.calculatedMaxAge.getDate()).slice(-2);
    console.log('maxAge', this.maxAge);
    this.minAge =
      this.calculatedMinAge.getFullYear() +
      '-' +
      ('0' + (this.calculatedMinAge.getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + this.calculatedMinAge.getDate()).slice(-2);
    console.log('minAge', this.minAge);
  }
}
