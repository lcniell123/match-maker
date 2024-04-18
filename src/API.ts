/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProfileInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  username?: string | null,
  bio?: string | null,
  photo?: string | null,
  coverPhoto?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  age?: number | null,
  country?: string | null,
  timeZone?: string | null,
  city?: string | null,
  region?: string | null,
  zipCode?: string | null,
  postalCode?: string | null,
  language?: string | null,
  languages?: string | null,
  favoriteGame?: string | null,
  gamePreference?: string | null,
  timeAvailability?: string | null,
  preferredTeammateAgeRange?: string | null,
  preferredGenre?: string | null,
  skillLevel?: string | null,
  preferredGameMode?: string | null,
  preferredRole?: string | null,
  playStyle?: string | null,
  flexibility?: boolean | null,
  behaviour?: string | null,
  behavior?: string | null,
  communicationPreference?: string | null,
  toleranceLevel?: string | null,
  teamworkLevel?: string | null,
  competitivenessLevel?: string | null,
};

export type ModelProfileConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  username?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  photo?: ModelStringInput | null,
  coverPhoto?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  age?: ModelIntInput | null,
  country?: ModelStringInput | null,
  timeZone?: ModelStringInput | null,
  city?: ModelStringInput | null,
  region?: ModelStringInput | null,
  zipCode?: ModelStringInput | null,
  postalCode?: ModelStringInput | null,
  language?: ModelStringInput | null,
  languages?: ModelStringInput | null,
  favoriteGame?: ModelStringInput | null,
  gamePreference?: ModelStringInput | null,
  timeAvailability?: ModelStringInput | null,
  preferredTeammateAgeRange?: ModelStringInput | null,
  preferredGenre?: ModelStringInput | null,
  skillLevel?: ModelStringInput | null,
  preferredGameMode?: ModelStringInput | null,
  preferredRole?: ModelStringInput | null,
  playStyle?: ModelStringInput | null,
  flexibility?: ModelBooleanInput | null,
  behaviour?: ModelStringInput | null,
  behavior?: ModelStringInput | null,
  communicationPreference?: ModelStringInput | null,
  toleranceLevel?: ModelStringInput | null,
  teamworkLevel?: ModelStringInput | null,
  competitivenessLevel?: ModelStringInput | null,
  and?: Array< ModelProfileConditionInput | null > | null,
  or?: Array< ModelProfileConditionInput | null > | null,
  not?: ModelProfileConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
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

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Profile = {
  __typename: "Profile",
  id: string,
  name: string,
  description?: string | null,
  username?: string | null,
  bio?: string | null,
  photo?: string | null,
  coverPhoto?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  age?: number | null,
  country?: string | null,
  timeZone?: string | null,
  city?: string | null,
  region?: string | null,
  zipCode?: string | null,
  postalCode?: string | null,
  language?: string | null,
  languages?: string | null,
  favoriteGame?: string | null,
  gamePreference?: string | null,
  timeAvailability?: string | null,
  preferredTeammateAgeRange?: string | null,
  preferredGenre?: string | null,
  skillLevel?: string | null,
  preferredGameMode?: string | null,
  preferredRole?: string | null,
  playStyle?: string | null,
  flexibility?: boolean | null,
  behaviour?: string | null,
  behavior?: string | null,
  communicationPreference?: string | null,
  toleranceLevel?: string | null,
  teamworkLevel?: string | null,
  competitivenessLevel?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateProfileInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  username?: string | null,
  bio?: string | null,
  photo?: string | null,
  coverPhoto?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  age?: number | null,
  country?: string | null,
  timeZone?: string | null,
  city?: string | null,
  region?: string | null,
  zipCode?: string | null,
  postalCode?: string | null,
  language?: string | null,
  languages?: string | null,
  favoriteGame?: string | null,
  gamePreference?: string | null,
  timeAvailability?: string | null,
  preferredTeammateAgeRange?: string | null,
  preferredGenre?: string | null,
  skillLevel?: string | null,
  preferredGameMode?: string | null,
  preferredRole?: string | null,
  playStyle?: string | null,
  flexibility?: boolean | null,
  behaviour?: string | null,
  behavior?: string | null,
  communicationPreference?: string | null,
  toleranceLevel?: string | null,
  teamworkLevel?: string | null,
  competitivenessLevel?: string | null,
};

