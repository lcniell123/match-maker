/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getProfile = /* GraphQL */ `query GetProfile($id: ID!) {
  getProfile(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetProfileQueryVariables,
  APITypes.GetProfileQuery
>;
export const listProfiles = /* GraphQL */ `query ListProfiles(
  $filter: ModelProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProfilesQueryVariables,
  APITypes.ListProfilesQuery
>;
export const getFriendships = /* GraphQL */ `query GetFriendships($id: ID!) {
  getFriendships(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetFriendshipsQueryVariables,
  APITypes.GetFriendshipsQuery
>;
export const listFriendships = /* GraphQL */ `query ListFriendships(
  $filter: ModelFriendshipsFilterInput
  $limit: Int
  $nextToken: String
) {
  listFriendships(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFriendshipsQueryVariables,
  APITypes.ListFriendshipsQuery
>;
export const getGroups = /* GraphQL */ `query GetGroups($id: ID!) {
  getGroups(id: $id) {
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
` as GeneratedQuery<APITypes.GetGroupsQueryVariables, APITypes.GetGroupsQuery>;
export const listGroups = /* GraphQL */ `query ListGroups(
  $filter: ModelGroupsFilterInput
  $limit: Int
  $nextToken: String
) {
  listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGroupsQueryVariables,
  APITypes.ListGroupsQuery
>;
export const getGroupMemberships = /* GraphQL */ `query GetGroupMemberships($id: ID!) {
  getGroupMemberships(id: $id) {
    membershipID
    groupId
    userId
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetGroupMembershipsQueryVariables,
  APITypes.GetGroupMembershipsQuery
>;
export const listGroupMemberships = /* GraphQL */ `query ListGroupMemberships(
  $filter: ModelGroupMembershipsFilterInput
  $limit: Int
  $nextToken: String
) {
  listGroupMemberships(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      membershipID
      groupId
      userId
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGroupMembershipsQueryVariables,
  APITypes.ListGroupMembershipsQuery
>;
