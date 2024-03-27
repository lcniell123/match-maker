/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProfileInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  age?: number | null,
  languages?: string | null,
  bio?: string | null,
  country?: string | null,
  zipCode?: number | null,
  timeZone?: number | null,
  gamePreference?: string | null,
  behaviour?: string | null,
  skillLevel?: string | null,
  playStyle?: string | null,
};

export type ModelProfileConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  age?: ModelIntInput | null,
  languages?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  country?: ModelStringInput | null,
  zipCode?: ModelIntInput | null,
  timeZone?: ModelIntInput | null,
  gamePreference?: ModelStringInput | null,
  behaviour?: ModelStringInput | null,
  skillLevel?: ModelStringInput | null,
  playStyle?: ModelStringInput | null,
  and?: Array< ModelProfileConditionInput | null > | null,
  or?: Array< ModelProfileConditionInput | null > | null,
  not?: ModelProfileConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Profile = {
  __typename: "Profile",
  id: string,
  name: string,
  description?: string | null,
  age?: number | null,
  languages?: string | null,
  bio?: string | null,
  country?: string | null,
  zipCode?: number | null,
  timeZone?: number | null,
  gamePreference?: string | null,
  behaviour?: string | null,
  skillLevel?: string | null,
  playStyle?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProfileInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  age?: number | null,
  languages?: string | null,
  bio?: string | null,
  country?: string | null,
  zipCode?: number | null,
  timeZone?: number | null,
  gamePreference?: string | null,
  behaviour?: string | null,
  skillLevel?: string | null,
  playStyle?: string | null,
};

export type DeleteProfileInput = {
  id: string,
};

export type ModelProfileFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  age?: ModelIntInput | null,
  languages?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  country?: ModelStringInput | null,
  zipCode?: ModelIntInput | null,
  timeZone?: ModelIntInput | null,
  gamePreference?: ModelStringInput | null,
  behaviour?: ModelStringInput | null,
  skillLevel?: ModelStringInput | null,
  playStyle?: ModelStringInput | null,
  and?: Array< ModelProfileFilterInput | null > | null,
  or?: Array< ModelProfileFilterInput | null > | null,
  not?: ModelProfileFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelProfileConnection = {
  __typename: "ModelProfileConnection",
  items:  Array<Profile | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  age?: ModelSubscriptionIntInput | null,
  languages?: ModelSubscriptionStringInput | null,
  bio?: ModelSubscriptionStringInput | null,
  country?: ModelSubscriptionStringInput | null,
  zipCode?: ModelSubscriptionIntInput | null,
  timeZone?: ModelSubscriptionIntInput | null,
  gamePreference?: ModelSubscriptionStringInput | null,
  behaviour?: ModelSubscriptionStringInput | null,
  skillLevel?: ModelSubscriptionStringInput | null,
  playStyle?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionProfileFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateProfileMutationVariables = {
  input: CreateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type CreateProfileMutation = {
  createProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    description?: string | null,
    age?: number | null,
    languages?: string | null,
    bio?: string | null,
    country?: string | null,
    zipCode?: number | null,
    timeZone?: number | null,
    gamePreference?: string | null,
    behaviour?: string | null,
    skillLevel?: string | null,
    playStyle?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProfileMutationVariables = {
  input: UpdateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type UpdateProfileMutation = {
  updateProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    description?: string | null,
    age?: number | null,
    languages?: string | null,
    bio?: string | null,
    country?: string | null,
    zipCode?: number | null,
    timeZone?: number | null,
    gamePreference?: string | null,
    behaviour?: string | null,
    skillLevel?: string | null,
    playStyle?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProfileMutationVariables = {
  input: DeleteProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type DeleteProfileMutation = {
  deleteProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    description?: string | null,
    age?: number | null,
    languages?: string | null,
    bio?: string | null,
    country?: string | null,
    zipCode?: number | null,
    timeZone?: number | null,
    gamePreference?: string | null,
    behaviour?: string | null,
    skillLevel?: string | null,
    playStyle?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetProfileQueryVariables = {
  id: string,
};

export type GetProfileQuery = {
  getProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    description?: string | null,
    age?: number | null,
    languages?: string | null,
    bio?: string | null,
    country?: string | null,
    zipCode?: number | null,
    timeZone?: number | null,
    gamePreference?: string | null,
    behaviour?: string | null,
    skillLevel?: string | null,
    playStyle?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProfilesQueryVariables = {
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProfilesQuery = {
  listProfiles?:  {
    __typename: "ModelProfileConnection",
    items:  Array< {
      __typename: "Profile",
      id: string,
      name: string,
      description?: string | null,
      age?: number | null,
      languages?: string | null,
      bio?: string | null,
      country?: string | null,
      zipCode?: number | null,
      timeZone?: number | null,
      gamePreference?: string | null,
      behaviour?: string | null,
      skillLevel?: string | null,
      playStyle?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
};

export type OnCreateProfileSubscription = {
  onCreateProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    description?: string | null,
    age?: number | null,
    languages?: string | null,
    bio?: string | null,
    country?: string | null,
    zipCode?: number | null,
    timeZone?: number | null,
    gamePreference?: string | null,
    behaviour?: string | null,
    skillLevel?: string | null,
    playStyle?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
};

export type OnUpdateProfileSubscription = {
  onUpdateProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    description?: string | null,
    age?: number | null,
    languages?: string | null,
    bio?: string | null,
    country?: string | null,
    zipCode?: number | null,
    timeZone?: number | null,
    gamePreference?: string | null,
    behaviour?: string | null,
    skillLevel?: string | null,
    playStyle?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
};

export type OnDeleteProfileSubscription = {
  onDeleteProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    description?: string | null,
    age?: number | null,
    languages?: string | null,
    bio?: string | null,
    country?: string | null,
    zipCode?: number | null,
    timeZone?: number | null,
    gamePreference?: string | null,
    behaviour?: string | null,
    skillLevel?: string | null,
    playStyle?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
