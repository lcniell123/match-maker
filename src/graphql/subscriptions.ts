/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateFriendRequest = /* GraphQL */ `subscription OnCreateFriendRequest(
  $filter: ModelSubscriptionFriendRequestFilterInput
) {
  onCreateFriendRequest(filter: $filter) {
    id
    status
    createdAt
    updatedAt
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
      __typename
    }
    friendRequestSenderId
    friendRequestReceiverId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateFriendRequestSubscriptionVariables,
  APITypes.OnCreateFriendRequestSubscription
>;
export const onUpdateFriendRequest = /* GraphQL */ `subscription OnUpdateFriendRequest(
  $filter: ModelSubscriptionFriendRequestFilterInput
) {
  onUpdateFriendRequest(filter: $filter) {
    id
    status
    createdAt
    updatedAt
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
      __typename
    }
    friendRequestSenderId
    friendRequestReceiverId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateFriendRequestSubscriptionVariables,
  APITypes.OnUpdateFriendRequestSubscription
>;
export const onDeleteFriendRequest = /* GraphQL */ `subscription OnDeleteFriendRequest(
  $filter: ModelSubscriptionFriendRequestFilterInput
) {
  onDeleteFriendRequest(filter: $filter) {
    id
    status
    createdAt
    updatedAt
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
      __typename
    }
    friendRequestSenderId
    friendRequestReceiverId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFriendRequestSubscriptionVariables,
  APITypes.OnDeleteFriendRequestSubscription
>;
export const onCreateNotification = /* GraphQL */ `subscription OnCreateNotification(
  $filter: ModelSubscriptionNotificationFilterInput
) {
  onCreateNotification(filter: $filter) {
    id
    type
    content
    createdAt
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
      __typename
    }
    updatedAt
    notificationTargetId
    notificationOriginatorId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateNotificationSubscriptionVariables,
  APITypes.OnCreateNotificationSubscription
>;
export const onUpdateNotification = /* GraphQL */ `subscription OnUpdateNotification(
  $filter: ModelSubscriptionNotificationFilterInput
) {
  onUpdateNotification(filter: $filter) {
    id
    type
    content
    createdAt
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
      __typename
    }
    updatedAt
    notificationTargetId
    notificationOriginatorId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateNotificationSubscriptionVariables,
  APITypes.OnUpdateNotificationSubscription
>;
export const onDeleteNotification = /* GraphQL */ `subscription OnDeleteNotification(
  $filter: ModelSubscriptionNotificationFilterInput
) {
  onDeleteNotification(filter: $filter) {
    id
    type
    content
    createdAt
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
      __typename
    }
    updatedAt
    notificationTargetId
    notificationOriginatorId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteNotificationSubscriptionVariables,
  APITypes.OnDeleteNotificationSubscription
>;
export const onCreateMemberships = /* GraphQL */ `subscription OnCreateMemberships(
  $filter: ModelSubscriptionMembershipsFilterInput
) {
  onCreateMemberships(filter: $filter) {
    id
    createdAt
    updatedAt
    group {
      id
      description
      name
      image
      updatedAt
      createdAt
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
      __typename
    }
    status
    membershipsGroupId
    membershipsUserId
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
    id
    createdAt
    updatedAt
    group {
      id
      description
      name
      image
      updatedAt
      createdAt
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
      __typename
    }
    status
    membershipsGroupId
    membershipsUserId
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
    id
    createdAt
    updatedAt
    group {
      id
      description
      name
      image
      updatedAt
      createdAt
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
      __typename
    }
    status
    membershipsGroupId
    membershipsUserId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMembershipsSubscriptionVariables,
  APITypes.OnDeleteMembershipsSubscription
>;
export const onCreateGroups = /* GraphQL */ `subscription OnCreateGroups($filter: ModelSubscriptionGroupsFilterInput) {
  onCreateGroups(filter: $filter) {
    id
    description
    name
    image
    updatedAt
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
      __typename
    }
    createdAt
    members {
      nextToken
      __typename
    }
    groupsCreatedById
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateGroupsSubscriptionVariables,
  APITypes.OnCreateGroupsSubscription
>;
export const onUpdateGroups = /* GraphQL */ `subscription OnUpdateGroups($filter: ModelSubscriptionGroupsFilterInput) {
  onUpdateGroups(filter: $filter) {
    id
    description
    name
    image
    updatedAt
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
      __typename
    }
    createdAt
    members {
      nextToken
      __typename
    }
    groupsCreatedById
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateGroupsSubscriptionVariables,
  APITypes.OnUpdateGroupsSubscription
>;
export const onDeleteGroups = /* GraphQL */ `subscription OnDeleteGroups($filter: ModelSubscriptionGroupsFilterInput) {
  onDeleteGroups(filter: $filter) {
    id
    description
    name
    image
    updatedAt
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
      __typename
    }
    createdAt
    members {
      nextToken
      __typename
    }
    groupsCreatedById
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteGroupsSubscriptionVariables,
  APITypes.OnDeleteGroupsSubscription
>;
export const onCreateFriendships = /* GraphQL */ `subscription OnCreateFriendships(
  $filter: ModelSubscriptionFriendshipsFilterInput
) {
  onCreateFriendships(filter: $filter) {
    id
    friendshipStatus
    updatedBy
    updatedAt
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
      __typename
    }
    createdAt
    friendshipsFirstUserId
    friendshipsSecondUserId
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
    id
    friendshipStatus
    updatedBy
    updatedAt
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
      __typename
    }
    createdAt
    friendshipsFirstUserId
    friendshipsSecondUserId
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
    id
    friendshipStatus
    updatedBy
    updatedAt
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
      __typename
    }
    createdAt
    friendshipsFirstUserId
    friendshipsSecondUserId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFriendshipsSubscriptionVariables,
  APITypes.OnDeleteFriendshipsSubscription
>;
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
    groupsID
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
    groupsID
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
    groupsID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProfileSubscriptionVariables,
  APITypes.OnDeleteProfileSubscription
>;
