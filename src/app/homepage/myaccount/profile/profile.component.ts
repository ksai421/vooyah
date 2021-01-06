import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserProfileDetails } from '@ojashub/voyaah-common';
import { UserProfileService } from '@app/service-module/user-profile.service';
import * as moment from 'moment';
import { AccountService } from '@app/account/services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userDetails: UserProfileDetails;
  nameChange = true;
  userNameShow: string;

  registerForm: FormGroup;
  registerFormEdit: FormGroup;
  submitted = false;
  submittedEdit = false;
  userData: any;
  userName: string;
  updateDetails = false;
  alreadyRecord = true;
  iconName: string;
  profileNull: boolean;
  dateShow = false;
  regform: any;

  minDate = moment(new Date()).format('YYYY-MM-DD');
  editProfile: any;
  userPresent: any;

  userVerify: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private userProfileService: UserProfileService
  ) {}
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

  ngOnInit() {
    let userDetail = JSON.parse(localStorage.getItem('user'));
    this.userPresent = userDetail;
    if (this.userPresent.username.includes('@')) {
      this.userVerify = true;
    } else {
      this.userVerify = false;
    }

    console.log(this.userPresent, 'this.userPresent');
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      mobileNo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      number: ['', Validators.required],
      country: ['', Validators.required],
      expiry: ['', Validators.required],
      // passport: this.formBuilder.group({
      // [
      //   '',
      //   [Validators.required, Validators.pattern('[a-zA-Z]{2}[0-9]{7}')],
      // ],
      //   number: [''],
      //   country: [''],
      //   expiry: [''],
      // }),
      // password: ['', [Validators.required, Validators.minLength(6)]],
    });
    if (this.userVerify === true) {
      this.registerForm.controls.email.setValue(this.userPresent.username);
    } else {
      this.registerForm.controls.mobileNo.setValue(this.userPresent.username);
    }
    this.registerFormEdit = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      mobileNo: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      number: ['', Validators.required],
      country: ['', Validators.required],
      expiry: ['', Validators.required],

      // passport: this.formBuilder.group({
      //   number: ['', Validators.required],
      //   country: ['', Validators.required],
      //   expiry: ['', Validators.required],
      // }),
      // password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.userDetails = this.userProfileService.getUserDetails();
    this.UserName();
    this.updateDetailsValue();
    console.log('UserDetails', this.userDetails.firstName, this.userDetails);
    this.userProfileService.currentUserProfileData.subscribe((res) => {
      this.userDetails = this.userProfileService.getUserDetails();
      this.updateDetailsValue();
      this.UserName();
    });
    // this.userProfileService.currentUserNavigate.subscribe((res) => {
    //   console.log(res, 'rsep');
    //   this.profileNull = res;
    //   this.updateDetailsValue();
    // });
  }

  get f() {
    return this.registerForm.controls;
  }
  get e() {
    return this.registerFormEdit.controls;
  }
  updateDetailsValue() {
    if (this.userDetails.firstName) {
      this.updateDetails = true;
    }
    this.registerFormEdit.controls.firstName.setValue(
      this.userDetails.firstName
    );

    this.registerFormEdit.controls.email.setValue(this.userDetails.email);
    this.registerFormEdit.controls.gender.setValue(this.userDetails.gender);
    this.registerFormEdit.controls.maritalStatus.setValue(
      this.userDetails.maritalStatus
    );
    this.registerFormEdit.controls.mobileNo.setValue(this.userDetails.mobileNo);
    this.registerFormEdit.controls.number.setValue(
      this.userDetails.passport.number
    );
    this.registerFormEdit.controls.country.setValue(
      this.userDetails.passport.country
    );
    this.registerFormEdit.controls.dateOfBirth.setValue(
      moment(this.userDetails.dateOfBirth).toISOString().split('T')[0]
    );
    this.registerFormEdit.controls.expiry.setValue(
      moment(this.userDetails.passport.expiry).toISOString().split('T')[0]
    );
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.regform = {
      firstName: this.registerForm.value.firstName,
      dateOfBirth: this.registerForm.value.dateOfBirth,
      gender: this.registerForm.value.gender,
      maritalStatus: this.registerForm.value.maritalStatus,
      mobileNo: this.registerForm.value.mobileNo,
      email: this.registerForm.value.email,
      passport: {
        number: this.registerForm.value.number,
        country: this.registerForm.value.country,
        expiry: this.registerForm.value.expiry,
      },
    };
    console.log(this.registerForm.value, this.regform);

    this.userProfileService.updateUserProfile(this.regform);
    this.userProfileService.updateProfileData(true);
    this.updateDetails = true;
    this.updateDetailsValue();
  }

  onSubmitEdit() {
    this.submittedEdit = true;
    // if (this.registerFormEdit.invalid) {
    //   return;
    // }
    this.editProfile = {
      firstName: this.registerFormEdit.value.firstName,
      dateOfBirth: this.registerFormEdit.value.dateOfBirth,
      gender: this.registerFormEdit.value.gender,
      maritalStatus: this.registerFormEdit.value.maritalStatus,
      mobileNo: this.registerFormEdit.value.mobileNo,
      email: this.registerFormEdit.value.email,
      passport: {
        number: this.registerFormEdit.value.number,
        country: this.registerFormEdit.value.country,
        expiry: this.registerFormEdit.value.expiry,
      },
    };
    // stop here if form is invalid
    this.userProfileService.updateUserProfile(this.editProfile);
    this.userProfileService.updateProfileData(true);
    console.log(this.editProfile);
  }
}
