import { ChangeNotifyService } from './change-notify.service';
import {
  UserProfileDetails,
  UserProfileWithFamilyDetails,
} from '@ojashub/voyaah-common';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { AwsDataSyncService } from './aws-data-sync.service';
import { AccountService } from '@app/account/services/account.service';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  static localStorageKey = 'user-profile';
  private userProfileDetails: UserProfileDetails;
  private familyProfile: UserProfileDetails[] = [];
  private userProfile = new BehaviorSubject<boolean>(false);
  currentUserProfileData = this.userProfile.asObservable();

  private userNavigate = new BehaviorSubject<boolean>(false);
  currentUserNavigate = this.userNavigate.asObservable();

  private userLogin = new BehaviorSubject<boolean>(false);
  currentUserLogin = this.userLogin.asObservable();

  private paymentFali = new BehaviorSubject<boolean>(false);
  public faildPayment = this.paymentFali.asObservable();

  public navigateToTravellers = new BehaviorSubject<string>('dropdown');
  public routeToTravellers = this.navigateToTravellers.asObservable();

  private saveTimeoutId = 0;
  private saveTimeoutValue = 5000;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(
    private awsDataSyncService: AwsDataSyncService,
    private accountService: AccountService,
    private changeNotifyService: ChangeNotifyService
  ) {
    this.accountService.user.subscribe(() => {
      this._load();
    });
    this.defineUserProfile();
  }
  defineUserProfile() {
    this.userProfileDetails = {
      id: null,
      firstName: '',
      middleName: '',
      lastName: '',
      dateOfBirth: new Date(),
      gender: '',
      maritalStatus: '',
      mobileNo: '',
      email: '',
      // password: '',
      relationshipToUser: 'self',
      passport: {
        number: '',
        issuedOn: new Date(),
        expiry: new Date(),
        country: '',
        city: '',
      },
      address: '',
      city: '',
      country: '',
      zip: '',
    };
  }
  clearOnLogout() {
    this.defineUserProfile();
    this.familyProfile = [];
  }

  getUserDetails(): UserProfileDetails {
    return this.userProfileDetails;
  }
  getFamilyDetails(): UserProfileDetails[] {
    return this.familyProfile;
  }
  editFamilyDetails(familyProfile: UserProfileDetails, index): void {
    this.familyProfile[index] = familyProfile;
    this.familyProfile[index].id = String(index + 1);
    console.log('edit family before save call', this.familyProfile);
    this._save();
  }
  deleteFamilyMember(index): void {
    this.familyProfile.splice(index, 1);
    for (let i = 0; i < this.familyProfile.length; i++) {
      this.familyProfile[i].id = String(i + 1);
    }
    console.log(this.familyProfile, 'delete before save');
    this._save();
  }
  updateFamilyProfile(familyProfile: UserProfileDetails): void {
    const member = this.familyProfile.filter((profile) => {
      return profile.id === familyProfile.id;
    });
    if (member === undefined || member === null || member.length == 0) {
      familyProfile.id = String(this.familyProfile.length + 1);
      this.familyProfile.push(familyProfile);
    }
    console.log(this.familyProfile, 'updatefamily before save');
    this._save();
  }
  updateUserProfile(profiledetails: UserProfileDetails): void {
    this.userProfileDetails.firstName = profiledetails.firstName;
    this.userProfileDetails.dateOfBirth = profiledetails.dateOfBirth;
    this.userProfileDetails.gender = profiledetails.gender;
    this.userProfileDetails.mobileNo = profiledetails.mobileNo;
    this.userProfileDetails.email = profiledetails.email;
    // this.userProfileDetails.password = password;
    this.userProfileDetails.maritalStatus = profiledetails.maritalStatus;
    this.userProfileDetails.passport.issuedOn = profiledetails.dateOfBirth;
    this.userProfileDetails.passport.number = profiledetails.passport.number;
    this.userProfileDetails.passport.country = profiledetails.passport.country;
    this.userProfileDetails.passport.expiry = profiledetails.passport.expiry;
    //TODO: Update email, mobileNo and password to IAM user
    this._save();
  }
  updateProfileData(data: boolean) {
    this.userProfile.next(data);
  }

  userccNavigate(data: boolean) {
    this.userNavigate.next(data);
  }

  faildPay(data: boolean) {
    this.paymentFali.next(data);
  }

  userPresent(data: boolean) {
    this.userLogin.next(data);
  }

  private _save() {
    // if (this.saveTimeoutId != 0) {
    //   clearTimeout(this.saveTimeoutId);
    //   this.saveTimeoutId = 0;
    // }
    // this.saveTimeoutId = <any>setTimeout(() => {
    try {
      this.awsDataSyncService.storeUserProfile(
        this.userProfileDetails,
        this.familyProfile
      );
      this.updateProfileData(true);
      this.changeNotifyService.profileUpdated(
        this.userProfileDetails.email,
        this.userProfileDetails.mobileNo,
        this.userProfileDetails.firstName,
        this.userProfileDetails.lastName
      );
    } catch (e) {
      console.error('Error saving in aws', e);
    }
    // }, this.saveTimeoutValue);
  }

  private _load() {
    this.awsDataSyncService
      .loadUserProfile()
      .then((userProfileWithFamilyDetails: UserProfileWithFamilyDetails) => {
        if (
          userProfileWithFamilyDetails?.userDetails != null &&
          userProfileWithFamilyDetails?.userDetails != undefined
        ) {
          this.userProfileDetails = userProfileWithFamilyDetails.userDetails;
          this.familyProfile = userProfileWithFamilyDetails.familyDetails;
          this.updateProfileData(true);
          console.log(
            'details in userservice',
            this.userProfileDetails,
            this.familyProfile
          );
        }
      })
      .catch((e) => {
        console.error('Error getting profile data from aws', e);
      });
  }
}
