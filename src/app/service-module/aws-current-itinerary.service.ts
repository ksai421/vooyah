/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateAWSCurrentItineraryModelInput = {
  id?: string | null;
  username?: string | null;
  itineraryName?: string | null;
  currentItinerary?: AWSCurrentItineraryInput | null;
};

export type AWSCurrentItineraryInput = {
  startDate?: string | null;
  endDate?: string | null;
  originCity?: AWSCityInput | null;
  destinationCities?: Array<AWSCityInput | null> | null;
  travelType?: AWSTravelType | null;
  travellers?: AWSTravellerCountInput | null;
};

export type AWSCityInput = {
  id?: number | null;
  airportCode?: Array<string | null> | null;
  airportName?: Array<string | null> | null;
  cityName?: string | null;
  countryCode?: string | null;
  countryName?: string | null;
  vendorName?: string | null;
  latitude?: number | null;
  longitude?: number | null;
};

export enum AWSTravelType {
  OneWay = "OneWay",
  TwoWay = "TwoWay",
  MultiCity = "MultiCity"
}

export type AWSTravellerCountInput = {
  adultCount?: number | null;
  childCount?: number | null;
  infantCount?: number | null;
};

export type UpdateAWSCurrentItineraryModelInput = {
  id: string;
  username?: string | null;
  itineraryName?: string | null;
  currentItinerary?: AWSCurrentItineraryInput | null;
};

export type DeleteAWSCurrentItineraryModelInput = {
  id?: string | null;
};

export type CreateAWSUserProfileModelInput = {
  id?: string | null;
  username?: string | null;
  userProfile?: AWSUserProfileInput | null;
  familyProfile?: Array<AWSUserProfileInput | null> | null;
};

export type AWSUserProfileInput = {
  id?: string | null;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  relationshipToUser?: string | null;
  dateOfBirth?: string | null;
  gender?: string | null;
  maritalStatus?: string | null;
  mobileNo?: string | null;
  email?: string | null;
  passport?: AWSPassportDetailsInput | null;
  address?: string | null;
  city?: string | null;
  country?: string | null;
  zip?: string | null;
};

export type AWSPassportDetailsInput = {
  number?: string | null;
  issuedOn?: string | null;
  expiry?: string | null;
  country?: string | null;
  city?: string | null;
};

export type UpdateAWSUserProfileModelInput = {
  id: string;
  username?: string | null;
  userProfile?: AWSUserProfileInput | null;
  familyProfile?: Array<AWSUserProfileInput | null> | null;
};

export type DeleteAWSUserProfileModelInput = {
  id?: string | null;
};

export type CreateAWSTravelPackageInput = {
  id?: string | null;
  name?: string | null;
  values?: string | null;
  availableFrom?: string | null;
  availableUpTo?: string | null;
  packageOwners?: Array<string | null> | null;
};

export type UpdateAWSTravelPackageInput = {
  id: string;
  name?: string | null;
  values?: string | null;
  availableFrom?: string | null;
  availableUpTo?: string | null;
  packageOwners?: Array<string | null> | null;
};

export type DeleteAWSTravelPackageInput = {
  id?: string | null;
};

export type CreateAWSTrawexSettingsModelInput = {
  id?: string | null;
  flights?: AWSTrawexFlightSettingsInput | null;
  hotels?: AWSTrawexHotelSettingsInput | null;
};

export type AWSTrawexFlightSettingsInput = {
  default?: AWSBookingMarginInput | null;
  byAirline?: Array<AWSMarginExceptionInput | null> | null;
  byDestination?: Array<AWSMarginExceptionInput | null> | null;
  cancel?: AWSCancelPolicyExInput | null;
};

export type AWSBookingMarginInput = {
  percent?: number | null;
  minimum?: number | null;
};

export type AWSMarginExceptionInput = {
  name?: string | null;
  code?: string | null;
  margin?: AWSBookingMarginInput | null;
};

export type AWSCancelPolicyExInput = {
  minimumFee?: number | null;
  adminFee?: number | null;
  rules?: Array<AWSCancelRuleExInput | null> | null;
};

export type AWSCancelRuleExInput = {
  refundPercent?: number | null;
  graceDays?: number | null;
};

export type AWSTrawexHotelSettingsInput = {
  default?: AWSBookingMarginInput | null;
  byHotelChain?: Array<AWSMarginExceptionInput | null> | null;
  cancel?: AWSCancelPolicyExInput | null;
};

export type UpdateAWSTrawexSettingsModelInput = {
  id: string;
  flights?: AWSTrawexFlightSettingsInput | null;
  hotels?: AWSTrawexHotelSettingsInput | null;
};

export type DeleteAWSTrawexSettingsModelInput = {
  id?: string | null;
};

export type CreateAWSMusementSettingsModelInput = {
  id?: string | null;
  activities?: AWSMusementActivitySettingsInput | null;
};

export type AWSMusementActivitySettingsInput = {
  default?: AWSBookingMarginInput | null;
  byActivity?: Array<AWSMarginExceptionInput | null> | null;
  cancel?: AWSCancelPolicyExInput | null;
};

export type UpdateAWSMusementSettingsModelInput = {
  id: string;
  activities?: AWSMusementActivitySettingsInput | null;
};

export type DeleteAWSMusementSettingsModelInput = {
  id?: string | null;
};

export type CreateAWSTransactionModelInput = {
  id?: string | null;
  username: string;
  itineraryName?: string | null;
  transactionId: string;
  transactionType?: string | null;
  transactionStatus?: string | null;
  transactionDetails?: string | null;
  travelStartDate?: string | null;
  travelCity?: string | null;
  email?: string | null;
  mobile?: string | null;
  transactionDecription?: string | null;
  bookingReference?: string | null;
};

export type UpdateAWSTransactionModelInput = {
  id: string;
  username?: string | null;
  itineraryName?: string | null;
  transactionId?: string | null;
  transactionType?: string | null;
  transactionStatus?: string | null;
  transactionDetails?: string | null;
  travelStartDate?: string | null;
  travelCity?: string | null;
  email?: string | null;
  mobile?: string | null;
  transactionDecription?: string | null;
  bookingReference?: string | null;
};

export type DeleteAWSTransactionModelInput = {
  id?: string | null;
};

export type CreateAWSStaycationTransactionModelInput = {
  id?: string | null;
  username: string;
  itineraryName?: string | null;
  transactionId: string;
  transactionType?: string | null;
  transactionStatus?: string | null;
  transactionDate?: string | null;
  transactionDetails?: string | null;
  vendorId: string;
  packageId: string;
  bookingReference?: string | null;
  email?: string | null;
  mobileNo?: string | null;
};

export type UpdateAWSStaycationTransactionModelInput = {
  id: string;
  username?: string | null;
  itineraryName?: string | null;
  transactionId?: string | null;
  transactionType?: string | null;
  transactionStatus?: string | null;
  transactionDate?: string | null;
  transactionDetails?: string | null;
  vendorId?: string | null;
  packageId?: string | null;
  bookingReference?: string | null;
  email?: string | null;
  mobileNo?: string | null;
};

export type DeleteAWSStaycationTransactionModelInput = {
  id?: string | null;
};

export type ModelAWSCurrentItineraryModelFilterInput = {
  id?: ModelIDFilterInput | null;
  username?: ModelStringFilterInput | null;
  itineraryName?: ModelStringFilterInput | null;
  and?: Array<ModelAWSCurrentItineraryModelFilterInput | null> | null;
  or?: Array<ModelAWSCurrentItineraryModelFilterInput | null> | null;
  not?: ModelAWSCurrentItineraryModelFilterInput | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelAWSUserProfileModelFilterInput = {
  id?: ModelIDFilterInput | null;
  username?: ModelStringFilterInput | null;
  and?: Array<ModelAWSUserProfileModelFilterInput | null> | null;
  or?: Array<ModelAWSUserProfileModelFilterInput | null> | null;
  not?: ModelAWSUserProfileModelFilterInput | null;
};

export type ModelAWSTravelPackageFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  values?: ModelStringFilterInput | null;
  availableFrom?: ModelStringFilterInput | null;
  availableUpTo?: ModelStringFilterInput | null;
  packageOwners?: ModelStringFilterInput | null;
  and?: Array<ModelAWSTravelPackageFilterInput | null> | null;
  or?: Array<ModelAWSTravelPackageFilterInput | null> | null;
  not?: ModelAWSTravelPackageFilterInput | null;
};

export type ModelAWSTrawexSettingsModelFilterInput = {
  id?: ModelIDFilterInput | null;
  and?: Array<ModelAWSTrawexSettingsModelFilterInput | null> | null;
  or?: Array<ModelAWSTrawexSettingsModelFilterInput | null> | null;
  not?: ModelAWSTrawexSettingsModelFilterInput | null;
};

export type ModelAWSMusementSettingsModelFilterInput = {
  id?: ModelIDFilterInput | null;
  and?: Array<ModelAWSMusementSettingsModelFilterInput | null> | null;
  or?: Array<ModelAWSMusementSettingsModelFilterInput | null> | null;
  not?: ModelAWSMusementSettingsModelFilterInput | null;
};

export type ModelAWSTransactionModelFilterInput = {
  id?: ModelIDFilterInput | null;
  username?: ModelStringFilterInput | null;
  itineraryName?: ModelStringFilterInput | null;
  transactionId?: ModelStringFilterInput | null;
  transactionType?: ModelStringFilterInput | null;
  transactionStatus?: ModelStringFilterInput | null;
  transactionDetails?: ModelStringFilterInput | null;
  travelStartDate?: ModelStringFilterInput | null;
  travelCity?: ModelStringFilterInput | null;
  email?: ModelStringFilterInput | null;
  mobile?: ModelStringFilterInput | null;
  transactionDecription?: ModelStringFilterInput | null;
  bookingReference?: ModelStringFilterInput | null;
  and?: Array<ModelAWSTransactionModelFilterInput | null> | null;
  or?: Array<ModelAWSTransactionModelFilterInput | null> | null;
  not?: ModelAWSTransactionModelFilterInput | null;
};

export type ModelAWSStaycationTransactionModelFilterInput = {
  id?: ModelIDFilterInput | null;
  username?: ModelStringFilterInput | null;
  itineraryName?: ModelStringFilterInput | null;
  transactionId?: ModelStringFilterInput | null;
  transactionType?: ModelStringFilterInput | null;
  transactionStatus?: ModelStringFilterInput | null;
  transactionDate?: ModelStringFilterInput | null;
  transactionDetails?: ModelStringFilterInput | null;
  vendorId?: ModelStringFilterInput | null;
  packageId?: ModelStringFilterInput | null;
  bookingReference?: ModelStringFilterInput | null;
  email?: ModelStringFilterInput | null;
  mobileNo?: ModelStringFilterInput | null;
  and?: Array<ModelAWSStaycationTransactionModelFilterInput | null> | null;
  or?: Array<ModelAWSStaycationTransactionModelFilterInput | null> | null;
  not?: ModelAWSStaycationTransactionModelFilterInput | null;
};

