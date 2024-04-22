/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateProfile = /* GraphQL */ `subscription OnCreateProfile(
  $filter: ModelSubscriptionProfileFilterInput
  $owner: String
) {
  onCreateProfile(filter: $filter, owner: $owner) {
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
    groupsID
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProfileSubscriptionVariables,
  APITypes.OnCreateProfileSubscription
>;
export const onUpdateProfile = /* GraphQL */ `subscription OnUpdateProfile(
  $filter: ModelSubscriptionProfileFilterInput
  $owner: String
) {
  onUpdateProfile(filter: $filter, owner: $owner) {
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
    groupsID
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProfileSubscriptionVariables,
  APITypes.OnUpdateProfileSubscription
>;
export const onDeleteProfile = /* GraphQL */ `subscription OnDeleteProfile(
  $filter: ModelSubscriptionProfileFilterInput
  $owner: String
) {
  onDeleteProfile(filter: $filter, owner: $owner) {
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
    groupsID
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProfileSubscriptionVariables,
  APITypes.OnDeleteProfileSubscription
>;
export const onCreateFriendships = /* GraphQL */ `subscription OnCreateFriendships(
  $filter: ModelSubscriptionFriendshipsFilterInput
  $owner: String
) {
  onCreateFriendships(filter: $filter, owner: $owner) {
    id
    friendshipStatus
    updatedBy
    firstUser {
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
      groupsID
      createdAt
      updatedAt
      owner
      __typename
    }
    secondUser {
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
      groupsID
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    friendshipsFirstUserId
    friendshipsSecondUserId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateFriendshipsSubscriptionVariables,
  APITypes.OnCreateFriendshipsSubscription
>;
export const onUpdateFriendships = /* GraphQL */ `subscription OnUpdateFriendships(
  $filter: ModelSubscriptionFriendshipsFilterInput
  $owner: String
) {
  onUpdateFriendships(filter: $filter, owner: $owner) {
    id
    friendshipStatus
    updatedBy
    firstUser {
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
      groupsID
      createdAt
      updatedAt
      owner
      __typename
    }
    secondUser {
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
      groupsID
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    friendshipsFirstUserId
    friendshipsSecondUserId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateFriendshipsSubscriptionVariables,
  APITypes.OnUpdateFriendshipsSubscription
>;
export const onDeleteFriendships = /* GraphQL */ `subscription OnDeleteFriendships(
  $filter: ModelSubscriptionFriendshipsFilterInput
  $owner: String
) {
  onDeleteFriendships(filter: $filter, owner: $owner) {
    id
    friendshipStatus
    updatedBy
    firstUser {
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
      groupsID
      createdAt
      updatedAt
      owner
      __typename
    }
    secondUser {
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
      groupsID
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    friendshipsFirstUserId
    friendshipsSecondUserId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFriendshipsSubscriptionVariables,
  APITypes.OnDeleteFriendshipsSubscription
>;
export const onCreateGroups = /* GraphQL */ `subscription OnCreateGroups(
  $filter: ModelSubscriptionGroupsFilterInput
  $owner: String
) {
  onCreateGroups(filter: $filter, owner: $owner) {
    id
    description
    name
    image
    createdBy {
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
      groupsID
      createdAt
      updatedAt
      owner
      __typename
    }
    members {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    groupsCreatedById
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateGroupsSubscriptionVariables,
  APITypes.OnCreateGroupsSubscription
>;
export const onUpdateGroups = /* GraphQL */ `subscription OnUpdateGroups(
  $filter: ModelSubscriptionGroupsFilterInput
  $owner: String
) {
  onUpdateGroups(filter: $filter, owner: $owner) {
    id
    description
    name
    image
    createdBy {
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
      groupsID
      createdAt
      updatedAt
      owner
      __typename
    }
    members {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    groupsCreatedById
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateGroupsSubscriptionVariables,
  APITypes.OnUpdateGroupsSubscription
>;
export const onDeleteGroups = /* GraphQL */ `subscription OnDeleteGroups(
  $filter: ModelSubscriptionGroupsFilterInput
  $owner: String
) {
  onDeleteGroups(filter: $filter, owner: $owner) {
    id
    description
    name
    image
    createdBy {
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
      groupsID
      createdAt
      updatedAt
      owner
      __typename
    }
    members {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    groupsCreatedById
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteGroupsSubscriptionVariables,
  APITypes.OnDeleteGroupsSubscription
>;
export const onCreateGroupMemberships = /* GraphQL */ `subscription OnCreateGroupMemberships(
  $filter: ModelSubscriptionGroupMembershipsFilterInput
) {
  onCreateGroupMemberships(filter: $filter) {
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
  APITypes.OnCreateGroupMembershipsSubscriptionVariables,
  APITypes.OnCreateGroupMembershipsSubscription
>;
export const onUpdateGroupMemberships = /* GraphQL */ `subscription OnUpdateGroupMemberships(
  $filter: ModelSubscriptionGroupMembershipsFilterInput
) {
  onUpdateGroupMemberships(filter: $filter) {
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
  APITypes.OnUpdateGroupMembershipsSubscriptionVariables,
  APITypes.OnUpdateGroupMembershipsSubscription
>;
export const onDeleteGroupMemberships = /* GraphQL */ `subscription OnDeleteGroupMemberships(
  $filter: ModelSubscriptionGroupMembershipsFilterInput
) {
  onDeleteGroupMemberships(filter: $filter) {
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
  APITypes.OnDeleteGroupMembershipsSubscriptionVariables,
  APITypes.OnDeleteGroupMembershipsSubscription
>;