export type DeleteProfileInput = {
  id: string,
};

export type CreateFriendshipsInput = {
  friendshipId?: string | null,
  userId?: string | null,
  friendId?: string | null,
  status?: string | null,
  id?: string | null,
};

export type ModelFriendshipsConditionInput = {
  friendshipId?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  friendId?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelFriendshipsConditionInput | null > | null,
  or?: Array< ModelFriendshipsConditionInput | null > | null,
  not?: ModelFriendshipsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type Friendships = {
  __typename: "Friendships",
  friendshipId?: string | null,
  userId?: string | null,
  friendId?: string | null,
  status?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateFriendshipsInput = {
  friendshipId?: string | null,
  userId?: string | null,
  friendId?: string | null,
  status?: string | null,
  id: string,
};

export type DeleteFriendshipsInput = {
  id: string,
};

export type CreateGroupsInput = {
  groupId?: string | null,
  name?: string | null,
  createdBy?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  image?: string | null,
  id?: string | null,
};

export type ModelGroupsConditionInput = {
  groupId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  createdBy?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelGroupsConditionInput | null > | null,
  or?: Array< ModelGroupsConditionInput | null > | null,
  not?: ModelGroupsConditionInput | null,
  owner?: ModelStringInput | null,
};

export type Groups = {
  __typename: "Groups",
  groupId?: string | null,
  name?: string | null,
  createdBy?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  image?: string | null,
  id: string,
  owner?: string | null,
};

export type UpdateGroupsInput = {
  groupId?: string | null,
  name?: string | null,
  createdBy?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  image?: string | null,
  id: string,
};

export type DeleteGroupsInput = {
  id: string,
};

export type CreateGroupMembershipsInput = {
  membershipID?: string | null,
  groupId?: string | null,
  userId?: string | null,
  id?: string | null,
};

export type ModelGroupMembershipsConditionInput = {
  membershipID?: ModelStringInput | null,
  groupId?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  and?: Array< ModelGroupMembershipsConditionInput | null > | null,
  or?: Array< ModelGroupMembershipsConditionInput | null > | null,
  not?: ModelGroupMembershipsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type GroupMemberships = {
  __typename: "GroupMemberships",
  membershipID?: string | null,
  groupId?: string | null,
  userId?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGroupMembershipsInput = {
  membershipID?: string | null,
  groupId?: string | null,
  userId?: string | null,
  id: string,
};

export type DeleteGroupMembershipsInput = {
  id: string,
};

export type ModelProfileFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  username?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  photo?: ModelStringInput | null,
  coverPhoto?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  age?: ModelIntInput | null,
  country?: ModelStringInput | null,
  timeZone?: ModelStringInput | null,
  city?: ModelStringInput | null,
  region?: ModelStringInput | null,
  zipCode?: ModelStringInput | null,
  postalCode?: ModelStringInput | null,
  language?: ModelStringInput | null,
  languages?: ModelStringInput | null,
  favoriteGame?: ModelStringInput | null,
  gamePreference?: ModelStringInput | null,
  timeAvailability?: ModelStringInput | null,
  preferredTeammateAgeRange?: ModelStringInput | null,
  preferredGenre?: ModelStringInput | null,
  skillLevel?: ModelStringInput | null,
  preferredGameMode?: ModelStringInput | null,
  preferredRole?: ModelStringInput | null,
  playStyle?: ModelStringInput | null,
  flexibility?: ModelBooleanInput | null,
  behaviour?: ModelStringInput | null,
  behavior?: ModelStringInput | null,
  communicationPreference?: ModelStringInput | null,
  toleranceLevel?: ModelStringInput | null,
  teamworkLevel?: ModelStringInput | null,
  competitivenessLevel?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProfileFilterInput | null > | null,
  or?: Array< ModelProfileFilterInput | null > | null,
  not?: ModelProfileFilterInput | null,
  owner?: ModelStringInput | null,
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

export type ModelFriendshipsFilterInput = {
  friendshipId?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  friendId?: ModelStringInput | null,
  status?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFriendshipsFilterInput | null > | null,
  or?: Array< ModelFriendshipsFilterInput | null > | null,
  not?: ModelFriendshipsFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelFriendshipsConnection = {
  __typename: "ModelFriendshipsConnection",
  items:  Array<Friendships | null >,
  nextToken?: string | null,
};

export type ModelGroupsFilterInput = {
  groupId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  createdBy?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  image?: ModelStringInput | null,
  id?: ModelIDInput | null,
  and?: Array< ModelGroupsFilterInput | null > | null,
  or?: Array< ModelGroupsFilterInput | null > | null,
  not?: ModelGroupsFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelGroupsConnection = {
  __typename: "ModelGroupsConnection",
  items:  Array<Groups | null >,
  nextToken?: string | null,
};

export type ModelGroupMembershipsFilterInput = {
  membershipID?: ModelStringInput | null,
  groupId?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelGroupMembershipsFilterInput | null > | null,
  or?: Array< ModelGroupMembershipsFilterInput | null > | null,
  not?: ModelGroupMembershipsFilterInput | null,
};

export type ModelGroupMembershipsConnection = {
  __typename: "ModelGroupMembershipsConnection",
  items:  Array<GroupMemberships | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
  bio?: ModelSubscriptionStringInput | null,
  photo?: ModelSubscriptionStringInput | null,
  coverPhoto?: ModelSubscriptionStringInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  age?: ModelSubscriptionIntInput | null,
  country?: ModelSubscriptionStringInput | null,
  timeZone?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  region?: ModelSubscriptionStringInput | null,
  zipCode?: ModelSubscriptionStringInput | null,
  postalCode?: ModelSubscriptionStringInput | null,
  language?: ModelSubscriptionStringInput | null,
  languages?: ModelSubscriptionStringInput | null,
  favoriteGame?: ModelSubscriptionStringInput | null,
  gamePreference?: ModelSubscriptionStringInput | null,
  timeAvailability?: ModelSubscriptionStringInput | null,
  preferredTeammateAgeRange?: ModelSubscriptionStringInput | null,
  preferredGenre?: ModelSubscriptionStringInput | null,
  skillLevel?: ModelSubscriptionStringInput | null,
  preferredGameMode?: ModelSubscriptionStringInput | null,
  preferredRole?: ModelSubscriptionStringInput | null,
  playStyle?: ModelSubscriptionStringInput | null,
  flexibility?: ModelSubscriptionBooleanInput | null,
  behaviour?: ModelSubscriptionStringInput | null,
  behavior?: ModelSubscriptionStringInput | null,
  communicationPreference?: ModelSubscriptionStringInput | null,
  toleranceLevel?: ModelSubscriptionStringInput | null,
  teamworkLevel?: ModelSubscriptionStringInput | null,
  competitivenessLevel?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionProfileFilterInput | null > | null,
  owner?: ModelStringInput | null,
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

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionFriendshipsFilterInput = {
  friendshipId?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionStringInput | null,
  friendId?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFriendshipsFilterInput | null > | null,
  or?: Array< ModelSubscriptionFriendshipsFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionGroupsFilterInput = {
  groupId?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdBy?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionGroupsFilterInput | null > | null,
  or?: Array< ModelSubscriptionGroupsFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionGroupMembershipsFilterInput = {
  membershipID?: ModelSubscriptionStringInput | null,
  groupId?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGroupMembershipsFilterInput | null > | null,
  or?: Array< ModelSubscriptionGroupMembershipsFilterInput | null > | null,
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
    username?: string | null,
    bio?: string | null,
    photo?: string | null,
    coverPhoto?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    age?: number | null,
    country?: string | null,
    timeZone?: string | null,
    city?: string | null,
    region?: string | null,
    zipCode?: string | null,
    postalCode?: string | null,
    language?: string | null,
    languages?: string | null,
    favoriteGame?: string | null,
    gamePreference?: string | null,
    timeAvailability?: string | null,
    preferredTeammateAgeRange?: string | null,
    preferredGenre?: string | null,
    skillLevel?: string | null,
    preferredGameMode?: string | null,
    preferredRole?: string | null,
    playStyle?: string | null,
    flexibility?: boolean | null,
    behaviour?: string | null,
    behavior?: string | null,
    communicationPreference?: string | null,
    toleranceLevel?: string | null,
    teamworkLevel?: string | null,
    competitivenessLevel?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    username?: string | null,
    bio?: string | null,
    photo?: string | null,
    coverPhoto?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    age?: number | null,
    country?: string | null,
    timeZone?: string | null,
    city?: string | null,
    region?: string | null,
    zipCode?: string | null,
    postalCode?: string | null,
    language?: string | null,
    languages?: string | null,
    favoriteGame?: string | null,
    gamePreference?: string | null,
    timeAvailability?: string | null,
    preferredTeammateAgeRange?: string | null,
    preferredGenre?: string | null,
    skillLevel?: string | null,
    preferredGameMode?: string | null,
    preferredRole?: string | null,
    playStyle?: string | null,
    flexibility?: boolean | null,
    behaviour?: string | null,
    behavior?: string | null,
    communicationPreference?: string | null,
    toleranceLevel?: string | null,
    teamworkLevel?: string | null,
    competitivenessLevel?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    username?: string | null,
    bio?: string | null,
    photo?: string | null,
    coverPhoto?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    age?: number | null,
    country?: string | null,
    timeZone?: string | null,
    city?: string | null,
    region?: string | null,
    zipCode?: string | null,
    postalCode?: string | null,
    language?: string | null,
    languages?: string | null,
    favoriteGame?: string | null,
    gamePreference?: string | null,
    timeAvailability?: string | null,
    preferredTeammateAgeRange?: string | null,
    preferredGenre?: string | null,
    skillLevel?: string | null,
    preferredGameMode?: string | null,
    preferredRole?: string | null,
    playStyle?: string | null,
    flexibility?: boolean | null,
    behaviour?: string | null,
    behavior?: string | null,
    communicationPreference?: string | null,
    toleranceLevel?: string | null,
    teamworkLevel?: string | null,
    competitivenessLevel?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateFriendshipsMutationVariables = {
  input: CreateFriendshipsInput,
  condition?: ModelFriendshipsConditionInput | null,
};

export type CreateFriendshipsMutation = {
  createFriendships?:  {
    __typename: "Friendships",
    friendshipId?: string | null,
    userId?: string | null,
    friendId?: string | null,
    status?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateFriendshipsMutationVariables = {
  input: UpdateFriendshipsInput,
  condition?: ModelFriendshipsConditionInput | null,
};

export type UpdateFriendshipsMutation = {
  updateFriendships?:  {
    __typename: "Friendships",
    friendshipId?: string | null,
    userId?: string | null,
    friendId?: string | null,
    status?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteFriendshipsMutationVariables = {
  input: DeleteFriendshipsInput,
  condition?: ModelFriendshipsConditionInput | null,
};

export type DeleteFriendshipsMutation = {
  deleteFriendships?:  {
    __typename: "Friendships",
    friendshipId?: string | null,
    userId?: string | null,
    friendId?: string | null,
    status?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateGroupsMutationVariables = {
  input: CreateGroupsInput,
  condition?: ModelGroupsConditionInput | null,
};

export type CreateGroupsMutation = {
  createGroups?:  {
    __typename: "Groups",
    groupId?: string | null,
    name?: string | null,
    createdBy?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    image?: string | null,
    id: string,
    owner?: string | null,
  } | null,
};

export type UpdateGroupsMutationVariables = {
  input: UpdateGroupsInput,
  condition?: ModelGroupsConditionInput | null,
};

export type UpdateGroupsMutation = {
  updateGroups?:  {
    __typename: "Groups",
    groupId?: string | null,
    name?: string | null,
    createdBy?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    image?: string | null,
    id: string,
    owner?: string | null,
  } | null,
};

export type DeleteGroupsMutationVariables = {
  input: DeleteGroupsInput,
  condition?: ModelGroupsConditionInput | null,
};

export type DeleteGroupsMutation = {
  deleteGroups?:  {
    __typename: "Groups",
    groupId?: string | null,
    name?: string | null,
    createdBy?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    image?: string | null,
    id: string,
    owner?: string | null,
  } | null,
};

export type CreateGroupMembershipsMutationVariables = {
  input: CreateGroupMembershipsInput,
  condition?: ModelGroupMembershipsConditionInput | null,
};

export type CreateGroupMembershipsMutation = {
  createGroupMemberships?:  {
    __typename: "GroupMemberships",
    membershipID?: string | null,
    groupId?: string | null,
    userId?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGroupMembershipsMutationVariables = {
  input: UpdateGroupMembershipsInput,
  condition?: ModelGroupMembershipsConditionInput | null,
};

export type UpdateGroupMembershipsMutation = {
  updateGroupMemberships?:  {
    __typename: "GroupMemberships",
    membershipID?: string | null,
    groupId?: string | null,
    userId?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGroupMembershipsMutationVariables = {
  input: DeleteGroupMembershipsInput,
  condition?: ModelGroupMembershipsConditionInput | null,
};

export type DeleteGroupMembershipsMutation = {
  deleteGroupMemberships?:  {
    __typename: "GroupMemberships",
    membershipID?: string | null,
    groupId?: string | null,
    userId?: string | null,
    id: string,
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
    username?: string | null,
    bio?: string | null,
    photo?: string | null,
    coverPhoto?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    age?: number | null,
    country?: string | null,
    timeZone?: string | null,
    city?: string | null,
    region?: string | null,
    zipCode?: string | null,
    postalCode?: string | null,
    language?: string | null,
    languages?: string | null,
    favoriteGame?: string | null,
    gamePreference?: string | null,
    timeAvailability?: string | null,
    preferredTeammateAgeRange?: string | null,
    preferredGenre?: string | null,
    skillLevel?: string | null,
    preferredGameMode?: string | null,
    preferredRole?: string | null,
    playStyle?: string | null,
    flexibility?: boolean | null,
    behaviour?: string | null,
    behavior?: string | null,
    communicationPreference?: string | null,
    toleranceLevel?: string | null,
    teamworkLevel?: string | null,
    competitivenessLevel?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
      username?: string | null,
      bio?: string | null,
      photo?: string | null,
      coverPhoto?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      age?: number | null,
      country?: string | null,
      timeZone?: string | null,
      city?: string | null,
      region?: string | null,
      zipCode?: string | null,
      postalCode?: string | null,
      language?: string | null,
      languages?: string | null,
      favoriteGame?: string | null,
      gamePreference?: string | null,
      timeAvailability?: string | null,
      preferredTeammateAgeRange?: string | null,
      preferredGenre?: string | null,
      skillLevel?: string | null,
      preferredGameMode?: string | null,
      preferredRole?: string | null,
      playStyle?: string | null,
      flexibility?: boolean | null,
      behaviour?: string | null,
      behavior?: string | null,
      communicationPreference?: string | null,
      toleranceLevel?: string | null,
      teamworkLevel?: string | null,
      competitivenessLevel?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFriendshipsQueryVariables = {
  id: string,
};

export type GetFriendshipsQuery = {
  getFriendships?:  {
    __typename: "Friendships",
    friendshipId?: string | null,
    userId?: string | null,
    friendId?: string | null,
    status?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListFriendshipsQueryVariables = {
  filter?: ModelFriendshipsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFriendshipsQuery = {
  listFriendships?:  {
    __typename: "ModelFriendshipsConnection",
    items:  Array< {
      __typename: "Friendships",
      friendshipId?: string | null,
      userId?: string | null,
      friendId?: string | null,
      status?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGroupsQueryVariables = {
  id: string,
};

export type GetGroupsQuery = {
  getGroups?:  {
    __typename: "Groups",
    groupId?: string | null,
    name?: string | null,
    createdBy?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    image?: string | null,
    id: string,
    owner?: string | null,
  } | null,
};

export type ListGroupsQueryVariables = {
  filter?: ModelGroupsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupsQuery = {
  listGroups?:  {
    __typename: "ModelGroupsConnection",
    items:  Array< {
      __typename: "Groups",
      groupId?: string | null,
      name?: string | null,
      createdBy?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      image?: string | null,
      id: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGroupMembershipsQueryVariables = {
  id: string,
};

export type GetGroupMembershipsQuery = {
  getGroupMemberships?:  {
    __typename: "GroupMemberships",
    membershipID?: string | null,
    groupId?: string | null,
    userId?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGroupMembershipsQueryVariables = {
  filter?: ModelGroupMembershipsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupMembershipsQuery = {
  listGroupMemberships?:  {
    __typename: "ModelGroupMembershipsConnection",
    items:  Array< {
      __typename: "GroupMemberships",
      membershipID?: string | null,
      groupId?: string | null,
      userId?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
  owner?: string | null,
};

export type OnCreateProfileSubscription = {
  onCreateProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    description?: string | null,
    username?: string | null,
    bio?: string | null,
    photo?: string | null,
    coverPhoto?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    age?: number | null,
    country?: string | null,
    timeZone?: string | null,
    city?: string | null,
    region?: string | null,
    zipCode?: string | null,
    postalCode?: string | null,
    language?: string | null,
    languages?: string | null,
    favoriteGame?: string | null,
    gamePreference?: string | null,
    timeAvailability?: string | null,
    preferredTeammateAgeRange?: string | null,
    preferredGenre?: string | null,
    skillLevel?: string | null,
    preferredGameMode?: string | null,
    preferredRole?: string | null,
    playStyle?: string | null,
    flexibility?: boolean | null,
    behaviour?: string | null,
    behavior?: string | null,
    communicationPreference?: string | null,
    toleranceLevel?: string | null,
    teamworkLevel?: string | null,
    competitivenessLevel?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
  owner?: string | null,
};

export type OnUpdateProfileSubscription = {
  onUpdateProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    description?: string | null,
    username?: string | null,
    bio?: string | null,
    photo?: string | null,
    coverPhoto?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    age?: number | null,
    country?: string | null,
    timeZone?: string | null,
    city?: string | null,
    region?: string | null,
    zipCode?: string | null,
    postalCode?: string | null,
    language?: string | null,
    languages?: string | null,
    favoriteGame?: string | null,
    gamePreference?: string | null,
    timeAvailability?: string | null,
    preferredTeammateAgeRange?: string | null,
    preferredGenre?: string | null,
    skillLevel?: string | null,
    preferredGameMode?: string | null,
    preferredRole?: string | null,
    playStyle?: string | null,
    flexibility?: boolean | null,
    behaviour?: string | null,
    behavior?: string | null,
    communicationPreference?: string | null,
    toleranceLevel?: string | null,
    teamworkLevel?: string | null,
    competitivenessLevel?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
  owner?: string | null,
};

export type OnDeleteProfileSubscription = {
  onDeleteProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    description?: string | null,
    username?: string | null,
    bio?: string | null,
    photo?: string | null,
    coverPhoto?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    age?: number | null,
    country?: string | null,
    timeZone?: string | null,
    city?: string | null,
    region?: string | null,
    zipCode?: string | null,
    postalCode?: string | null,
    language?: string | null,
    languages?: string | null,
    favoriteGame?: string | null,
    gamePreference?: string | null,
    timeAvailability?: string | null,
    preferredTeammateAgeRange?: string | null,
    preferredGenre?: string | null,
    skillLevel?: string | null,
    preferredGameMode?: string | null,
    preferredRole?: string | null,
    playStyle?: string | null,
    flexibility?: boolean | null,
    behaviour?: string | null,
    behavior?: string | null,
    communicationPreference?: string | null,
    toleranceLevel?: string | null,
    teamworkLevel?: string | null,
    competitivenessLevel?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateFriendshipsSubscriptionVariables = {
  filter?: ModelSubscriptionFriendshipsFilterInput | null,
  owner?: string | null,
};

export type OnCreateFriendshipsSubscription = {
  onCreateFriendships?:  {
    __typename: "Friendships",
    friendshipId?: string | null,
    userId?: string | null,
    friendId?: string | null,
    status?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateFriendshipsSubscriptionVariables = {
  filter?: ModelSubscriptionFriendshipsFilterInput | null,
  owner?: string | null,
};

export type OnUpdateFriendshipsSubscription = {
  onUpdateFriendships?:  {
    __typename: "Friendships",
    friendshipId?: string | null,
    userId?: string | null,
    friendId?: string | null,
    status?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteFriendshipsSubscriptionVariables = {
  filter?: ModelSubscriptionFriendshipsFilterInput | null,
  owner?: string | null,
};

export type OnDeleteFriendshipsSubscription = {
  onDeleteFriendships?:  {
    __typename: "Friendships",
    friendshipId?: string | null,
    userId?: string | null,
    friendId?: string | null,
    status?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateGroupsSubscriptionVariables = {
  filter?: ModelSubscriptionGroupsFilterInput | null,
  owner?: string | null,
};

export type OnCreateGroupsSubscription = {
  onCreateGroups?:  {
    __typename: "Groups",
    groupId?: string | null,
    name?: string | null,
    createdBy?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    image?: string | null,
    id: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateGroupsSubscriptionVariables = {
  filter?: ModelSubscriptionGroupsFilterInput | null,
  owner?: string | null,
};

export type OnUpdateGroupsSubscription = {
  onUpdateGroups?:  {
    __typename: "Groups",
    groupId?: string | null,
    name?: string | null,
    createdBy?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    image?: string | null,
    id: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteGroupsSubscriptionVariables = {
  filter?: ModelSubscriptionGroupsFilterInput | null,
  owner?: string | null,
};

export type OnDeleteGroupsSubscription = {
  onDeleteGroups?:  {
    __typename: "Groups",
    groupId?: string | null,
    name?: string | null,
    createdBy?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    image?: string | null,
    id: string,
    owner?: string | null,
  } | null,
};

export type OnCreateGroupMembershipsSubscriptionVariables = {
  filter?: ModelSubscriptionGroupMembershipsFilterInput | null,
};

export type OnCreateGroupMembershipsSubscription = {
  onCreateGroupMemberships?:  {
    __typename: "GroupMemberships",
    membershipID?: string | null,
    groupId?: string | null,
    userId?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGroupMembershipsSubscriptionVariables = {
  filter?: ModelSubscriptionGroupMembershipsFilterInput | null,
};

export type OnUpdateGroupMembershipsSubscription = {
  onUpdateGroupMemberships?:  {
    __typename: "GroupMemberships",
    membershipID?: string | null,
    groupId?: string | null,
    userId?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGroupMembershipsSubscriptionVariables = {
  filter?: ModelSubscriptionGroupMembershipsFilterInput | null,
};

export type OnDeleteGroupMembershipsSubscription = {
  onDeleteGroupMemberships?:  {
    __typename: "GroupMemberships",
    membershipID?: string | null,
    groupId?: string | null,
    userId?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