export type CreateAwsCurrentItineraryModelMutation = {
  __typename: "AWSCurrentItineraryModel";
  id: string;
  username: string | null;
  itineraryName: string | null;
  currentItinerary: {
    __typename: "AWSCurrentItinerary";
    startDate: string | null;
    endDate: string | null;
    originCity: {
      __typename: "AWSCity";
      id: number | null;
      airportCode: Array<string | null> | null;
      airportName: Array<string | null> | null;
      cityName: string | null;
      countryCode: string | null;
      countryName: string | null;
      vendorName: string | null;
      latitude: number | null;
      longitude: number | null;
    } | null;
    destinationCities: Array<{
      __typename: "AWSCity";
      id: number | null;
      airportCode: Array<string | null> | null;
      airportName: Array<string | null> | null;
      cityName: string | null;
      countryCode: string | null;
      countryName: string | null;
      vendorName: string | null;
      latitude: number | null;
      longitude: number | null;
    } | null> | null;
    travelType: AWSTravelType | null;
    travellers: {
      __typename: "AWSTravellerCount";
      adultCount: number | null;
      childCount: number | null;
      infantCount: number | null;
    } | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type UpdateAwsCurrentItineraryModelMutation = {
  __typename: "AWSCurrentItineraryModel";
  id: string;
  username: string | null;
  itineraryName: string | null;
  currentItinerary: {
    __typename: "AWSCurrentItinerary";
    startDate: string | null;
    endDate: string | null;
    originCity: {
      __typename: "AWSCity";
      id: number | null;
      airportCode: Array<string | null> | null;
      airportName: Array<string | null> | null;
      cityName: string | null;
      countryCode: string | null;
      countryName: string | null;
      vendorName: string | null;
      latitude: number | null;
      longitude: number | null;
    } | null;
    destinationCities: Array<{
      __typename: "AWSCity";
      id: number | null;
      airportCode: Array<string | null> | null;
      airportName: Array<string | null> | null;
      cityName: string | null;
      countryCode: string | null;
      countryName: string | null;
      vendorName: string | null;
      latitude: number | null;
      longitude: number | null;
    } | null> | null;
    travelType: AWSTravelType | null;
    travellers: {
      __typename: "AWSTravellerCount";
      adultCount: number | null;
      childCount: number | null;
      infantCount: number | null;
    } | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type DeleteAwsCurrentItineraryModelMutation = {
  __typename: "AWSCurrentItineraryModel";
  id: string;
  username: string | null;
  itineraryName: string | null;
  currentItinerary: {
    __typename: "AWSCurrentItinerary";
    startDate: string | null;
    endDate: string | null;
    originCity: {
      __typename: "AWSCity";
      id: number | null;
      airportCode: Array<string | null> | null;
      airportName: Array<string | null> | null;
      cityName: string | null;
      countryCode: string | null;
      countryName: string | null;
      vendorName: string | null;
      latitude: number | null;
      longitude: number | null;
    } | null;
    destinationCities: Array<{
      __typename: "AWSCity";
      id: number | null;
      airportCode: Array<string | null> | null;
      airportName: Array<string | null> | null;
      cityName: string | null;
      countryCode: string | null;
      countryName: string | null;
      vendorName: string | null;
      latitude: number | null;
      longitude: number | null;
    } | null> | null;
    travelType: AWSTravelType | null;
    travellers: {
      __typename: "AWSTravellerCount";
      adultCount: number | null;
      childCount: number | null;
      infantCount: number | null;
    } | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type CreateAwsUserProfileModelMutation = {
  __typename: "AWSUserProfileModel";
  id: string;
  username: string | null;
  userProfile: {
    __typename: "AWSUserProfile";
    id: string | null;
    firstName: string | null;
    middleName: string | null;
    lastName: string | null;
    relationshipToUser: string | null;
    dateOfBirth: string | null;
    gender: string | null;
    maritalStatus: string | null;
    mobileNo: string | null;
    email: string | null;
    passport: {
      __typename: "AWSPassportDetails";
      number: string | null;
      issuedOn: string | null;
      expiry: string | null;
      country: string | null;
      city: string | null;
    } | null;
    address: string | null;
    city: string | null;
    country: string | null;
    zip: string | null;
  } | null;
  familyProfile: Array<{
    __typename: "AWSUserProfile";
    id: string | null;
    firstName: string | null;
    middleName: string | null;
    lastName: string | null;
    relationshipToUser: string | null;
    dateOfBirth: string | null;
    gender: string | null;
    maritalStatus: string | null;
    mobileNo: string | null;
    email: string | null;
    passport: {
      __typename: "AWSPassportDetails";
      number: string | null;
      issuedOn: string | null;
      expiry: string | null;
      country: string | null;
      city: string | null;
    } | null;
    address: string | null;
    city: string | null;
    country: string | null;
    zip: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type UpdateAwsUserProfileModelMutation = {
  __typename: "AWSUserProfileModel";
  id: string;
  username: string | null;
  userProfile: {
    __typename: "AWSUserProfile";
    id: string | null;
    firstName: string | null;
    middleName: string | null;
    lastName: string | null;
    relationshipToUser: string | null;
    dateOfBirth: string | null;
    gender: string | null;
    maritalStatus: string | null;
    mobileNo: string | null;
    email: string | null;
    passport: {
      __typename: "AWSPassportDetails";
      number: string | null;
      issuedOn: string | null;
      expiry: string | null;
      country: string | null;
      city: string | null;
    } | null;
    address: string | null;
    city: string | null;
    country: string | null;
    zip: string | null;
  } | null;
  familyProfile: Array<{
    __typename: "AWSUserProfile";
    id: string | null;
    firstName: string | null;
    middleName: string | null;
    lastName: string | null;
    relationshipToUser: string | null;
    dateOfBirth: string | null;
    gender: string | null;
    maritalStatus: string | null;
    mobileNo: string | null;
    email: string | null;
    passport: {
      __typename: "AWSPassportDetails";
      number: string | null;
      issuedOn: string | null;
      expiry: string | null;
      country: string | null;
      city: string | null;
    } | null;
    address: string | null;
    city: string | null;
    country: string | null;
    zip: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type DeleteAwsUserProfileModelMutation = {
  __typename: "AWSUserProfileModel";
  id: string;
  username: string | null;
  userProfile: {
    __typename: "AWSUserProfile";
    id: string | null;
    firstName: string | null;
    middleName: string | null;
    lastName: string | null;
    relationshipToUser: string | null;
    dateOfBirth: string | null;
    gender: string | null;
    maritalStatus: string | null;
    mobileNo: string | null;
    email: string | null;
    passport: {
      __typename: "AWSPassportDetails";
      number: string | null;
      issuedOn: string | null;
      expiry: string | null;
      country: string | null;
      city: string | null;
    } | null;
    address: string | null;
    city: string | null;
    country: string | null;
    zip: string | null;
  } | null;
  familyProfile: Array<{
    __typename: "AWSUserProfile";
    id: string | null;
    firstName: string | null;
    middleName: string | null;
    lastName: string | null;
    relationshipToUser: string | null;
    dateOfBirth: string | null;
    gender: string | null;
    maritalStatus: string | null;
    mobileNo: string | null;
    email: string | null;
    passport: {
      __typename: "AWSPassportDetails";
      number: string | null;
      issuedOn: string | null;
      expiry: string | null;
      country: string | null;
      city: string | null;
    } | null;
    address: string | null;
    city: string | null;
    country: string | null;
    zip: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type CreateAwsTravelPackageMutation = {
  __typename: "AWSTravelPackage";
  id: string;
  name: string | null;
  values: string | null;
  availableFrom: string | null;
  availableUpTo: string | null;
  packageOwners: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAwsTravelPackageMutation = {
  __typename: "AWSTravelPackage";
  id: string;
  name: string | null;
  values: string | null;
  availableFrom: string | null;
  availableUpTo: string | null;
  packageOwners: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteAwsTravelPackageMutation = {
  __typename: "AWSTravelPackage";
  id: string;
  name: string | null;
  values: string | null;
  availableFrom: string | null;
  availableUpTo: string | null;
  packageOwners: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateAwsTrawexSettingsModelMutation = {
  __typename: "AWSTrawexSettingsModel";
  id: string;
  flights: {
    __typename: "AWSTrawexFlightSettings";
    default: {
      __typename: "AWSBookingMargin";
      percent: number | null;
      minimum: number | null;
    } | null;
    byAirline: Array<{
      __typename: "AWSMarginException";
      name: string | null;
      code: string | null;
      margin: {
        __typename: "AWSBookingMargin";
        percent: number | null;
        minimum: number | null;
      } | null;
    } | null> | null;
    byDestination: Array<{
      __typename: "AWSMarginException";
      name: string | null;
      code: string | null;
      margin: {
        __typename: "AWSBookingMargin";
        percent: number | null;
        minimum: number | null;
      } | null;
    } | null> | null;
    cancel: {
      __typename: "AWSCancelPolicyEx";
      minimumFee: number | null;
      adminFee: number | null;
      rules: Array<{
        __typename: "AWSCancelRuleEx";
        refundPercent: number | null;
        graceDays: number | null;
      } | null> | null;
    } | null;
  } | null;
  hotels: {
    __typename: "AWSTrawexHotelSettings";
    default: {
      __typename: "AWSBookingMargin";
      percent: number | null;
      minimum: number | null;
    } | null;
    byHotelChain: Array<{
      __typename: "AWSMarginException";
      name: string | null;
      code: string | null;
      margin: {
        __typename: "AWSBookingMargin";
        percent: number | null;
        minimum: number | null;
      } | null;
    } | null> | null;
    cancel: {
      __typename: "AWSCancelPolicyEx";
      minimumFee: number | null;
      adminFee: number | null;
      rules: Array<{
        __typename: "AWSCancelRuleEx";
        refundPercent: number | null;
        graceDays: number | null;
      } | null> | null;
    } | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAwsTrawexSettingsModelMutation = {
  __typename: "AWSTrawexSettingsModel";
  id: string;
  flights: {
    __typename: "AWSTrawexFlightSettings";
    default: {
      __typename: "AWSBookingMargin";
      percent: number | null;
      minimum: number | null;
    } | null;
    byAirline: Array<{
      __typename: "AWSMarginException";
      name: string | null;
      code: string | null;
      margin: {
        __typename: "AWSBookingMargin";
        percent: number | null;
        minimum: number | null;
      } | null;
    } | null> | null;
    byDestination: Array<{
      __typename: "AWSMarginException";
      name: string | null;
      code: string | null;
      margin: {
        __typename: "AWSBookingMargin";
        percent: number | null;
        minimum: number | null;
      } | null;
    } | null> | null;
    cancel: {
      __typename: "AWSCancelPolicyEx";
      minimumFee: number | null;
      adminFee: number | null;
      rules: Array<{
        __typename: "AWSCancelRuleEx";
        refundPercent: number | null;
        graceDays: number | null;
      } | null> | null;
    } | null;
  } | null;
  hotels: {
    __typename: "AWSTrawexHotelSettings";
    default: {
      __typename: "AWSBookingMargin";
      percent: number | null;
      minimum: number | null;
    } | null;
    byHotelChain: Array<{
      __typename: "AWSMarginException";
      name: string | null;
      code: string | null;
      margin: {
        __typename: "AWSBookingMargin";
        percent: number | null;
        minimum: number | null;
      } | null;
    } | null> | null;
    cancel: {
      __typename: "AWSCancelPolicyEx";
      minimumFee: number | null;
      adminFee: number | null;
      rules: Array<{
        __typename: "AWSCancelRuleEx";
        refundPercent: number | null;
        graceDays: number | null;
      } | null> | null;
    } | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteAwsTrawexSettingsModelMutation = {
  __typename: "AWSTrawexSettingsModel";
  id: string;
  flights: {
    __typename: "AWSTrawexFlightSettings";
    default: {
      __typename: "AWSBookingMargin";
      percent: number | null;
      minimum: number | null;
    } | null;
    byAirline: Array<{
      __typename: "AWSMarginException";
      name: string | null;
      code: string | null;
      margin: {
        __typename: "AWSBookingMargin";
        percent: number | null;
        minimum: number | null;
      } | null;
    } | null> | null;
    byDestination: Array<{
      __typename: "AWSMarginException";
      name: string | null;
      code: string | null;
      margin: {
        __typename: "AWSBookingMargin";
        percent: number | null;
        minimum: number | null;
      } | null;
    } | null> | null;
    cancel: {
      __typename: "AWSCancelPolicyEx";
      minimumFee: number | null;
      adminFee: number | null;
      rules: Array<{
        __typename: "AWSCancelRuleEx";
        refundPercent: number | null;
        graceDays: number | null;
      } | null> | null;
    } | null;
  } | null;
  hotels: {
    __typename: "AWSTrawexHotelSettings";
    default: {
      __typename: "AWSBookingMargin";
      percent: number | null;
      minimum: number | null;
    } | null;
    byHotelChain: Array<{
      __typename: "AWSMarginException";
      name: string | null;
      code: string | null;
      margin: {
        __typename: "AWSBookingMargin";
        percent: number | null;
        minimum: number | null;
      } | null;
    } | null> | null;
    cancel: {
      __typename: "AWSCancelPolicyEx";
      minimumFee: number | null;
      adminFee: number | null;
      rules: Array<{
        __typename: "AWSCancelRuleEx";
        refundPercent: number | null;
        graceDays: number | null;
      } | null> | null;
    } | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateAwsMusementSettingsModelMutation = {
  __typename: "AWSMusementSettingsModel";
  id: string;
  activities: {
    __typename: "AWSMusementActivitySettings";
    default: {
      __typename: "AWSBookingMargin";
      percent: number | null;
      minimum: number | null;
    } | null;
    byActivity: Array<{
      __typename: "AWSMarginException";
      name: string | null;
      code: string | null;
      margin: {
        __typename: "AWSBookingMargin";
        percent: number | null;
        minimum: number | null;
      } | null;
    } | null> | null;
    cancel: {
      __typename: "AWSCancelPolicyEx";
      minimumFee: number | null;
      adminFee: number | null;
      rules: Array<{
        __typename: "AWSCancelRuleEx";
        refundPercent: number | null;
        graceDays: number | null;
      } | null> | null;
    } | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAwsMusementSettingsModelMutation = {
  __typename: "AWSMusementSettingsModel";
  id: string;
  activities: {
    __typename: "AWSMusementActivitySettings";
    default: {
      __typename: "AWSBookingMargin";
      percent: number | null;
      minimum: number | null;
    } | null;
    byActivity: Array<{
      __typename: "AWSMarginException";
      name: string | null;
      code: string | null;
      margin: {
        __typename: "AWSBookingMargin";
        percent: number | null;
        minimum: number | null;
      } | null;
    } | null> | null;
    cancel: {
      __typename: "AWSCancelPolicyEx";
      minimumFee: number | null;
      adminFee: number | null;
      rules: Array<{
        __typename: "AWSCancelRuleEx";
        refundPercent: number | null;
        graceDays: number | null;
      } | null> | null;
    } | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteAwsMusementSettingsModelMutation = {
  __typename: "AWSMusementSettingsModel";
  id: string;
  activities: {
    __typename: "AWSMusementActivitySettings";
    default: {
      __typename: "AWSBookingMargin";
      percent: number | null;
      minimum: number | null;
    } | null;
    byActivity: Array<{
      __typename: "AWSMarginException";
      name: string | null;
      code: string | null;
      margin: {
        __typename: "AWSBookingMargin";
        percent: number | null;
        minimum: number | null;
      } | null;
    } | null> | null;
    cancel: {
      __typename: "AWSCancelPolicyEx";
      minimumFee: number | null;
      adminFee: number | null;
      rules: Array<{
        __typename: "AWSCancelRuleEx";
        refundPercent: number | null;
        graceDays: number | null;
      } | null> | null;
    } | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateAwsTransactionModelMutation = {
  __typename: "AWSTransactionModel";
  id: string;
  username: string;
  itineraryName: string | null;
  transactionId: string;
  transactionType: string | null;
  transactionStatus: string | null;
  transactionDetails: string | null;
  travelStartDate: string | null;
  travelCity: string | null;
  email: string | null;
  mobile: string | null;
  transactionDecription: string | null;
  bookingReference: string | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type UpdateAwsTransactionModelMutation = {
  __typename: "AWSTransactionModel";
  id: string;
  username: string;
  itineraryName: string | null;
  transactionId: string;
  transactionType: string | null;
  transactionStatus: string | null;
  transactionDetails: string | null;
  travelStartDate: string | null;
  travelCity: string | null;
  email: string | null;
  mobile: string | null;
  transactionDecription: string | null;
  bookingReference: string | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type DeleteAwsTransactionModelMutation = {
  __typename: "AWSTransactionModel";
  id: string;
  username: string;
  itineraryName: string | null;
  transactionId: string;
  transactionType: string | null;
  transactionStatus: string | null;
  transactionDetails: string | null;
  travelStartDate: string | null;
  travelCity: string | null;
  email: string | null;
  mobile: string | null;
  transactionDecription: string | null;
  bookingReference: string | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type CreateAwsStaycationTransactionModelMutation = {
  __typename: "AWSStaycationTransactionModel";
  id: string;
  username: string;
  itineraryName: string | null;
  transactionId: string;
  transactionType: string | null;
  transactionStatus: string | null;
  transactionDate: string | null;
  transactionDetails: string | null;
  vendorId: string;
  packageId: string;
  bookingReference: string | null;
  email: string | null;
  mobileNo: string | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type UpdateAwsStaycationTransactionModelMutation = {
  __typename: "AWSStaycationTransactionModel";
  id: string;
  username: string;
  itineraryName: string | null;
  transactionId: string;
  transactionType: string | null;
  transactionStatus: string | null;
  transactionDate: string | null;
  transactionDetails: string | null;
  vendorId: string;
  packageId: string;
  bookingReference: string | null;
  email: string | null;
  mobileNo: string | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type DeleteAwsStaycationTransactionModelMutation = {
  __typename: "AWSStaycationTransactionModel";
  id: string;
  username: string;
  itineraryName: string | null;
  transactionId: string;
  transactionType: string | null;
  transactionStatus: string | null;
  transactionDate: string | null;
  transactionDetails: string | null;
  vendorId: string;
  packageId: string;
  bookingReference: string | null;
  email: string | null;
  mobileNo: string | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type GetAwsCurrentItineraryModelQuery = {
  __typename: "AWSCurrentItineraryModel";
  id: string;
  username: string | null;
  itineraryName: string | null;
  currentItinerary: {
    __typename: "AWSCurrentItinerary";
    startDate: string | null;
    endDate: string | null;
    originCity: {
      __typename: "AWSCity";
      id: number | null;
      airportCode: Array<string | null> | null;
      airportName: Array<string | null> | null;
      cityName: string | null;
      countryCode: string | null;
      countryName: string | null;
      vendorName: string | null;
      latitude: number | null;
      longitude: number | null;
    } | null;
    destinationCities: Array<{
      __typename: "AWSCity";
      id: number | null;
      airportCode: Array<string | null> | null;
      airportName: Array<string | null> | null;
      cityName: string | null;
      countryCode: string | null;
      countryName: string | null;
      vendorName: string | null;
      latitude: number | null;
      longitude: number | null;
    } | null> | null;
    travelType: AWSTravelType | null;
    travellers: {
      __typename: "AWSTravellerCount";
      adultCount: number | null;
      childCount: number | null;
      infantCount: number | null;
    } | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type ListAwsCurrentItineraryModelsQuery = {
  __typename: "ModelAWSCurrentItineraryModelConnection";
  items: Array<{
    __typename: "AWSCurrentItineraryModel";
    id: string;
    username: string | null;
    itineraryName: string | null;
    currentItinerary: {
      __typename: "AWSCurrentItinerary";
      startDate: string | null;
      endDate: string | null;
      originCity: {
        __typename: "AWSCity";
        id: number | null;
        airportCode: Array<string | null> | null;
        airportName: Array<string | null> | null;
        cityName: string | null;
        countryCode: string | null;
        countryName: string | null;
        vendorName: string | null;
        latitude: number | null;
        longitude: number | null;
      } | null;
      destinationCities: Array<{
        __typename: "AWSCity";
        id: number | null;
        airportCode: Array<string | null> | null;
        airportName: Array<string | null> | null;
        cityName: string | null;
        countryCode: string | null;
        countryName: string | null;
        vendorName: string | null;
        latitude: number | null;
        longitude: number | null;
      } | null> | null;
      travelType: AWSTravelType | null;
      travellers: {
        __typename: "AWSTravellerCount";
        adultCount: number | null;
        childCount: number | null;
        infantCount: number | null;
      } | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetAwsUserProfileModelQuery = {
  __typename: "AWSUserProfileModel";
  id: string;
  username: string | null;
  userProfile: {
    __typename: "AWSUserProfile";
    id: string | null;
    firstName: string | null;
    middleName: string | null;
    lastName: string | null;
    relationshipToUser: string | null;
    dateOfBirth: string | null;
    gender: string | null;
    maritalStatus: string | null;
    mobileNo: string | null;
    email: string | null;
    passport: {
      __typename: "AWSPassportDetails";
      number: string | null;
      issuedOn: string | null;
      expiry: string | null;
      country: string | null;
      city: string | null;
    } | null;
    address: string | null;
    city: string | null;
    country: string | null;
    zip: string | null;
  } | null;
  familyProfile: Array<{
    __typename: "AWSUserProfile";
    id: string | null;
    firstName: string | null;
    middleName: string | null;
    lastName: string | null;
    relationshipToUser: string | null;
    dateOfBirth: string | null;
    gender: string | null;
    maritalStatus: string | null;
    mobileNo: string | null;
    email: string | null;
    passport: {
      __typename: "AWSPassportDetails";
      number: string | null;
      issuedOn: string | null;
      expiry: string | null;
      country: string | null;
      city: string | null;
    } | null;
    address: string | null;
    city: string | null;
    country: string | null;
    zip: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type ListAwsUserProfileModelsQuery = {
  __typename: "ModelAWSUserProfileModelConnection";
  items: Array<{
    __typename: "AWSUserProfileModel";
    id: string;
    username: string | null;
    userProfile: {
      __typename: "AWSUserProfile";
      id: string | null;
      firstName: string | null;
      middleName: string | null;
      lastName: string | null;
      relationshipToUser: string | null;
      dateOfBirth: string | null;
      gender: string | null;
      maritalStatus: string | null;
      mobileNo: string | null;
      email: string | null;
      passport: {
        __typename: "AWSPassportDetails";
        number: string | null;
        issuedOn: string | null;
        expiry: string | null;
        country: string | null;
        city: string | null;
      } | null;
      address: string | null;
      city: string | null;
      country: string | null;
      zip: string | null;
    } | null;
    familyProfile: Array<{
      __typename: "AWSUserProfile";
      id: string | null;
      firstName: string | null;
      middleName: string | null;
      lastName: string | null;
      relationshipToUser: string | null;
      dateOfBirth: string | null;
      gender: string | null;
      maritalStatus: string | null;
      mobileNo: string | null;
      email: string | null;
      passport: {
        __typename: "AWSPassportDetails";
        number: string | null;
        issuedOn: string | null;
        expiry: string | null;
        country: string | null;
        city: string | null;
      } | null;
      address: string | null;
      city: string | null;
      country: string | null;
      zip: string | null;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetAwsTravelPackageQuery = {
  __typename: "AWSTravelPackage";
  id: string;
  name: string | null;
  values: string | null;
  availableFrom: string | null;
  availableUpTo: string | null;
  packageOwners: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type ListAwsTravelPackagesQuery = {
  __typename: "ModelAWSTravelPackageConnection";
  items: Array<{
    __typename: "AWSTravelPackage";
    id: string;
    name: string | null;
    values: string | null;
    availableFrom: string | null;
    availableUpTo: string | null;
    packageOwners: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetAwsTrawexSettingsModelQuery = {
  __typename: "AWSTrawexSettingsModel";
  id: string;
  flights: {
    __typename: "AWSTrawexFlightSettings";
    default: {
      __typename: "AWSBookingMargin";
      percent: number | null;
      minimum: number | null;
    } | null;
    byAirline: Array<{
      __typename: "AWSMarginException";
      name: string | null;
      code: string | null;
      margin: {
        __typename: "AWSBookingMargin";
        percent: number | null;
        minimum: number | null;
      } | null;
    } | null> | null;
    byDestination: Array<{
      __typename: "AWSMarginException";
      name: string | null;
      code: string | null;
      margin: {
        __typename: "AWSBookingMargin";
        percent: number | null;
        minimum: number | null;
      } | null;
    } | null> | null;
    cancel: {
      __typename: "AWSCancelPolicyEx";
      minimumFee: number | null;
      adminFee: number | null;
      rules: Array<{
        __typename: "AWSCancelRuleEx";
        refundPercent: number | null;
        graceDays: number | null;
      } | null> | null;
    } | null;
  } | null;
  hotels: {
    __typename: "AWSTrawexHotelSettings";
    default: {
      __typename: "AWSBookingMargin";
      percent: number | null;
      minimum: number | null;
    } | null;
    byHotelChain: Array<{
      __typename: "AWSMarginException";
      name: string | null;
      code: string | null;
      margin: {
        __typename: "AWSBookingMargin";
        percent: number | null;
        minimum: number | null;
      } | null;
    } | null> | null;
    cancel: {
      __typename: "AWSCancelPolicyEx";
      minimumFee: number | null;
      adminFee: number | null;
      rules: Array<{
        __typename: "AWSCancelRuleEx";
        refundPercent: number | null;
        graceDays: number | null;
      } | null> | null;
    } | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListAwsTrawexSettingsModelsQuery = {
  __typename: "ModelAWSTrawexSettingsModelConnection";
  items: Array<{
    __typename: "AWSTrawexSettingsModel";
    id: string;
    flights: {
      __typename: "AWSTrawexFlightSettings";
      default: {
        __typename: "AWSBookingMargin";
        percent: number | null;
        minimum: number | null;
      } | null;
      byAirline: Array<{
        __typename: "AWSMarginException";
        name: string | null;
        code: string | null;
      } | null> | null;
      byDestination: Array<{
        __typename: "AWSMarginException";
        name: string | null;
        code: string | null;
      } | null> | null;
      cancel: {
        __typename: "AWSCancelPolicyEx";
        minimumFee: number | null;
        adminFee: number | null;
      } | null;
    } | null;
    hotels: {
      __typename: "AWSTrawexHotelSettings";
      default: {
        __typename: "AWSBookingMargin";
        percent: number | null;
        minimum: number | null;
      } | null;
      byHotelChain: Array<{
        __typename: "AWSMarginException";
        name: string | null;
        code: string | null;
      } | null> | null;
      cancel: {
        __typename: "AWSCancelPolicyEx";
        minimumFee: number | null;
        adminFee: number | null;
      } | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetAwsMusementSettingsModelQuery = {
  __typename: "AWSMusementSettingsModel";
  id: string;
  activities: {
    __typename: "AWSMusementActivitySettings";
    default: {
      __typename: "AWSBookingMargin";
      percent: number | null;
      minimum: number | null;
    } | null;
    byActivity: Array<{
      __typename: "AWSMarginException";
      name: string | null;
      code: string | null;
      margin: {
        __typename: "AWSBookingMargin";
        percent: number | null;
        minimum: number | null;
      } | null;
    } | null> | null;
    cancel: {
      __typename: "AWSCancelPolicyEx";
      minimumFee: number | null;
      adminFee: number | null;
      rules: Array<{
        __typename: "AWSCancelRuleEx";
        refundPercent: number | null;
        graceDays: number | null;
      } | null> | null;
    } | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListAwsMusementSettingsModelsQuery = {
  __typename: "ModelAWSMusementSettingsModelConnection";
  items: Array<{
    __typename: "AWSMusementSettingsModel";
    id: string;
    activities: {
      __typename: "AWSMusementActivitySettings";
      default: {
        __typename: "AWSBookingMargin";
        percent: number | null;
        minimum: number | null;
      } | null;
      byActivity: Array<{
        __typename: "AWSMarginException";
        name: string | null;
        code: string | null;
      } | null> | null;
      cancel: {
        __typename: "AWSCancelPolicyEx";
        minimumFee: number | null;
        adminFee: number | null;
      } | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetAwsTransactionModelQuery = {
  __typename: "AWSTransactionModel";
  id: string;
  username: string;
  itineraryName: string | null;
  transactionId: string;
  transactionType: string | null;
  transactionStatus: string | null;
  transactionDetails: string | null;
  travelStartDate: string | null;
  travelCity: string | null;
  email: string | null;
  mobile: string | null;
  transactionDecription: string | null;
  bookingReference: string | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type ListAwsTransactionModelsQuery = {
  __typename: "ModelAWSTransactionModelConnection";
  items: Array<{
    __typename: "AWSTransactionModel";
    id: string;
    username: string;
    itineraryName: string | null;
    transactionId: string;
    transactionType: string | null;
    transactionStatus: string | null;
    transactionDetails: string | null;
    travelStartDate: string | null;
    travelCity: string | null;
    email: string | null;
    mobile: string | null;
    transactionDecription: string | null;
    bookingReference: string | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetAwsStaycationTransactionModelQuery = {
  __typename: "AWSStaycationTransactionModel";
  id: string;
  username: string;
  itineraryName: string | null;
  transactionId: string;
  transactionType: string | null;
  transactionStatus: string | null;
  transactionDate: string | null;
  transactionDetails: string | null;
  vendorId: string;
  packageId: string;
  bookingReference: string | null;
  email: string | null;
  mobileNo: string | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type ListAwsStaycationTransactionModelsQuery = {
  __typename: "ModelAWSStaycationTransactionModelConnection";
  items: Array<{
    __typename: "AWSStaycationTransactionModel";
    id: string;
    username: string;
    itineraryName: string | null;
    transactionId: string;
    transactionType: string | null;
    transactionStatus: string | null;
    transactionDate: string | null;
    transactionDetails: string | null;
    vendorId: string;
    packageId: string;
    bookingReference: string | null;
    email: string | null;
    mobileNo: string | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateAwsCurrentItineraryModelSubscription = {
  __typename: "AWSCurrentItineraryModel";
  id: string;
  username: string | null;
  itineraryName: string | null;
  currentItinerary: {
    __typename: "AWSCurrentItinerary";
    startDate: string | null;
    endDate: string | null;
    originCity: {
      __typename: "AWSCity";
      id: number | null;
      airportCode: Array<string | null> | null;
      airportName: Array<string | null> | null;
      cityName: string | null;
      countryCode: string | null;
      countryName: string | null;
      vendorName: string | null;
      latitude: number | null;
      longitude: number | null;
    } | null;
    destinationCities: Array<{
      __typename: "AWSCity";
      id: number | null;
      airportCode: Array<string | null> | null;
      airportName: Array<string | null> | null;
      cityName: string | null;
      countryCode: string | null;
      countryName: string | null;
      vendorName: string | null;
      latitude: number | null;
      longitude: number | null;
    } | null> | null;
    travelType: AWSTravelType | null;
    travellers: {
      __typename: "AWSTravellerCount";
      adultCount: number | null;
      childCount: number | null;
      infantCount: number | null;
    } | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnUpdateAwsCurrentItineraryModelSubscription = {
  __typename: "AWSCurrentItineraryModel";
  id: string;
  username: string | null;
  itineraryName: string | null;
  currentItinerary: {
    __typename: "AWSCurrentItinerary";
    startDate: string | null;
    endDate: string | null;
    originCity: {
      __typename: "AWSCity";
      id: number | null;
      airportCode: Array<string | null> | null;
      airportName: Array<string | null> | null;
      cityName: string | null;
      countryCode: string | null;
      countryName: string | null;
      vendorName: string | null;
      latitude: number | null;
      longitude: number | null;
    } | null;
    destinationCities: Array<{
      __typename: "AWSCity";
      id: number | null;
      airportCode: Array<string | null> | null;
      airportName: Array<string | null> | null;
      cityName: string | null;
      countryCode: string | null;
      countryName: string | null;
      vendorName: string | null;
      latitude: number | null;
      longitude: number | null;
    } | null> | null;
    travelType: AWSTravelType | null;
    travellers: {
      __typename: "AWSTravellerCount";
      adultCount: number | null;
      childCount: number | null;
      infantCount: number | null;
    } | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnDeleteAwsCurrentItineraryModelSubscription = {
  __typename: "AWSCurrentItineraryModel";
  id: string;
  username: string | null;
  itineraryName: string | null;
  currentItinerary: {
    __typename: "AWSCurrentItinerary";
    startDate: string | null;
    endDate: string | null;
    originCity: {
      __typename: "AWSCity";
      id: number | null;
      airportCode: Array<string | null> | null;
      airportName: Array<string | null> | null;
      cityName: string | null;
      countryCode: string | null;
      countryName: string | null;
      vendorName: string | null;
      latitude: number | null;
      longitude: number | null;
    } | null;
    destinationCities: Array<{
      __typename: "AWSCity";
      id: number | null;
      airportCode: Array<string | null> | null;
      airportName: Array<string | null> | null;
      cityName: string | null;
      countryCode: string | null;
      countryName: string | null;
      vendorName: string | null;
      latitude: number | null;
      longitude: number | null;
    } | null> | null;
    travelType: AWSTravelType | null;
    travellers: {
      __typename: "AWSTravellerCount";
      adultCount: number | null;
      childCount: number | null;
      infantCount: number | null;
    } | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnCreateAwsUserProfileModelSubscription = {
  __typename: "AWSUserProfileModel";
  id: string;
  username: string | null;
  userProfile: {
    __typename: "AWSUserProfile";
    id: string | null;
    firstName: string | null;
    middleName: string | null;
    lastName: string | null;
    relationshipToUser: string | null;
    dateOfBirth: string | null;
    gender: string | null;
    maritalStatus: string | null;
    mobileNo: string | null;
    email: string | null;
    passport: {
      __typename: "AWSPassportDetails";
      number: string | null;
      issuedOn: string | null;
      expiry: string | null;
      country: string | null;
      city: string | null;
    } | null;
    address: string | null;
    city: string | null;
    country: string | null;
    zip: string | null;
  } | null;
  familyProfile: Array<{
    __typename: "AWSUserProfile";
    id: string | null;
    firstName: string | null;
    middleName: string | null;
    lastName: string | null;
    relationshipToUser: string | null;
    dateOfBirth: string | null;
    gender: string | null;
    maritalStatus: string | null;
    mobileNo: string | null;
    email: string | null;
    passport: {
      __typename: "AWSPassportDetails";
      number: string | null;
      issuedOn: string | null;
      expiry: string | null;
      country: string | null;
      city: string | null;
    } | null;
    address: string | null;
    city: string | null;
    country: string | null;
    zip: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnUpdateAwsUserProfileModelSubscription = {
  __typename: "AWSUserProfileModel";
  id: string;
  username: string | null;
  userProfile: {
    __typename: "AWSUserProfile";
    id: string | null;
    firstName: string | null;
    middleName: string | null;
    lastName: string | null;
    relationshipToUser: string | null;
    dateOfBirth: string | null;
    gender: string | null;
    maritalStatus: string | null;
    mobileNo: string | null;
    email: string | null;
    passport: {
      __typename: "AWSPassportDetails";
      number: string | null;
      issuedOn: string | null;
      expiry: string | null;
      country: string | null;
      city: string | null;
    } | null;
    address: string | null;
    city: string | null;
    country: string | null;
    zip: string | null;
  } | null;
  familyProfile: Array<{
    __typename: "AWSUserProfile";
    id: string | null;
    firstName: string | null;
    middleName: string | null;
    lastName: string | null;
    relationshipToUser: string | null;
    dateOfBirth: string | null;
    gender: string | null;
    maritalStatus: string | null;
    mobileNo: string | null;
    email: string | null;
    passport: {
      __typename: "AWSPassportDetails";
      number: string | null;
      issuedOn: string | null;
      expiry: string | null;
      country: string | null;
      city: string | null;
    } | null;
    address: string | null;
    city: string | null;
    country: string | null;
    zip: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnDeleteAwsUserProfileModelSubscription = {
  __typename: "AWSUserProfileModel";
  id: string;
  username: string | null;
  userProfile: {
    __typename: "AWSUserProfile";
    id: string | null;
    firstName: string | null;
    middleName: string | null;
    lastName: string | null;
    relationshipToUser: string | null;
    dateOfBirth: string | null;
    gender: string | null;
    maritalStatus: string | null;
    mobileNo: string | null;
    email: string | null;
    passport: {
      __typename: "AWSPassportDetails";
      number: string | null;
      issuedOn: string | null;
      expiry: string | null;
      country: string | null;
      city: string | null;
    } | null;
    address: string | null;
    city: string | null;
    country: string | null;
    zip: string | null;
  } | null;
  familyProfile: Array<{
    __typename: "AWSUserProfile";
    id: string | null;
    firstName: string | null;
    middleName: string | null;
    lastName: string | null;
    relationshipToUser: string | null;
    dateOfBirth: string | null;
    gender: string | null;
    maritalStatus: string | null;
    mobileNo: string | null;
    email: string | null;
    passport: {
      __typename: "AWSPassportDetails";
      number: string | null;
      issuedOn: string | null;
      expiry: string | null;
      country: string | null;
      city: string | null;
    } | null;
    address: string | null;
    city: string | null;
    country: string | null;
    zip: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnCreateAwsTravelPackageSubscription = {
  __typename: "AWSTravelPackage";
  id: string;
  name: string | null;
  values: string | null;
  availableFrom: string | null;
  availableUpTo: string | null;
  packageOwners: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateAwsTravelPackageSubscription = {
  __typename: "AWSTravelPackage";
  id: string;
  name: string | null;
  values: string | null;
  availableFrom: string | null;
  availableUpTo: string | null;
  packageOwners: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteAwsTravelPackageSubscription = {
  __typename: "AWSTravelPackage";
  id: string;
  name: string | null;
  values: string | null;
  availableFrom: string | null;
  availableUpTo: string | null;
  packageOwners: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateAwsTrawexSettingsModelSubscription = {
  __typename: "AWSTrawexSettingsModel";
  id: string;
  flights: {
    __typename: "AWSTrawexFlightSettings";
    default: {
      __typename: "AWSBookingMargin";
      percent: number | null;
      minimum: number | null;
    } | null;
    byAirline: Array<{
      __typename: "AWSMarginException";
      name: string | null;
      code: string | null;
      margin: {
        __typename: "AWSBookingMargin";
        percent: number | null;
        minimum: number | null;
      } | null;
    } | null> | null;
    byDestination: Array<{
      __typename: "AWSMarginException";
      name: string | null;
      code: string | null;
      margin: {
        __typename: "AWSBookingMargin";
        percent: number | null;
        minimum: number | null;
      } | null;
    } | null> | null;
    cancel: {
      __typename: "AWSCancelPolicyEx";
      minimumFee: number | null;
      adminFee: number | null;
      rules: Array<{
        __typename: "AWSCancelRuleEx";
        refundPercent: number | null;
        graceDays: number | null;
      } | null> | null;
    } | null;
  } | null;
  hotels: {
    __typename: "AWSTrawexHotelSettings";
    default: {
      __typename: "AWSBookingMargin";
      percent: number | null;
      minimum: number | null;
    } | null;
    byHotelChain: Array<{
      __typename: "AWSMarginException";
      name: string | null;
      code: string | null;
      margin: {
        __typename: "AWSBookingMargin";
        percent: number | null;
        minimum: number | null;
      } | null;
    } | null> | null;
    cancel: {
      __typename: "AWSCancelPolicyEx";
      minimumFee: number | null;
      adminFee: number | null;
      rules: Array<{
        __typename: "AWSCancelRuleEx";
        refundPercent: number | null;
        graceDays: number | null;
      } | null> | null;
    } | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateAwsTrawexSettingsModelSubscription = {
  __typename: "AWSTrawexSettingsModel";
  id: string;
  flights: {
    __typename: "AWSTrawexFlightSettings";
    default: {
      __typename: "AWSBookingMargin";
      percent: number | null;
      minimum: number | null;
    } | null;
    byAirline: Array<{
      __typename: "AWSMarginException";
      name: string | null;
      code: string | null;
      margin: {
        __typename: "AWSBookingMargin";
        percent: number | null;
        minimum: number | null;
      } | null;
    } | null> | null;
    byDestination: Array<{
      __typename: "AWSMarginException";
      name: string | null;
      code: string | null;
      margin: {
        __typename: "AWSBookingMargin";
        percent: number | null;
        minimum: number | null;
      } | null;
    } | null> | null;
    cancel: {
      __typename: "AWSCancelPolicyEx";
      minimumFee: number | null;
      adminFee: number | null;
      rules: Array<{
        __typename: "AWSCancelRuleEx";
        refundPercent: number | null;
        graceDays: number | null;
      } | null> | null;
    } | null;
  } | null;
  hotels: {
    __typename: "AWSTrawexHotelSettings";
    default: {
      __typename: "AWSBookingMargin";
      percent: number | null;
      minimum: number | null;
    } | null;
    byHotelChain: Array<{
      __typename: "AWSMarginException";
      name: string | null;
      code: string | null;
      margin: {
        __typename: "AWSBookingMargin";
        percent: number | null;
        minimum: number | null;
      } | null;
    } | null> | null;
    cancel: {
      __typename: "AWSCancelPolicyEx";
      minimumFee: number | null;
      adminFee: number | null;
      rules: Array<{
        __typename: "AWSCancelRuleEx";
        refundPercent: number | null;
        graceDays: number | null;
      } | null> | null;
    } | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteAwsTrawexSettingsModelSubscription = {
  __typename: "AWSTrawexSettingsModel";
  id: string;
  flights: {
    __typename: "AWSTrawexFlightSettings";
    default: {
      __typename: "AWSBookingMargin";
      percent: number | null;
      minimum: number | null;
    } | null;
    byAirline: Array<{
      __typename: "AWSMarginException";
      name: string | null;
      code: string | null;
      margin: {
        __typename: "AWSBookingMargin";
        percent: number | null;
        minimum: number | null;
      } | null;
    } | null> | null;
    byDestination: Array<{
      __typename: "AWSMarginException";
      name: string | null;
      code: string | null;
      margin: {
        __typename: "AWSBookingMargin";
        percent: number | null;
        minimum: number | null;
      } | null;
    } | null> | null;
    cancel: {
      __typename: "AWSCancelPolicyEx";
      minimumFee: number | null;
      adminFee: number | null;
      rules: Array<{
        __typename: "AWSCancelRuleEx";
        refundPercent: number | null;
        graceDays: number | null;
      } | null> | null;
    } | null;
  } | null;
  hotels: {
    __typename: "AWSTrawexHotelSettings";
    default: {
      __typename: "AWSBookingMargin";
      percent: number | null;
      minimum: number | null;
    } | null;
    byHotelChain: Array<{
      __typename: "AWSMarginException";
      name: string | null;
      code: string | null;
      margin: {
        __typename: "AWSBookingMargin";
        percent: number | null;
        minimum: number | null;
      } | null;
    } | null> | null;
    cancel: {
      __typename: "AWSCancelPolicyEx";
      minimumFee: number | null;
      adminFee: number | null;
      rules: Array<{
        __typename: "AWSCancelRuleEx";
        refundPercent: number | null;
        graceDays: number | null;
      } | null> | null;
    } | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateAwsMusementSettingsModelSubscription = {
  __typename: "AWSMusementSettingsModel";
  id: string;
  activities: {
    __typename: "AWSMusementActivitySettings";
    default: {
      __typename: "AWSBookingMargin";
      percent: number | null;
      minimum: number | null;
    } | null;
    byActivity: Array<{
      __typename: "AWSMarginException";
      name: string | null;
      code: string | null;
      margin: {
        __typename: "AWSBookingMargin";
        percent: number | null;
        minimum: number | null;
      } | null;
    } | null> | null;
    cancel: {
      __typename: "AWSCancelPolicyEx";
      minimumFee: number | null;
      adminFee: number | null;
      rules: Array<{
        __typename: "AWSCancelRuleEx";
        refundPercent: number | null;
        graceDays: number | null;
      } | null> | null;
    } | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateAwsMusementSettingsModelSubscription = {
  __typename: "AWSMusementSettingsModel";
  id: string;
  activities: {
    __typename: "AWSMusementActivitySettings";
    default: {
      __typename: "AWSBookingMargin";
      percent: number | null;
      minimum: number | null;
    } | null;
    byActivity: Array<{
      __typename: "AWSMarginException";
      name: string | null;
      code: string | null;
      margin: {
        __typename: "AWSBookingMargin";
        percent: number | null;
        minimum: number | null;
      } | null;
    } | null> | null;
    cancel: {
      __typename: "AWSCancelPolicyEx";
      minimumFee: number | null;
      adminFee: number | null;
      rules: Array<{
        __typename: "AWSCancelRuleEx";
        refundPercent: number | null;
        graceDays: number | null;
      } | null> | null;
    } | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteAwsMusementSettingsModelSubscription = {
  __typename: "AWSMusementSettingsModel";
  id: string;
  activities: {
    __typename: "AWSMusementActivitySettings";
    default: {
      __typename: "AWSBookingMargin";
      percent: number | null;
      minimum: number | null;
    } | null;
    byActivity: Array<{
      __typename: "AWSMarginException";
      name: string | null;
      code: string | null;
      margin: {
        __typename: "AWSBookingMargin";
        percent: number | null;
        minimum: number | null;
      } | null;
    } | null> | null;
    cancel: {
      __typename: "AWSCancelPolicyEx";
      minimumFee: number | null;
      adminFee: number | null;
      rules: Array<{
        __typename: "AWSCancelRuleEx";
        refundPercent: number | null;
        graceDays: number | null;
      } | null> | null;
    } | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateAwsTransactionModelSubscription = {
  __typename: "AWSTransactionModel";
  id: string;
  username: string;
  itineraryName: string | null;
  transactionId: string;
  transactionType: string | null;
  transactionStatus: string | null;
  transactionDetails: string | null;
  travelStartDate: string | null;
  travelCity: string | null;
  email: string | null;
  mobile: string | null;
  transactionDecription: string | null;
  bookingReference: string | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnUpdateAwsTransactionModelSubscription = {
  __typename: "AWSTransactionModel";
  id: string;
  username: string;
  itineraryName: string | null;
  transactionId: string;
  transactionType: string | null;
  transactionStatus: string | null;
  transactionDetails: string | null;
  travelStartDate: string | null;
  travelCity: string | null;
  email: string | null;
  mobile: string | null;
  transactionDecription: string | null;
  bookingReference: string | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnDeleteAwsTransactionModelSubscription = {
  __typename: "AWSTransactionModel";
  id: string;
  username: string;
  itineraryName: string | null;
  transactionId: string;
  transactionType: string | null;
  transactionStatus: string | null;
  transactionDetails: string | null;
  travelStartDate: string | null;
  travelCity: string | null;
  email: string | null;
  mobile: string | null;
  transactionDecription: string | null;
  bookingReference: string | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnCreateAwsStaycationTransactionModelSubscription = {
  __typename: "AWSStaycationTransactionModel";
  id: string;
  username: string;
  itineraryName: string | null;
  transactionId: string;
  transactionType: string | null;
  transactionStatus: string | null;
  transactionDate: string | null;
  transactionDetails: string | null;
  vendorId: string;
  packageId: string;
  bookingReference: string | null;
  email: string | null;
  mobileNo: string | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnUpdateAwsStaycationTransactionModelSubscription = {
  __typename: "AWSStaycationTransactionModel";
  id: string;
  username: string;
  itineraryName: string | null;
  transactionId: string;
  transactionType: string | null;
  transactionStatus: string | null;
  transactionDate: string | null;
  transactionDetails: string | null;
  vendorId: string;
  packageId: string;
  bookingReference: string | null;
  email: string | null;
  mobileNo: string | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnDeleteAwsStaycationTransactionModelSubscription = {
  __typename: "AWSStaycationTransactionModel";
  id: string;
  username: string;
  itineraryName: string | null;
  transactionId: string;
  transactionType: string | null;
  transactionStatus: string | null;
  transactionDate: string | null;
  transactionDetails: string | null;
  vendorId: string;
  packageId: string;
  bookingReference: string | null;
  email: string | null;
  mobileNo: string | null;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateAwsCurrentItineraryModel(
    input: CreateAWSCurrentItineraryModelInput
  ): Promise<CreateAwsCurrentItineraryModelMutation> {
    const statement = `mutation CreateAwsCurrentItineraryModel($input: CreateAWSCurrentItineraryModelInput!) {
        createAWSCurrentItineraryModel(input: $input) {
          __typename
          id
          username
          itineraryName
          currentItinerary {
            __typename
            startDate
            endDate
            originCity {
              __typename
              id
              airportCode
              airportName
              cityName
              countryCode
              countryName
              vendorName
              latitude
              longitude
            }
            destinationCities {
              __typename
              id
              airportCode
              airportName
              cityName
              countryCode
              countryName
              vendorName
              latitude
              longitude
            }
            travelType
            travellers {
              __typename
              adultCount
              childCount
              infantCount
            }
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAwsCurrentItineraryModelMutation>(
      response.data.createAWSCurrentItineraryModel
    );
  }
  async UpdateAwsCurrentItineraryModel(
    input: UpdateAWSCurrentItineraryModelInput
  ): Promise<UpdateAwsCurrentItineraryModelMutation> {
    const statement = `mutation UpdateAwsCurrentItineraryModel($input: UpdateAWSCurrentItineraryModelInput!) {
        updateAWSCurrentItineraryModel(input: $input) {
          __typename
          id
          username
          itineraryName
          currentItinerary {
            __typename
            startDate
            endDate
            originCity {
              __typename
              id
              airportCode
              airportName
              cityName
              countryCode
              countryName
              vendorName
              latitude
              longitude
            }
            destinationCities {
              __typename
              id
              airportCode
              airportName
              cityName
              countryCode
              countryName
              vendorName
              latitude
              longitude
            }
            travelType
            travellers {
              __typename
              adultCount
              childCount
              infantCount
            }
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAwsCurrentItineraryModelMutation>(
      response.data.updateAWSCurrentItineraryModel
    );
  }
  async DeleteAwsCurrentItineraryModel(
    input: DeleteAWSCurrentItineraryModelInput
  ): Promise<DeleteAwsCurrentItineraryModelMutation> {
    const statement = `mutation DeleteAwsCurrentItineraryModel($input: DeleteAWSCurrentItineraryModelInput!) {
        deleteAWSCurrentItineraryModel(input: $input) {
          __typename
          id
          username
          itineraryName
          currentItinerary {
            __typename
            startDate
            endDate
            originCity {
              __typename
              id
              airportCode
              airportName
              cityName
              countryCode
              countryName
              vendorName
              latitude
              longitude
            }
            destinationCities {
              __typename
              id
              airportCode
              airportName
              cityName
              countryCode
              countryName
              vendorName
              latitude
              longitude
            }
            travelType
            travellers {
              __typename
              adultCount
              childCount
              infantCount
            }
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAwsCurrentItineraryModelMutation>(
      response.data.deleteAWSCurrentItineraryModel
    );
  }
  async CreateAwsUserProfileModel(
    input: CreateAWSUserProfileModelInput
  ): Promise<CreateAwsUserProfileModelMutation> {
    const statement = `mutation CreateAwsUserProfileModel($input: CreateAWSUserProfileModelInput!) {
        createAWSUserProfileModel(input: $input) {
          __typename
          id
          username
          userProfile {
            __typename
            id
            firstName
            middleName
            lastName
            relationshipToUser
            dateOfBirth
            gender
            maritalStatus
            mobileNo
            email
            passport {
              __typename
              number
              issuedOn
              expiry
              country
              city
            }
            address
            city
            country
            zip
          }
          familyProfile {
            __typename
            id
            firstName
            middleName
            lastName
            relationshipToUser
            dateOfBirth
            gender
            maritalStatus
            mobileNo
            email
            passport {
              __typename
              number
              issuedOn
              expiry
              country
              city
            }
            address
            city
            country
            zip
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAwsUserProfileModelMutation>(
      response.data.createAWSUserProfileModel
    );
  }
  async UpdateAwsUserProfileModel(
    input: UpdateAWSUserProfileModelInput
  ): Promise<UpdateAwsUserProfileModelMutation> {
    const statement = `mutation UpdateAwsUserProfileModel($input: UpdateAWSUserProfileModelInput!) {
        updateAWSUserProfileModel(input: $input) {
          __typename
          id
          username
          userProfile {
            __typename
            id
            firstName
            middleName
            lastName
            relationshipToUser
            dateOfBirth
            gender
            maritalStatus
            mobileNo
            email
            passport {
              __typename
              number
              issuedOn
              expiry
              country
              city
            }
            address
            city
            country
            zip
          }
          familyProfile {
            __typename
            id
            firstName
            middleName
            lastName
            relationshipToUser
            dateOfBirth
            gender
            maritalStatus
            mobileNo
            email
            passport {
              __typename
              number
              issuedOn
              expiry
              country
              city
            }
            address
            city
            country
            zip
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAwsUserProfileModelMutation>(
      response.data.updateAWSUserProfileModel
    );
  }
  async DeleteAwsUserProfileModel(
    input: DeleteAWSUserProfileModelInput
  ): Promise<DeleteAwsUserProfileModelMutation> {
    const statement = `mutation DeleteAwsUserProfileModel($input: DeleteAWSUserProfileModelInput!) {
        deleteAWSUserProfileModel(input: $input) {
          __typename
          id
          username
          userProfile {
            __typename
            id
            firstName
            middleName
            lastName
            relationshipToUser
            dateOfBirth
            gender
            maritalStatus
            mobileNo
            email
            passport {
              __typename
              number
              issuedOn
              expiry
              country
              city
            }
            address
            city
            country
            zip
          }
          familyProfile {
            __typename
            id
            firstName
            middleName
            lastName
            relationshipToUser
            dateOfBirth
            gender
            maritalStatus
            mobileNo
            email
            passport {
              __typename
              number
              issuedOn
              expiry
              country
              city
            }
            address
            city
            country
            zip
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAwsUserProfileModelMutation>(
      response.data.deleteAWSUserProfileModel
    );
  }
  async CreateAwsTravelPackage(
    input: CreateAWSTravelPackageInput
  ): Promise<CreateAwsTravelPackageMutation> {
    const statement = `mutation CreateAwsTravelPackage($input: CreateAWSTravelPackageInput!) {
        createAWSTravelPackage(input: $input) {
          __typename
          id
          name
          values
          availableFrom
          availableUpTo
          packageOwners
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAwsTravelPackageMutation>response.data.createAWSTravelPackage;
  }
  async UpdateAwsTravelPackage(
    input: UpdateAWSTravelPackageInput
  ): Promise<UpdateAwsTravelPackageMutation> {
    const statement = `mutation UpdateAwsTravelPackage($input: UpdateAWSTravelPackageInput!) {
        updateAWSTravelPackage(input: $input) {
          __typename
          id
          name
          values
          availableFrom
          availableUpTo
          packageOwners
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAwsTravelPackageMutation>response.data.updateAWSTravelPackage;
  }
  async DeleteAwsTravelPackage(
    input: DeleteAWSTravelPackageInput
  ): Promise<DeleteAwsTravelPackageMutation> {
    const statement = `mutation DeleteAwsTravelPackage($input: DeleteAWSTravelPackageInput!) {
        deleteAWSTravelPackage(input: $input) {
          __typename
          id
          name
          values
          availableFrom
          availableUpTo
          packageOwners
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAwsTravelPackageMutation>response.data.deleteAWSTravelPackage;
  }
  async CreateAwsTrawexSettingsModel(
    input: CreateAWSTrawexSettingsModelInput
  ): Promise<CreateAwsTrawexSettingsModelMutation> {
    const statement = `mutation CreateAwsTrawexSettingsModel($input: CreateAWSTrawexSettingsModelInput!) {
        createAWSTrawexSettingsModel(input: $input) {
          __typename
          id
          flights {
            __typename
            default {
              __typename
              percent
              minimum
            }
            byAirline {
              __typename
              name
              code
              margin {
                __typename
                percent
                minimum
              }
            }
            byDestination {
              __typename
              name
              code
              margin {
                __typename
                percent
                minimum
              }
            }
            cancel {
              __typename
              minimumFee
              adminFee
              rules {
                __typename
                refundPercent
                graceDays
              }
            }
          }
          hotels {
            __typename
            default {
              __typename
              percent
              minimum
            }
            byHotelChain {
              __typename
              name
              code
              margin {
                __typename
                percent
                minimum
              }
            }
            cancel {
              __typename
              minimumFee
              adminFee
              rules {
                __typename
                refundPercent
                graceDays
              }
            }
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAwsTrawexSettingsModelMutation>(
      response.data.createAWSTrawexSettingsModel
    );
  }
  async UpdateAwsTrawexSettingsModel(
    input: UpdateAWSTrawexSettingsModelInput
  ): Promise<UpdateAwsTrawexSettingsModelMutation> {
    const statement = `mutation UpdateAwsTrawexSettingsModel($input: UpdateAWSTrawexSettingsModelInput!) {
        updateAWSTrawexSettingsModel(input: $input) {
          __typename
          id
          flights {
            __typename
            default {
              __typename
              percent
              minimum
            }
            byAirline {
              __typename
              name
              code
              margin {
                __typename
                percent
                minimum
              }
            }
            byDestination {
              __typename
              name
              code
              margin {
                __typename
                percent
                minimum
              }
            }
            cancel {
              __typename
              minimumFee
              adminFee
              rules {
                __typename
                refundPercent
                graceDays
              }
            }
          }
          hotels {
            __typename
            default {
              __typename
              percent
              minimum
            }
            byHotelChain {
              __typename
              name
              code
              margin {
                __typename
                percent
                minimum
              }
            }
            cancel {
              __typename
              minimumFee
              adminFee
              rules {
                __typename
                refundPercent
                graceDays
              }
            }
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAwsTrawexSettingsModelMutation>(
      response.data.updateAWSTrawexSettingsModel
    );
  }
  async DeleteAwsTrawexSettingsModel(
    input: DeleteAWSTrawexSettingsModelInput
  ): Promise<DeleteAwsTrawexSettingsModelMutation> {
    const statement = `mutation DeleteAwsTrawexSettingsModel($input: DeleteAWSTrawexSettingsModelInput!) {
        deleteAWSTrawexSettingsModel(input: $input) {
          __typename
          id
          flights {
            __typename
            default {
              __typename
              percent
              minimum
            }
            byAirline {
              __typename
              name
              code
              margin {
                __typename
                percent
                minimum
              }
            }
            byDestination {
              __typename
              name
              code
              margin {
                __typename
                percent
                minimum
              }
            }
            cancel {
              __typename
              minimumFee
              adminFee
              rules {
                __typename
                refundPercent
                graceDays
              }
            }
          }
          hotels {
            __typename
            default {
              __typename
              percent
              minimum
            }
            byHotelChain {
              __typename
              name
              code
              margin {
                __typename
                percent
                minimum
              }
            }
            cancel {
              __typename
              minimumFee
              adminFee
              rules {
                __typename
                refundPercent
                graceDays
              }
            }
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAwsTrawexSettingsModelMutation>(
      response.data.deleteAWSTrawexSettingsModel
    );
  }
  async CreateAwsMusementSettingsModel(
    input: CreateAWSMusementSettingsModelInput
  ): Promise<CreateAwsMusementSettingsModelMutation> {
    const statement = `mutation CreateAwsMusementSettingsModel($input: CreateAWSMusementSettingsModelInput!) {
        createAWSMusementSettingsModel(input: $input) {
          __typename
          id
          activities {
            __typename
            default {
              __typename
              percent
              minimum
            }
            byActivity {
              __typename
              name
              code
              margin {
                __typename
                percent
                minimum
              }
            }
            cancel {
              __typename
              minimumFee
              adminFee
              rules {
                __typename
                refundPercent
                graceDays
              }
            }
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAwsMusementSettingsModelMutation>(
      response.data.createAWSMusementSettingsModel
    );
  }
  async UpdateAwsMusementSettingsModel(
    input: UpdateAWSMusementSettingsModelInput
  ): Promise<UpdateAwsMusementSettingsModelMutation> {
    const statement = `mutation UpdateAwsMusementSettingsModel($input: UpdateAWSMusementSettingsModelInput!) {
        updateAWSMusementSettingsModel(input: $input) {
          __typename
          id
          activities {
            __typename
            default {
              __typename
              percent
              minimum
            }
            byActivity {
              __typename
              name
              code
              margin {
                __typename
                percent
                minimum
              }
            }
            cancel {
              __typename
              minimumFee
              adminFee
              rules {
                __typename
                refundPercent
                graceDays
              }
            }
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAwsMusementSettingsModelMutation>(
      response.data.updateAWSMusementSettingsModel
    );
  }
  async DeleteAwsMusementSettingsModel(
    input: DeleteAWSMusementSettingsModelInput
  ): Promise<DeleteAwsMusementSettingsModelMutation> {
    const statement = `mutation DeleteAwsMusementSettingsModel($input: DeleteAWSMusementSettingsModelInput!) {
        deleteAWSMusementSettingsModel(input: $input) {
          __typename
          id
          activities {
            __typename
            default {
              __typename
              percent
              minimum
            }
            byActivity {
              __typename
              name
              code
              margin {
                __typename
                percent
                minimum
              }
            }
            cancel {
              __typename
              minimumFee
              adminFee
              rules {
                __typename
                refundPercent
                graceDays
              }
            }
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAwsMusementSettingsModelMutation>(
      response.data.deleteAWSMusementSettingsModel
    );
  }
  async CreateAwsTransactionModel(
    input: CreateAWSTransactionModelInput
  ): Promise<CreateAwsTransactionModelMutation> {
    const statement = `mutation CreateAwsTransactionModel($input: CreateAWSTransactionModelInput!) {
        createAWSTransactionModel(input: $input) {
          __typename
          id
          username
          itineraryName
          transactionId
          transactionType
          transactionStatus
          transactionDetails
          travelStartDate
          travelCity
          email
          mobile
          transactionDecription
          bookingReference
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAwsTransactionModelMutation>(
      response.data.createAWSTransactionModel
    );
  }
  async UpdateAwsTransactionModel(
    input: UpdateAWSTransactionModelInput
  ): Promise<UpdateAwsTransactionModelMutation> {
    const statement = `mutation UpdateAwsTransactionModel($input: UpdateAWSTransactionModelInput!) {
        updateAWSTransactionModel(input: $input) {
          __typename
          id
          username
          itineraryName
          transactionId
          transactionType
          transactionStatus
          transactionDetails
          travelStartDate
          travelCity
          email
          mobile
          transactionDecription
          bookingReference
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAwsTransactionModelMutation>(
      response.data.updateAWSTransactionModel
    );
  }
  async DeleteAwsTransactionModel(
    input: DeleteAWSTransactionModelInput
  ): Promise<DeleteAwsTransactionModelMutation> {
    const statement = `mutation DeleteAwsTransactionModel($input: DeleteAWSTransactionModelInput!) {
        deleteAWSTransactionModel(input: $input) {
          __typename
          id
          username
          itineraryName
          transactionId
          transactionType
          transactionStatus
          transactionDetails
          travelStartDate
          travelCity
          email
          mobile
          transactionDecription
          bookingReference
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAwsTransactionModelMutation>(
      response.data.deleteAWSTransactionModel
    );
  }
  async CreateAwsStaycationTransactionModel(
    input: CreateAWSStaycationTransactionModelInput
  ): Promise<CreateAwsStaycationTransactionModelMutation> {
    const statement = `mutation CreateAwsStaycationTransactionModel($input: CreateAWSStaycationTransactionModelInput!) {
        createAWSStaycationTransactionModel(input: $input) {
          __typename
          id
          username
          itineraryName
          transactionId
          transactionType
          transactionStatus
          transactionDate
          transactionDetails
          vendorId
          packageId
          bookingReference
          email
          mobileNo
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAwsStaycationTransactionModelMutation>(
      response.data.createAWSStaycationTransactionModel
    );
  }
  async UpdateAwsStaycationTransactionModel(
    input: UpdateAWSStaycationTransactionModelInput
  ): Promise<UpdateAwsStaycationTransactionModelMutation> {
    const statement = `mutation UpdateAwsStaycationTransactionModel($input: UpdateAWSStaycationTransactionModelInput!) {
        updateAWSStaycationTransactionModel(input: $input) {
          __typename
          id
          username
          itineraryName
          transactionId
          transactionType
          transactionStatus
          transactionDate
          transactionDetails
          vendorId
          packageId
          bookingReference
          email
          mobileNo
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAwsStaycationTransactionModelMutation>(
      response.data.updateAWSStaycationTransactionModel
    );
  }
  async DeleteAwsStaycationTransactionModel(
    input: DeleteAWSStaycationTransactionModelInput
  ): Promise<DeleteAwsStaycationTransactionModelMutation> {
    const statement = `mutation DeleteAwsStaycationTransactionModel($input: DeleteAWSStaycationTransactionModelInput!) {
        deleteAWSStaycationTransactionModel(input: $input) {
          __typename
          id
          username
          itineraryName
          transactionId
          transactionType
          transactionStatus
          transactionDate
          transactionDetails
          vendorId
          packageId
          bookingReference
          email
          mobileNo
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAwsStaycationTransactionModelMutation>(
      response.data.deleteAWSStaycationTransactionModel
    );
  }
  async GetAwsCurrentItineraryModel(
    id: string
  ): Promise<GetAwsCurrentItineraryModelQuery> {
    const statement = `query GetAwsCurrentItineraryModel($id: ID!) {
        getAWSCurrentItineraryModel(id: $id) {
          __typename
          id
          username
          itineraryName
          currentItinerary {
            __typename
            startDate
            endDate
            originCity {
              __typename
              id
              airportCode
              airportName
              cityName
              countryCode
              countryName
              vendorName
              latitude
              longitude
            }
            destinationCities {
              __typename
              id
              airportCode
              airportName
              cityName
              countryCode
              countryName
              vendorName
              latitude
              longitude
            }
            travelType
            travellers {
              __typename
              adultCount
              childCount
              infantCount
            }
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAwsCurrentItineraryModelQuery>(
      response.data.getAWSCurrentItineraryModel
    );
  }
  async ListAwsCurrentItineraryModels(
    filter?: ModelAWSCurrentItineraryModelFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAwsCurrentItineraryModelsQuery> {
    const statement = `query ListAwsCurrentItineraryModels($filter: ModelAWSCurrentItineraryModelFilterInput, $limit: Int, $nextToken: String) {
        listAWSCurrentItineraryModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            username
            itineraryName
            currentItinerary {
              __typename
              startDate
              endDate
              originCity {
                __typename
                id
                airportCode
                airportName
                cityName
                countryCode
                countryName
                vendorName
                latitude
                longitude
              }
              destinationCities {
                __typename
                id
                airportCode
                airportName
                cityName
                countryCode
                countryName
                vendorName
                latitude
                longitude
              }
              travelType
              travellers {
                __typename
                adultCount
                childCount
                infantCount
              }
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAwsCurrentItineraryModelsQuery>(
      response.data.listAWSCurrentItineraryModels
    );
  }
  async GetAwsUserProfileModel(
    id: string
  ): Promise<GetAwsUserProfileModelQuery> {
    const statement = `query GetAwsUserProfileModel($id: ID!) {
        getAWSUserProfileModel(id: $id) {
          __typename
          id
          username
          userProfile {
            __typename
            id
            firstName
            middleName
            lastName
            relationshipToUser
            dateOfBirth
            gender
            maritalStatus
            mobileNo
            email
            passport {
              __typename
              number
              issuedOn
              expiry
              country
              city
            }
            address
            city
            country
            zip
          }
          familyProfile {
            __typename
            id
            firstName
            middleName
            lastName
            relationshipToUser
            dateOfBirth
            gender
            maritalStatus
            mobileNo
            email
            passport {
              __typename
              number
              issuedOn
              expiry
              country
              city
            }
            address
            city
            country
            zip
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAwsUserProfileModelQuery>response.data.getAWSUserProfileModel;
  }
  async ListAwsUserProfileModels(
    filter?: ModelAWSUserProfileModelFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAwsUserProfileModelsQuery> {
    const statement = `query ListAwsUserProfileModels($filter: ModelAWSUserProfileModelFilterInput, $limit: Int, $nextToken: String) {
        listAWSUserProfileModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            username
            userProfile {
              __typename
              id
              firstName
              middleName
              lastName
              relationshipToUser
              dateOfBirth
              gender
              maritalStatus
              mobileNo
              email
              passport {
                __typename
                number
                issuedOn
                expiry
                country
                city
              }
              address
              city
              country
              zip
            }
            familyProfile {
              __typename
              id
              firstName
              middleName
              lastName
              relationshipToUser
              dateOfBirth
              gender
              maritalStatus
              mobileNo
              email
              passport {
                __typename
                number
                issuedOn
                expiry
                country
                city
              }
              address
              city
              country
              zip
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAwsUserProfileModelsQuery>(
      response.data.listAWSUserProfileModels
    );
  }
  async GetAwsTravelPackage(id: string): Promise<GetAwsTravelPackageQuery> {
    const statement = `query GetAwsTravelPackage($id: ID!) {
        getAWSTravelPackage(id: $id) {
          __typename
          id
          name
          values
          availableFrom
          availableUpTo
          packageOwners
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAwsTravelPackageQuery>response.data.getAWSTravelPackage;
  }
  async ListAwsTravelPackages(
    filter?: ModelAWSTravelPackageFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAwsTravelPackagesQuery> {
    const statement = `query ListAwsTravelPackages($filter: ModelAWSTravelPackageFilterInput, $limit: Int, $nextToken: String) {
        listAWSTravelPackages(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            values
            availableFrom
            availableUpTo
            packageOwners
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAwsTravelPackagesQuery>response.data.listAWSTravelPackages;
  }
  async GetAwsTrawexSettingsModel(
    id: string
  ): Promise<GetAwsTrawexSettingsModelQuery> {
    const statement = `query GetAwsTrawexSettingsModel($id: ID!) {
        getAWSTrawexSettingsModel(id: $id) {
          __typename
          id
          flights {
            __typename
            default {
              __typename
              percent
              minimum
            }
            byAirline {
              __typename
              name
              code
              margin {
                __typename
                percent
                minimum
              }
            }
            byDestination {
              __typename
              name
              code
              margin {
                __typename
                percent
                minimum
              }
            }
            cancel {
              __typename
              minimumFee
              adminFee
              rules {
                __typename
                refundPercent
                graceDays
              }
            }
          }
          hotels {
            __typename
            default {
              __typename
              percent
              minimum
            }
            byHotelChain {
              __typename
              name
              code
              margin {
                __typename
                percent
                minimum
              }
            }
            cancel {
              __typename
              minimumFee
              adminFee
              rules {
                __typename
                refundPercent
                graceDays
              }
            }
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAwsTrawexSettingsModelQuery>(
      response.data.getAWSTrawexSettingsModel
    );
  }
  async ListAwsTrawexSettingsModels(
    filter?: ModelAWSTrawexSettingsModelFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAwsTrawexSettingsModelsQuery> {
    const statement = `query ListAwsTrawexSettingsModels($filter: ModelAWSTrawexSettingsModelFilterInput, $limit: Int, $nextToken: String) {
        listAWSTrawexSettingsModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            flights {
              __typename
              default {
                __typename
                percent
                minimum
              }
              byAirline {
                __typename
                name
                code
              }
              byDestination {
                __typename
                name
                code
              }
              cancel {
                __typename
                minimumFee
                adminFee
              }
            }
            hotels {
              __typename
              default {
                __typename
                percent
                minimum
              }
              byHotelChain {
                __typename
                name
                code
              }
              cancel {
                __typename
                minimumFee
                adminFee
              }
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAwsTrawexSettingsModelsQuery>(
      response.data.listAWSTrawexSettingsModels
    );
  }
  async GetAwsMusementSettingsModel(
    id: string
  ): Promise<GetAwsMusementSettingsModelQuery> {
    const statement = `query GetAwsMusementSettingsModel($id: ID!) {
        getAWSMusementSettingsModel(id: $id) {
          __typename
          id
          activities {
            __typename
            default {
              __typename
              percent
              minimum
            }
            byActivity {
              __typename
              name
              code
              margin {
                __typename
                percent
                minimum
              }
            }
            cancel {
              __typename
              minimumFee
              adminFee
              rules {
                __typename
                refundPercent
                graceDays
              }
            }
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAwsMusementSettingsModelQuery>(
      response.data.getAWSMusementSettingsModel
    );
  }
  async ListAwsMusementSettingsModels(
    filter?: ModelAWSMusementSettingsModelFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAwsMusementSettingsModelsQuery> {
    const statement = `query ListAwsMusementSettingsModels($filter: ModelAWSMusementSettingsModelFilterInput, $limit: Int, $nextToken: String) {
        listAWSMusementSettingsModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            activities {
              __typename
              default {
                __typename
                percent
                minimum
              }
              byActivity {
                __typename
                name
                code
              }
              cancel {
                __typename
                minimumFee
                adminFee
              }
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAwsMusementSettingsModelsQuery>(
      response.data.listAWSMusementSettingsModels
    );
  }
  async GetAwsTransactionModel(
    id: string
  ): Promise<GetAwsTransactionModelQuery> {
    const statement = `query GetAwsTransactionModel($id: ID!) {
        getAWSTransactionModel(id: $id) {
          __typename
          id
          username
          itineraryName
          transactionId
          transactionType
          transactionStatus
          transactionDetails
          travelStartDate
          travelCity
          email
          mobile
          transactionDecription
          bookingReference
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAwsTransactionModelQuery>response.data.getAWSTransactionModel;
  }
  async ListAwsTransactionModels(
    filter?: ModelAWSTransactionModelFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAwsTransactionModelsQuery> {
    const statement = `query ListAwsTransactionModels($filter: ModelAWSTransactionModelFilterInput, $limit: Int, $nextToken: String) {
        listAWSTransactionModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            username
            itineraryName
            transactionId
            transactionType
            transactionStatus
            transactionDetails
            travelStartDate
            travelCity
            email
            mobile
            transactionDecription
            bookingReference
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAwsTransactionModelsQuery>(
      response.data.listAWSTransactionModels
    );
  }
  async GetAwsStaycationTransactionModel(
    id: string
  ): Promise<GetAwsStaycationTransactionModelQuery> {
    const statement = `query GetAwsStaycationTransactionModel($id: ID!) {
        getAWSStaycationTransactionModel(id: $id) {
          __typename
          id
          username
          itineraryName
          transactionId
          transactionType
          transactionStatus
          transactionDate
          transactionDetails
          vendorId
          packageId
          bookingReference
          email
          mobileNo
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAwsStaycationTransactionModelQuery>(
      response.data.getAWSStaycationTransactionModel
    );
  }
  async ListAwsStaycationTransactionModels(
    filter?: ModelAWSStaycationTransactionModelFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAwsStaycationTransactionModelsQuery> {
    const statement = `query ListAwsStaycationTransactionModels($filter: ModelAWSStaycationTransactionModelFilterInput, $limit: Int, $nextToken: String) {
        listAWSStaycationTransactionModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            username
            itineraryName
            transactionId
            transactionType
            transactionStatus
            transactionDate
            transactionDetails
            vendorId
            packageId
            bookingReference
            email
            mobileNo
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAwsStaycationTransactionModelsQuery>(
      response.data.listAWSStaycationTransactionModels
    );
  }
  OnCreateAwsCurrentItineraryModelListener: Observable<
    SubscriptionResponse<OnCreateAwsCurrentItineraryModelSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAwsCurrentItineraryModel($owner: String) {
        onCreateAWSCurrentItineraryModel(owner: $owner) {
          __typename
          id
          username
          itineraryName
          currentItinerary {
            __typename
            startDate
            endDate
            originCity {
              __typename
              id
              airportCode
              airportName
              cityName
              countryCode
              countryName
              vendorName
              latitude
              longitude
            }
            destinationCities {
              __typename
              id
              airportCode
              airportName
              cityName
              countryCode
              countryName
              vendorName
              latitude
              longitude
            }
            travelType
            travellers {
              __typename
              adultCount
              childCount
              infantCount
            }
          }
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<OnCreateAwsCurrentItineraryModelSubscription>
  >;

  OnUpdateAwsCurrentItineraryModelListener: Observable<
    SubscriptionResponse<OnUpdateAwsCurrentItineraryModelSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAwsCurrentItineraryModel($owner: String) {
        onUpdateAWSCurrentItineraryModel(owner: $owner) {
          __typename
          id
          username
          itineraryName
          currentItinerary {
            __typename
            startDate
            endDate
            originCity {
              __typename
              id
              airportCode
              airportName
              cityName
              countryCode
              countryName
              vendorName
              latitude
              longitude
            }
            destinationCities {
              __typename
              id
              airportCode
              airportName
              cityName
              countryCode
              countryName
              vendorName
              latitude
              longitude
            }
            travelType
            travellers {
              __typename
              adultCount
              childCount
              infantCount
            }
          }
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<OnUpdateAwsCurrentItineraryModelSubscription>
  >;

  OnDeleteAwsCurrentItineraryModelListener: Observable<
    SubscriptionResponse<OnDeleteAwsCurrentItineraryModelSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAwsCurrentItineraryModel($owner: String) {
        onDeleteAWSCurrentItineraryModel(owner: $owner) {
          __typename
          id
          username
          itineraryName
          currentItinerary {
            __typename
            startDate
            endDate
            originCity {
              __typename
              id
              airportCode
              airportName
              cityName
              countryCode
              countryName
              vendorName
              latitude
              longitude
            }
            destinationCities {
              __typename
              id
              airportCode
              airportName
              cityName
              countryCode
              countryName
              vendorName
              latitude
              longitude
            }
            travelType
            travellers {
              __typename
              adultCount
              childCount
              infantCount
            }
          }
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<OnDeleteAwsCurrentItineraryModelSubscription>
  >;

  OnCreateAwsUserProfileModelListener: Observable<
    SubscriptionResponse<OnCreateAwsUserProfileModelSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAwsUserProfileModel($owner: String) {
        onCreateAWSUserProfileModel(owner: $owner) {
          __typename
          id
          username
          userProfile {
            __typename
            id
            firstName
            middleName
            lastName
            relationshipToUser
            dateOfBirth
            gender
            maritalStatus
            mobileNo
            email
            passport {
              __typename
              number
              issuedOn
              expiry
              country
              city
            }
            address
            city
            country
            zip
          }
          familyProfile {
            __typename
            id
            firstName
            middleName
            lastName
            relationshipToUser
            dateOfBirth
            gender
            maritalStatus
            mobileNo
            email
            passport {
              __typename
              number
              issuedOn
              expiry
              country
              city
            }
            address
            city
            country
            zip
          }
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<OnCreateAwsUserProfileModelSubscription>
  >;

  OnUpdateAwsUserProfileModelListener: Observable<
    SubscriptionResponse<OnUpdateAwsUserProfileModelSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAwsUserProfileModel($owner: String) {
        onUpdateAWSUserProfileModel(owner: $owner) {
          __typename
          id
          username
          userProfile {
            __typename
            id
            firstName
            middleName
            lastName
            relationshipToUser
            dateOfBirth
            gender
            maritalStatus
            mobileNo
            email
            passport {
              __typename
              number
              issuedOn
              expiry
              country
              city
            }
            address
            city
            country
            zip
          }
          familyProfile {
            __typename
            id
            firstName
            middleName
            lastName
            relationshipToUser
            dateOfBirth
            gender
            maritalStatus
            mobileNo
            email
            passport {
              __typename
              number
              issuedOn
              expiry
              country
              city
            }
            address
            city
            country
            zip
          }
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<OnUpdateAwsUserProfileModelSubscription>
  >;

  OnDeleteAwsUserProfileModelListener: Observable<
    SubscriptionResponse<OnDeleteAwsUserProfileModelSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAwsUserProfileModel($owner: String) {
        onDeleteAWSUserProfileModel(owner: $owner) {
          __typename
          id
          username
          userProfile {
            __typename
            id
            firstName
            middleName
            lastName
            relationshipToUser
            dateOfBirth
            gender
            maritalStatus
            mobileNo
            email
            passport {
              __typename
              number
              issuedOn
              expiry
              country
              city
            }
            address
            city
            country
            zip
          }
          familyProfile {
            __typename
            id
            firstName
            middleName
            lastName
            relationshipToUser
            dateOfBirth
            gender
            maritalStatus
            mobileNo
            email
            passport {
              __typename
              number
              issuedOn
              expiry
              country
              city
            }
            address
            city
            country
            zip
          }
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<OnDeleteAwsUserProfileModelSubscription>
  >;

  OnCreateAwsTravelPackageListener: Observable<
    SubscriptionResponse<OnCreateAwsTravelPackageSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAwsTravelPackage {
        onCreateAWSTravelPackage {
          __typename
          id
          name
          values
          availableFrom
          availableUpTo
          packageOwners
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateAwsTravelPackageSubscription>>;

  OnUpdateAwsTravelPackageListener: Observable<
    SubscriptionResponse<OnUpdateAwsTravelPackageSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAwsTravelPackage {
        onUpdateAWSTravelPackage {
          __typename
          id
          name
          values
          availableFrom
          availableUpTo
          packageOwners
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateAwsTravelPackageSubscription>>;

  OnDeleteAwsTravelPackageListener: Observable<
    SubscriptionResponse<OnDeleteAwsTravelPackageSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAwsTravelPackage {
        onDeleteAWSTravelPackage {
          __typename
          id
          name
          values
          availableFrom
          availableUpTo
          packageOwners
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteAwsTravelPackageSubscription>>;

  OnCreateAwsTrawexSettingsModelListener: Observable<
    SubscriptionResponse<OnCreateAwsTrawexSettingsModelSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAwsTrawexSettingsModel {
        onCreateAWSTrawexSettingsModel {
          __typename
          id
          flights {
            __typename
            default {
              __typename
              percent
              minimum
            }
            byAirline {
              __typename
              name
              code
              margin {
                __typename
                percent
                minimum
              }
            }
            byDestination {
              __typename
              name
              code
              margin {
                __typename
                percent
                minimum
              }
            }
            cancel {
              __typename
              minimumFee
              adminFee
              rules {
                __typename
                refundPercent
                graceDays
              }
            }
          }
          hotels {
            __typename
            default {
              __typename
              percent
              minimum
            }
            byHotelChain {
              __typename
              name
              code
              margin {
                __typename
                percent
                minimum
              }
            }
            cancel {
              __typename
              minimumFee
              adminFee
              rules {
                __typename
                refundPercent
                graceDays
              }
            }
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<OnCreateAwsTrawexSettingsModelSubscription>
  >;

  OnUpdateAwsTrawexSettingsModelListener: Observable<
    SubscriptionResponse<OnUpdateAwsTrawexSettingsModelSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAwsTrawexSettingsModel {
        onUpdateAWSTrawexSettingsModel {
          __typename
          id
          flights {
            __typename
            default {
              __typename
              percent
              minimum
            }
            byAirline {
              __typename
              name
              code
              margin {
                __typename
                percent
                minimum
              }
            }
            byDestination {
              __typename
              name
              code
              margin {
                __typename
                percent
                minimum
              }
            }
            cancel {
              __typename
              minimumFee
              adminFee
              rules {
                __typename
                refundPercent
                graceDays
              }
            }
          }
          hotels {
            __typename
            default {
              __typename
              percent
              minimum
            }
            byHotelChain {
              __typename
              name
              code
              margin {
                __typename
                percent
                minimum
              }
            }
            cancel {
              __typename
              minimumFee
              adminFee
              rules {
                __typename
                refundPercent
                graceDays
              }
            }
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<OnUpdateAwsTrawexSettingsModelSubscription>
  >;

  OnDeleteAwsTrawexSettingsModelListener: Observable<
    SubscriptionResponse<OnDeleteAwsTrawexSettingsModelSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAwsTrawexSettingsModel {
        onDeleteAWSTrawexSettingsModel {
          __typename
          id
          flights {
            __typename
            default {
              __typename
              percent
              minimum
            }
            byAirline {
              __typename
              name
              code
              margin {
                __typename
                percent
                minimum
              }
            }
            byDestination {
              __typename
              name
              code
              margin {
                __typename
                percent
                minimum
              }
            }
            cancel {
              __typename
              minimumFee
              adminFee
              rules {
                __typename
                refundPercent
                graceDays
              }
            }
          }
          hotels {
            __typename
            default {
              __typename
              percent
              minimum
            }
            byHotelChain {
              __typename
              name
              code
              margin {
                __typename
                percent
                minimum
              }
            }
            cancel {
              __typename
              minimumFee
              adminFee
              rules {
                __typename
                refundPercent
                graceDays
              }
            }
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<OnDeleteAwsTrawexSettingsModelSubscription>
  >;

  OnCreateAwsMusementSettingsModelListener: Observable<
    SubscriptionResponse<OnCreateAwsMusementSettingsModelSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAwsMusementSettingsModel {
        onCreateAWSMusementSettingsModel {
          __typename
          id
          activities {
            __typename
            default {
              __typename
              percent
              minimum
            }
            byActivity {
              __typename
              name
              code
              margin {
                __typename
                percent
                minimum
              }
            }
            cancel {
              __typename
              minimumFee
              adminFee
              rules {
                __typename
                refundPercent
                graceDays
              }
            }
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<OnCreateAwsMusementSettingsModelSubscription>
  >;

  OnUpdateAwsMusementSettingsModelListener: Observable<
    SubscriptionResponse<OnUpdateAwsMusementSettingsModelSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAwsMusementSettingsModel {
        onUpdateAWSMusementSettingsModel {
          __typename
          id
          activities {
            __typename
            default {
              __typename
              percent
              minimum
            }
            byActivity {
              __typename
              name
              code
              margin {
                __typename
                percent
                minimum
              }
            }
            cancel {
              __typename
              minimumFee
              adminFee
              rules {
                __typename
                refundPercent
                graceDays
              }
            }
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<OnUpdateAwsMusementSettingsModelSubscription>
  >;

  OnDeleteAwsMusementSettingsModelListener: Observable<
    SubscriptionResponse<OnDeleteAwsMusementSettingsModelSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAwsMusementSettingsModel {
        onDeleteAWSMusementSettingsModel {
          __typename
          id
          activities {
            __typename
            default {
              __typename
              percent
              minimum
            }
            byActivity {
              __typename
              name
              code
              margin {
                __typename
                percent
                minimum
              }
            }
            cancel {
              __typename
              minimumFee
              adminFee
              rules {
                __typename
                refundPercent
                graceDays
              }
            }
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<OnDeleteAwsMusementSettingsModelSubscription>
  >;

  OnCreateAwsTransactionModelListener: Observable<
    SubscriptionResponse<OnCreateAwsTransactionModelSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAwsTransactionModel($owner: String) {
        onCreateAWSTransactionModel(owner: $owner) {
          __typename
          id
          username
          itineraryName
          transactionId
          transactionType
          transactionStatus
          transactionDetails
          travelStartDate
          travelCity
          email
          mobile
          transactionDecription
          bookingReference
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<OnCreateAwsTransactionModelSubscription>
  >;

  OnUpdateAwsTransactionModelListener: Observable<
    SubscriptionResponse<OnUpdateAwsTransactionModelSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAwsTransactionModel($owner: String) {
        onUpdateAWSTransactionModel(owner: $owner) {
          __typename
          id
          username
          itineraryName
          transactionId
          transactionType
          transactionStatus
          transactionDetails
          travelStartDate
          travelCity
          email
          mobile
          transactionDecription
          bookingReference
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<OnUpdateAwsTransactionModelSubscription>
  >;

  OnDeleteAwsTransactionModelListener: Observable<
    SubscriptionResponse<OnDeleteAwsTransactionModelSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAwsTransactionModel($owner: String) {
        onDeleteAWSTransactionModel(owner: $owner) {
          __typename
          id
          username
          itineraryName
          transactionId
          transactionType
          transactionStatus
          transactionDetails
          travelStartDate
          travelCity
          email
          mobile
          transactionDecription
          bookingReference
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<OnDeleteAwsTransactionModelSubscription>
  >;

  OnCreateAwsStaycationTransactionModelListener: Observable<
    SubscriptionResponse<OnCreateAwsStaycationTransactionModelSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAwsStaycationTransactionModel($owner: String) {
        onCreateAWSStaycationTransactionModel(owner: $owner) {
          __typename
          id
          username
          itineraryName
          transactionId
          transactionType
          transactionStatus
          transactionDate
          transactionDetails
          vendorId
          packageId
          bookingReference
          email
          mobileNo
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<OnCreateAwsStaycationTransactionModelSubscription>
  >;

  OnUpdateAwsStaycationTransactionModelListener: Observable<
    SubscriptionResponse<OnUpdateAwsStaycationTransactionModelSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAwsStaycationTransactionModel($owner: String) {
        onUpdateAWSStaycationTransactionModel(owner: $owner) {
          __typename
          id
          username
          itineraryName
          transactionId
          transactionType
          transactionStatus
          transactionDate
          transactionDetails
          vendorId
          packageId
          bookingReference
          email
          mobileNo
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<OnUpdateAwsStaycationTransactionModelSubscription>
  >;

  OnDeleteAwsStaycationTransactionModelListener: Observable<
    SubscriptionResponse<OnDeleteAwsStaycationTransactionModelSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAwsStaycationTransactionModel($owner: String) {
        onDeleteAWSStaycationTransactionModel(owner: $owner) {
          __typename
          id
          username
          itineraryName
          transactionId
          transactionType
          transactionStatus
          transactionDate
          transactionDetails
          vendorId
          packageId
          bookingReference
          email
          mobileNo
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<OnDeleteAwsStaycationTransactionModelSubscription>
  >;
}
