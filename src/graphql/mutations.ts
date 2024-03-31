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
` as GeneratedMutation<
  APITypes.DeleteProfileMutationVariables,
  APITypes.DeleteProfileMutation
>;
