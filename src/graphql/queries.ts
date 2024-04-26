/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getFriendRequest = /* GraphQL */ `query GetFriendRequest($id: ID!) {
  getFriendRequest(id: $id) {
    id
    status
    sender {
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
      groupsID
      createdAt
      updatedAt
      matchesMatchesId
      matchesRejectedMatchesId
      __typename
    }
    receiver {
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
      groupsID
      createdAt
      updatedAt
      matchesMatchesId
      matchesRejectedMatchesId
      __typename
    }
    createdAt
    updatedAt
    friendRequestSenderId
    friendRequestReceiverId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFriendRequestQueryVariables,
  APITypes.GetFriendRequestQuery
>;
export const listFriendRequests = /* GraphQL */ `query ListFriendRequests(
  $filter: ModelFriendRequestFilterInput
  $limit: Int
  $nextToken: String
) {
  listFriendRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      status
      createdAt
      updatedAt
      friendRequestSenderId
      friendRequestReceiverId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFriendRequestsQueryVariables,
  APITypes.ListFriendRequestsQuery
>;
export const getNotification = /* GraphQL */ `query GetNotification($id: ID!) {
  getNotification(id: $id) {
    id
    type
    content
    read
    target {
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
      groupsID
      createdAt
      updatedAt
      matchesMatchesId
      matchesRejectedMatchesId
      __typename
    }
    originator {
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
      groupsID
      createdAt
      updatedAt
      matchesMatchesId
      matchesRejectedMatchesId
      __typename
    }
    createdAt
    updatedAt
    notificationTargetId
    notificationOriginatorId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetNotificationQueryVariables,
  APITypes.GetNotificationQuery
>;
export const listNotifications = /* GraphQL */ `query ListNotifications(
  $filter: ModelNotificationFilterInput
  $limit: Int
  $nextToken: String
) {
  listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      type
      content
      read
      createdAt
      updatedAt
      notificationTargetId
      notificationOriginatorId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListNotificationsQueryVariables,
  APITypes.ListNotificationsQuery
>;
export const getMemberships = /* GraphQL */ `query GetMemberships($id: ID!) {
  getMemberships(id: $id) {
    id
    group {
      id
      description
      name
      image
      createdAt
      updatedAt
      groupsCreatedById
      __typename
    }
    user {
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
      groupsID
      createdAt
      updatedAt
      matchesMatchesId
      matchesRejectedMatchesId
      __typename
    }
    status
    createdAt
    updatedAt
    membershipsGroupId
    membershipsUserId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMembershipsQueryVariables,
  APITypes.GetMembershipsQuery
>;
export const listMemberships = /* GraphQL */ `query ListMemberships(
  $filter: ModelMembershipsFilterInput
  $limit: Int
  $nextToken: String
) {
  listMemberships(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      status
      createdAt
      updatedAt
      membershipsGroupId
      membershipsUserId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMembershipsQueryVariables,
  APITypes.ListMembershipsQuery
>;
export const getGroups = /* GraphQL */ `query GetGroups($id: ID!) {
  getGroups(id: $id) {
    id
    description
    name
    image
    createdBy {
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
      groupsID
      createdAt
      updatedAt
      matchesMatchesId
      matchesRejectedMatchesId
      __typename
    }
    members {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    groupsCreatedById
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
      id
      description
      name
      image
      createdAt
      updatedAt
      groupsCreatedById
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
export const getMatches = /* GraphQL */ `query GetMatches($id: ID!) {
  getMatches(id: $id) {
    id
    user {
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
      groupsID
      createdAt
      updatedAt
      matchesMatchesId
      matchesRejectedMatchesId
      __typename
    }
    matches {
      nextToken
      __typename
    }
    rejectedMatches {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    matchesUserId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMatchesQueryVariables,
  APITypes.GetMatchesQuery
>;
export const listMatches = /* GraphQL */ `query ListMatches(
  $filter: ModelMatchesFilterInput
  $limit: Int
  $nextToken: String
) {
  listMatches(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      matchesUserId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMatchesQueryVariables,
  APITypes.ListMatchesQuery
>;
export const getFriendships = /* GraphQL */ `query GetFriendships($id: ID!) {
  getFriendships(id: $id) {
    id
    friendshipStatus
    updatedBy
    firstUser {
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
      groupsID
      createdAt
      updatedAt
      matchesMatchesId
      matchesRejectedMatchesId
      __typename
    }
    secondUser {
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
      groupsID
      createdAt
      updatedAt
      matchesMatchesId
      matchesRejectedMatchesId
      __typename
    }
    createdAt
    updatedAt
    friendshipsFirstUserId
    friendshipsSecondUserId
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
      id
      friendshipStatus
      updatedBy
      createdAt
      updatedAt
      friendshipsFirstUserId
      friendshipsSecondUserId
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
export const getProfile = /* GraphQL */ `query GetProfile($id: ID!) {
  getProfile(id: $id) {
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
    groupsID
    createdAt
    updatedAt
    matchesMatchesId
    matchesRejectedMatchesId
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
      groupsID
      createdAt
      updatedAt
      matchesMatchesId
      matchesRejectedMatchesId
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
export const profilesByGroupsID = /* GraphQL */ `query ProfilesByGroupsID(
  $groupsID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  profilesByGroupsID(
    groupsID: $groupsID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
      groupsID
      createdAt
      updatedAt
      matchesMatchesId
      matchesRejectedMatchesId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ProfilesByGroupsIDQueryVariables,
  APITypes.ProfilesByGroupsIDQuery
>;



