import {
  UserProfileDetails,
  UserProfileWithFamilyDetails,
} from '@ojashub/voyaah-common';
import {
  CurrentItinerary,
  TravelType,
  TravellerCount,
} from '@ojashub/voyaah-common';
import { Injectable } from '@angular/core';
import { AccountService } from '@app/account/services';
import { User } from '@app/account/models';
import {
  APIService as APIServiceCurrentItinerary,
  AWSTravelType,
  AWSUserProfileInput,
  CreateAWSCurrentItineraryModelInput,
  CreateAWSUserProfileModelInput,
  UpdateAWSCurrentItineraryModelInput,
  UpdateAWSUserProfileModelInput,
} from './aws-current-itinerary.service';
import { City } from '@ojashub/voyaah-common';
import { FocusTrap } from '@angular/cdk/a11y';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class AwsDataSyncService {
  user: User;
  constructor(
    private apiServiceCurrentItinerary: APIServiceCurrentItinerary,
    private accountService: AccountService
  ) {
    this._subscribeToUserLogin();
  }
  private _subscribeToUserLogin(): void {
    this.accountService.user.subscribe((user) => {
      this.user = user;
    });
  }

  private async _storeCurrentItinerary(
    currentItinerary: CurrentItinerary
  ): Promise<void> {
    try {
      let input: UpdateAWSCurrentItineraryModelInput = { id: '' };
      input.id = this.user.username;
      input.username = this.user.username;
      input.itineraryName = 'currentItinerary';
      input.currentItinerary = {};
      input.currentItinerary.startDate = currentItinerary.startDate.toISOString();
      input.currentItinerary.endDate = currentItinerary.endDate.toISOString();
      input.currentItinerary.originCity = currentItinerary.originCity;
      input.currentItinerary.destinationCities =
        currentItinerary.destinationCities;
      switch (currentItinerary.travelType) {
        case TravelType.OneWay:
          input.currentItinerary.travelType = AWSTravelType.OneWay;
          break;
        case TravelType.TwoWay:
          input.currentItinerary.travelType = AWSTravelType.TwoWay;
          break;
        default:
          input.currentItinerary.travelType = AWSTravelType.MultiCity;
          break;
      }
      input.currentItinerary.travellers = currentItinerary.travellers;

      try {
        const awsCurrentItinerary = await this.apiServiceCurrentItinerary.GetAwsCurrentItineraryModel(
          this.user.username
        );
        await this.apiServiceCurrentItinerary.UpdateAwsCurrentItineraryModel(
          input
        );
        return;
      } catch (error) {}

      const createInput: CreateAWSCurrentItineraryModelInput = {};
      createInput.id = this.user.username;
      createInput.currentItinerary = input.currentItinerary;
      createInput.itineraryName = input.itineraryName;
      createInput.username = input.username;
      const response = await this.apiServiceCurrentItinerary.CreateAwsCurrentItineraryModel(
        createInput
      );
      console.log('Response from store : ', response);
    } catch (error) {
      console.log('Exception in storing itinerary to aws ', error);
    }
  }

  private async _loadCurrentItinerary(): Promise<CurrentItinerary> {
    try {
      const awsCurrentItinerary = await this.apiServiceCurrentItinerary.GetAwsCurrentItineraryModel(
        this.user.username
      );
      let currentItinerary: any = {};

      currentItinerary.startDate = new Date(
        awsCurrentItinerary.currentItinerary.startDate
      );
      currentItinerary.endDate = new Date(
        awsCurrentItinerary.currentItinerary.endDate
      );
      currentItinerary.originCity = awsCurrentItinerary.currentItinerary
        .originCity as City;
      currentItinerary.destinationCities = awsCurrentItinerary.currentItinerary
        .destinationCities as City[];
      switch (awsCurrentItinerary.currentItinerary.travelType) {
        case AWSTravelType.OneWay:
          currentItinerary.travelType = TravelType.OneWay;
          break;
        case AWSTravelType.TwoWay:
          currentItinerary.travelType = TravelType.TwoWay;
          break;
        default:
          currentItinerary.travelType = TravelType.MultiCity;
          break;
      }
      currentItinerary.travelType = (awsCurrentItinerary.currentItinerary
        .travelType as unknown) as TravelType;
      currentItinerary.travellers = awsCurrentItinerary.currentItinerary
        .travellers as TravellerCount;
      return currentItinerary as CurrentItinerary;
    } catch (error) {
      console.log('Exception in loading AWS Current Itinerary: ' + error);
      return null;
    }
  }

  public storeCurrentItinerary(currentItinerary: CurrentItinerary): void {
    if (currentItinerary === null || currentItinerary === undefined) {
      return;
    }
    this.accountService.isLoggedIn().then((loggedIn) => {
      if (loggedIn) {
        this._storeCurrentItinerary(currentItinerary);
      }
    });
  }

  public async loadCurrenItinerary(): Promise<CurrentItinerary> {
    try {
      const loggedIn = await this.accountService.isLoggedIn();
      if (loggedIn) {
        let currentItinerary = await this._loadCurrentItinerary();
        return currentItinerary;
      }
    } catch (error) {
      console.log('Exception in loading AWS Current Itinerary ', error);
      return null;
    }
  }
  private _toAWSFamilytype(
    familyarray: UserProfileDetails[]
  ): AWSUserProfileInput[] {
    let familyProfiles: AWSUserProfileInput[] = [];
    for (let i = 0; i < familyarray.length; i++) {
      familyProfiles.push(this._copyProfile(familyarray[i]));
    }
    return familyProfiles;
  }
  private _copyProfile(source: UserProfileDetails): AWSUserProfileInput {
    let dest: AWSUserProfileInput;
    let issuedOn: string;
    let expiry: string;
    let dateOfBirth: string;
    try {
      issuedOn = moment(source.passport.issuedOn).toISOString();
      expiry = moment(source.passport.expiry).toISOString();
      dateOfBirth = moment(source.dateOfBirth).toISOString();
    } catch (err) {
      console.log('conversion exception ', err);
    }
    try {
      dest = {
        ...source,
        passport: {
          number: source.passport.number,
          country: source.passport.country,
          city: source.passport.city,
          issuedOn: issuedOn,
          expiry: expiry,
        },
        dateOfBirth: dateOfBirth,
      };
    } catch (err) {
      console.log('copy exception: ', err);
      console.log('destination copied so far, ', dest);
    }
    return dest;
  }
  private async _storeUserProfile(
    userProfile: UserProfileDetails,
    familyProfile: UserProfileDetails[]
  ): Promise<void> {
    let updateInput: any = {};
    let createInput: any = {};
    let createRecord = true;
    try {
      const awsUserProfile = await this.apiServiceCurrentItinerary.GetAwsUserProfileModel(
        this.user.username
      );
      if (awsUserProfile != null && awsUserProfile != undefined) {
        createRecord = false;
      }
    } catch (err) {}
    console.log('storeUSerProfile, ', createRecord);

    try {
      createInput.id = this.user.username;
      createInput.username = this.user.username;
      createInput.userProfile = this._copyProfile(userProfile);
      // createInput.familyProfile = undefined; //TODO
      if (familyProfile.length > 0) {
        createInput.familyProfile = this._toAWSFamilytype(familyProfile);
        console.log(createInput, 'createinput');
      } else {
        createInput.familyProfile = undefined;
      }
      let res: any = {};
      if (createRecord) {
        console.log('_storeUSerProfile, before Create ');
        res = await this.apiServiceCurrentItinerary.CreateAwsUserProfileModel(
          createInput as CreateAWSUserProfileModelInput
        );
        console.log('create resultttttttttttttt', res);
      } else {
        console.log('_storeUSerProfile, before Update ');
        updateInput.username = this.user.username;
        updateInput.id = this.user.username;
        updateInput.userProfile = createInput.userProfile;
        // updateInput.familyProfile = undefined; //TODO
        if (familyProfile.length > 0) {
          updateInput.familyProfile = this._toAWSFamilytype(familyProfile);
          console.log(updateInput, 'updateInput');
        } else {
          createInput.familyProfile = undefined;
        }
        res = await this.apiServiceCurrentItinerary.UpdateAwsUserProfileModel(
          updateInput as UpdateAWSUserProfileModelInput
        );
        console.log('update resultttttttttttttt', res);
      }
    } catch (err) {
      console.log('Exception in storing profile ', err);
    }
  }
  public async storeUserProfile(
    userProfile: UserProfileDetails,
    familyProfile: UserProfileDetails[]
  ): Promise<void> {
    console.log(familyProfile, userProfile, 'aws-data-sync');
    if (
      userProfile === null ||
      userProfile === undefined ||
      userProfile.firstName.length == 0
    ) {
      return;
    }
    this.accountService.isLoggedIn().then((loggedIn) => {
      console.log(loggedIn, 'loggedin');
      if (loggedIn) {
        this._storeUserProfile(userProfile, familyProfile);
      }
    });
  }
  private async _loadUserProfile(): Promise<UserProfileWithFamilyDetails> {
    try {
      const awsUserProfile = await this.apiServiceCurrentItinerary.GetAwsUserProfileModel(
        this.user.username
      );
      console.log(awsUserProfile, 'aws response');
      let userProfile: UserProfileDetails = {
        id: awsUserProfile.userProfile.id,
        firstName: awsUserProfile.userProfile.firstName,
        middleName: awsUserProfile.userProfile.middleName,
        lastName: awsUserProfile.userProfile.lastName,
        gender: awsUserProfile.userProfile.gender,
        maritalStatus: awsUserProfile.userProfile.maritalStatus,
        mobileNo: awsUserProfile.userProfile.mobileNo,
        email: awsUserProfile.userProfile.email,
        relationshipToUser: awsUserProfile.userProfile.relationshipToUser,
        address: awsUserProfile.userProfile.address,
        city: awsUserProfile.userProfile.city,
        country: awsUserProfile.userProfile.country,
        zip: awsUserProfile.userProfile.zip,
        dateOfBirth: new Date(awsUserProfile.userProfile.dateOfBirth),
        passport: {
          number: awsUserProfile.userProfile.passport.number,
          country: awsUserProfile.userProfile.passport.country,
          city: awsUserProfile.userProfile.passport.city,
          issuedOn: new Date(awsUserProfile.userProfile.passport.issuedOn),
          expiry: new Date(awsUserProfile.userProfile.passport.expiry),
        },
      };
      let familyDetails: UserProfileDetails[] = Object.assign(
        [],
        awsUserProfile.familyProfile
      ).map(function (item) {
        delete item.__typename;
        delete item.passport.__typename;
        return item;
      });
      console.log(familyDetails, 'familyDetails');
      let userDetailsWithFamily: UserProfileWithFamilyDetails = {
        userDetails: userProfile,
        familyDetails: familyDetails,
      };
      return userDetailsWithFamily;
    } catch (err) {
      console.log('Exception in loading user profile from aws', err);
      return null;
    }
  }
  public async loadUserProfile(): Promise<UserProfileWithFamilyDetails> {
    try {
      const loggedIn = await this.accountService.isLoggedIn();
      if (loggedIn) {
        console.log('loggedInnnnnnnnnnnnnnnnnnnnnnnnnnnnn');
        let userProfile = await this._loadUserProfile();
        console.log('userProfile data sync', userProfile);
        return userProfile;
      }
    } catch (error) {
      console.log('Exception in loading AWS User Profile ', error);
      return null;
    }
  }
}
