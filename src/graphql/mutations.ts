/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createFriendRequest = /* GraphQL */ `mutation CreateFriendRequest(
  $input: CreateFriendRequestInput!
  $condition: ModelFriendRequestConditionInput
) {
  createFriendRequest(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateFriendRequestMutationVariables,
  APITypes.CreateFriendRequestMutation
>;
export const updateFriendRequest = /* GraphQL */ `mutation UpdateFriendRequest(
  $input: UpdateFriendRequestInput!
  $condition: ModelFriendRequestConditionInput
) {
  updateFriendRequest(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateFriendRequestMutationVariables,
  APITypes.UpdateFriendRequestMutation
>;
export const deleteFriendRequest = /* GraphQL */ `mutation DeleteFriendRequest(
  $input: DeleteFriendRequestInput!
  $condition: ModelFriendRequestConditionInput
) {
  deleteFriendRequest(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteFriendRequestMutationVariables,
  APITypes.DeleteFriendRequestMutation
>;
export const createNotification = /* GraphQL */ `mutation CreateNotification(
  $input: CreateNotificationInput!
  $condition: ModelNotificationConditionInput
) {
  createNotification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateNotificationMutationVariables,
  APITypes.CreateNotificationMutation
>;
export const updateNotification = /* GraphQL */ `mutation UpdateNotification(
  $input: UpdateNotificationInput!
  $condition: ModelNotificationConditionInput
) {
  updateNotification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateNotificationMutationVariables,
  APITypes.UpdateNotificationMutation
>;
export const deleteNotification = /* GraphQL */ `mutation DeleteNotification(
  $input: DeleteNotificationInput!
  $condition: ModelNotificationConditionInput
) {
  deleteNotification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteNotificationMutationVariables,
  APITypes.DeleteNotificationMutation
>;
export const createMemberships = /* GraphQL */ `mutation CreateMemberships(
  $input: CreateMembershipsInput!
  $condition: ModelMembershipsConditionInput
) {
  createMemberships(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMembershipsMutationVariables,
  APITypes.CreateMembershipsMutation
>;
export const updateMemberships = /* GraphQL */ `mutation UpdateMemberships(
  $input: UpdateMembershipsInput!
  $condition: ModelMembershipsConditionInput
) {
  updateMemberships(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMembershipsMutationVariables,
  APITypes.UpdateMembershipsMutation
>;
export const deleteMemberships = /* GraphQL */ `mutation DeleteMemberships(
  $input: DeleteMembershipsInput!
  $condition: ModelMembershipsConditionInput
) {
  deleteMemberships(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMembershipsMutationVariables,
  APITypes.DeleteMembershipsMutation
>;
export const createGroups = /* GraphQL */ `mutation CreateGroups(
  $input: CreateGroupsInput!
  $condition: ModelGroupsConditionInput
) {
  createGroups(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateGroupsMutationVariables,
  APITypes.CreateGroupsMutation
>;
export const updateGroups = /* GraphQL */ `mutation UpdateGroups(
  $input: UpdateGroupsInput!
  $condition: ModelGroupsConditionInput
) {
  updateGroups(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateGroupsMutationVariables,
  APITypes.UpdateGroupsMutation
>;
export const deleteGroups = /* GraphQL */ `mutation DeleteGroups(
  $input: DeleteGroupsInput!
  $condition: ModelGroupsConditionInput
) {
  deleteGroups(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteGroupsMutationVariables,
  APITypes.DeleteGroupsMutation
>;
export const createMatches = /* GraphQL */ `mutation CreateMatches(
  $input: CreateMatchesInput!
  $condition: ModelMatchesConditionInput
) {
  createMatches(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMatchesMutationVariables,
  APITypes.CreateMatchesMutation
>;
export const updateMatches = /* GraphQL */ `mutation UpdateMatches(
  $input: UpdateMatchesInput!
  $condition: ModelMatchesConditionInput
) {
  updateMatches(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMatchesMutationVariables,
  APITypes.UpdateMatchesMutation
>;
export const deleteMatches = /* GraphQL */ `mutation DeleteMatches(
  $input: DeleteMatchesInput!
  $condition: ModelMatchesConditionInput
) {
  deleteMatches(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMatchesMutationVariables,
  APITypes.DeleteMatchesMutation
>;
export const createFriendships = /* GraphQL */ `mutation CreateFriendships(
  $input: CreateFriendshipsInput!
  $condition: ModelFriendshipsConditionInput
) {
  createFriendships(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateFriendshipsMutationVariables,
  APITypes.CreateFriendshipsMutation
>;
export const updateFriendships = /* GraphQL */ `mutation UpdateFriendships(
  $input: UpdateFriendshipsInput!
  $condition: ModelFriendshipsConditionInput
) {
  updateFriendships(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateFriendshipsMutationVariables,
  APITypes.UpdateFriendshipsMutation
>;
export const deleteFriendships = /* GraphQL */ `mutation DeleteFriendships(
  $input: DeleteFriendshipsInput!
  $condition: ModelFriendshipsConditionInput
) {
  deleteFriendships(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteFriendshipsMutationVariables,
  APITypes.DeleteFriendshipsMutation
>;
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
    groupsID
    createdAt
    updatedAt
    matchesMatchesId
    matchesRejectedMatchesId
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
    groupsID
    createdAt
    updatedAt
    matchesMatchesId
    matchesRejectedMatchesId
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
    groupsID
    createdAt
    updatedAt
    matchesMatchesId
    matchesRejectedMatchesId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteProfileMutationVariables,
  APITypes.DeleteProfileMutation
>;

