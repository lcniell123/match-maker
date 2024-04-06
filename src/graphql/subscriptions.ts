/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateProfile = /* GraphQL */ `subscription OnCreateProfile($filter: ModelSubscriptionProfileFilterInput) {
  onCreateProfile(filter: $filter) {
    id
    name
    description
    languages
    zipCode
    gamePreference
    behaviour
    username
    bio
    photo
    coverPhoto
    firstName
    lastName
    age
    country
    timeZone
    city
    region
    postalCode
    language
    favoriteGame
    preferredGenre
    timeAvailability
    preferredTeammateAgeRange
    skillLevel
    preferredGameMode
    preferredRole
    playStyle
    flexibility
    behavior
    communicationPreference
    toleranceLevel
    teamworkLevel
    competitivenessLevel
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProfileSubscriptionVariables,
  APITypes.OnCreateProfileSubscription
>;
export const onUpdateProfile = /* GraphQL */ `subscription OnUpdateProfile($filter: ModelSubscriptionProfileFilterInput) {
  onUpdateProfile(filter: $filter) {
    id
    name
    description
    languages
    zipCode
    gamePreference
    behaviour
    username
    bio
    photo
    coverPhoto
    firstName
    lastName
    age
    country
    timeZone
    city
    region
    postalCode
    language
    favoriteGame
    preferredGenre
    timeAvailability
    preferredTeammateAgeRange
    skillLevel
    preferredGameMode
    preferredRole
    playStyle
    flexibility
    behavior
    communicationPreference
    toleranceLevel
    teamworkLevel
    competitivenessLevel
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProfileSubscriptionVariables,
  APITypes.OnUpdateProfileSubscription
>;
export const onDeleteProfile = /* GraphQL */ `subscription OnDeleteProfile($filter: ModelSubscriptionProfileFilterInput) {
  onDeleteProfile(filter: $filter) {
    id
    name
    description
    languages
    zipCode
    gamePreference
    behaviour
    username
    bio
    photo
    coverPhoto
    firstName
    lastName
    age
    country
    timeZone
    city
    region
    postalCode
    language
    favoriteGame
    preferredGenre
    timeAvailability
    preferredTeammateAgeRange
    skillLevel
    preferredGameMode
    preferredRole
    playStyle
    flexibility
    behavior
    communicationPreference
    toleranceLevel
    teamworkLevel
    competitivenessLevel
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProfileSubscriptionVariables,
  APITypes.OnDeleteProfileSubscription
>;
export const onCreateFriendships = /* GraphQL */ `subscription OnCreateFriendships(
  $filter: ModelSubscriptionFriendshipsFilterInput
) {
  onCreateFriendships(filter: $filter) {
    friendshipId
    userId
    friendId
    status
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateFriendshipsSubscriptionVariables,
  APITypes.OnCreateFriendshipsSubscription
>;
export const onUpdateFriendships = /* GraphQL */ `subscription OnUpdateFriendships(
  $filter: ModelSubscriptionFriendshipsFilterInput
) {
  onUpdateFriendships(filter: $filter) {
    friendshipId
    userId
    friendId
    status
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateFriendshipsSubscriptionVariables,
  APITypes.OnUpdateFriendshipsSubscription
>;
export const onDeleteFriendships = /* GraphQL */ `subscription OnDeleteFriendships(
  $filter: ModelSubscriptionFriendshipsFilterInput
) {
  onDeleteFriendships(filter: $filter) {
    friendshipId
    userId
    friendId
    status
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFriendshipsSubscriptionVariables,
  APITypes.OnDeleteFriendshipsSubscription
>;
export const onCreateGroups = /* GraphQL */ `subscription OnCreateGroups($filter: ModelSubscriptionGroupsFilterInput) {
  onCreateGroups(filter: $filter) {
    groupId
    name
    createdBy
    createdAt
    updatedAt
    image
    id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateGroupsSubscriptionVariables,
  APITypes.OnCreateGroupsSubscription
>;
export const onUpdateGroups = /* GraphQL */ `subscription OnUpdateGroups($filter: ModelSubscriptionGroupsFilterInput) {
  onUpdateGroups(filter: $filter) {
    groupId
    name
    createdBy
    createdAt
    updatedAt
    image
    id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateGroupsSubscriptionVariables,
  APITypes.OnUpdateGroupsSubscription
>;
export const onDeleteGroups = /* GraphQL */ `subscription OnDeleteGroups($filter: ModelSubscriptionGroupsFilterInput) {
  onDeleteGroups(filter: $filter) {
    groupId
    name
    createdBy
    createdAt
    updatedAt
    image
    id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteGroupsSubscriptionVariables,
  APITypes.OnDeleteGroupsSubscription
>;
export const onCreateMemberships = /* GraphQL */ `subscription OnCreateMemberships(
  $filter: ModelSubscriptionMembershipsFilterInput
) {
  onCreateMemberships(filter: $filter) {
    membershipID
    groupId
    userId
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMembershipsSubscriptionVariables,
  APITypes.OnCreateMembershipsSubscription
>;
export const onUpdateMemberships = /* GraphQL */ `subscription OnUpdateMemberships(
  $filter: ModelSubscriptionMembershipsFilterInput
) {
  onUpdateMemberships(filter: $filter) {
    membershipID
    groupId
    userId
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMembershipsSubscriptionVariables,
  APITypes.OnUpdateMembershipsSubscription
>;
export const onDeleteMemberships = /* GraphQL */ `subscription OnDeleteMemberships(
  $filter: ModelSubscriptionMembershipsFilterInput
) {
  onDeleteMemberships(filter: $filter) {
    membershipID
    groupId
    userId
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMembershipsSubscriptionVariables,
  APITypes.OnDeleteMembershipsSubscription
>;
