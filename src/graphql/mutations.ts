/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createProfile = /* GraphQL */ `mutation CreateProfile(
  $input: CreateProfileInput!
  $condition: ModelProfileConditionInput
) {
  createProfile(input: $input, condition: $condition) {
    id
    name
    description
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
    zipCode
    postalCode
    language
    languages
    favoriteGame
    gamePreference
    timeAvailability
    preferredTeammateAgeRange
    preferredGenre
    skillLevel
    preferredGameMode
    preferredRole
    playStyle
    flexibility
    behaviour
    behavior
    communicationPreference
    toleranceLevel
    teamworkLevel
    competitivenessLevel
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateProfileMutationVariables,
  APITypes.CreateProfileMutation
>;
export const updateProfile = /* GraphQL */ `mutation UpdateProfile(
  $input: UpdateProfileInput!
  $condition: ModelProfileConditionInput
) {
  updateProfile(input: $input, condition: $condition) {
    id
    name
    description
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
    zipCode
    postalCode
    language
    languages
    favoriteGame
    gamePreference
    timeAvailability
    preferredTeammateAgeRange
    preferredGenre
    skillLevel
    preferredGameMode
    preferredRole
    playStyle
    flexibility
    behaviour
    behavior
    communicationPreference
    toleranceLevel
    teamworkLevel
    competitivenessLevel
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateProfileMutationVariables,
  APITypes.UpdateProfileMutation
>;
export const deleteProfile = /* GraphQL */ `mutation DeleteProfile(
  $input: DeleteProfileInput!
  $condition: ModelProfileConditionInput
) {
  deleteProfile(input: $input, condition: $condition) {
    id
    name
    description
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
    zipCode
    postalCode
    language
    languages
    favoriteGame
    gamePreference
    timeAvailability
    preferredTeammateAgeRange
    preferredGenre
    skillLevel
    preferredGameMode
    preferredRole
    playStyle
    flexibility
    behaviour
    behavior
    communicationPreference
    toleranceLevel
    teamworkLevel
    competitivenessLevel
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteProfileMutationVariables,
  APITypes.DeleteProfileMutation
>;
export const createFriendships = /* GraphQL */ `mutation CreateFriendships(
  $input: CreateFriendshipsInput!
  $condition: ModelFriendshipsConditionInput
) {
  createFriendships(input: $input, condition: $condition) {
    friendshipId
    userId
    friendId
    status
    id
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFriendshipsMutationVariables,
  APITypes.CreateFriendshipsMutation
>;
export const updateFriendships = /* GraphQL */ `mutation UpdateFriendships(
  $input: UpdateFriendshipsInput!
  $condition: ModelFriendshipsConditionInput
) {
  updateFriendships(input: $input, condition: $condition) {
    friendshipId
    userId
    friendId
    status
    id
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFriendshipsMutationVariables,
  APITypes.UpdateFriendshipsMutation
>;
export const deleteFriendships = /* GraphQL */ `mutation DeleteFriendships(
  $input: DeleteFriendshipsInput!
  $condition: ModelFriendshipsConditionInput
) {
  deleteFriendships(input: $input, condition: $condition) {
    friendshipId
    userId
    friendId
    status
    id
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFriendshipsMutationVariables,
  APITypes.DeleteFriendshipsMutation
>;
export const createGroups = /* GraphQL */ `mutation CreateGroups(
  $input: CreateGroupsInput!
  $condition: ModelGroupsConditionInput
) {
  createGroups(input: $input, condition: $condition) {
    groupId
    name
    createdBy
    createdAt
    updatedAt
    image
    id
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGroupsMutationVariables,
  APITypes.CreateGroupsMutation
>;
export const updateGroups = /* GraphQL */ `mutation UpdateGroups(
  $input: UpdateGroupsInput!
  $condition: ModelGroupsConditionInput
) {
  updateGroups(input: $input, condition: $condition) {
    groupId
    name
    createdBy
    createdAt
    updatedAt
    image
    id
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGroupsMutationVariables,
  APITypes.UpdateGroupsMutation
>;
export const deleteGroups = /* GraphQL */ `mutation DeleteGroups(
  $input: DeleteGroupsInput!
  $condition: ModelGroupsConditionInput
) {
  deleteGroups(input: $input, condition: $condition) {
    groupId
    name
    createdBy
    createdAt
    updatedAt
    image
    id
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGroupsMutationVariables,
  APITypes.DeleteGroupsMutation
>;
export const createGroupMemberships = /* GraphQL */ `mutation CreateGroupMemberships(
  $input: CreateGroupMembershipsInput!
  $condition: ModelGroupMembershipsConditionInput
) {
  createGroupMemberships(input: $input, condition: $condition) {
    membershipID
    groupId
    userId
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGroupMembershipsMutationVariables,
  APITypes.CreateGroupMembershipsMutation
>;
export const updateGroupMemberships = /* GraphQL */ `mutation UpdateGroupMemberships(
  $input: UpdateGroupMembershipsInput!
  $condition: ModelGroupMembershipsConditionInput
) {
  updateGroupMemberships(input: $input, condition: $condition) {
    membershipID
    groupId
    userId
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGroupMembershipsMutationVariables,
  APITypes.UpdateGroupMembershipsMutation
>;
export const deleteGroupMemberships = /* GraphQL */ `mutation DeleteGroupMemberships(
  $input: DeleteGroupMembershipsInput!
  $condition: ModelGroupMembershipsConditionInput
) {
  deleteGroupMemberships(input: $input, condition: $condition) {
    membershipID
    groupId
    userId
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGroupMembershipsMutationVariables,
  APITypes.DeleteGroupMembershipsMutation
>;
