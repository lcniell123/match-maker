import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum FriendRequestStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED"
}

export enum NotificationType {
  FRIEND_REQUEST = "FRIEND_REQUEST",
  MESSAGE = "MESSAGE",
  GROUP_INVITATION = "GROUP_INVITATION",
  GROUP_MESSAGE = "GROUP_MESSAGE"
}

export enum RelationshipStatus {
  FRIEND = "FRIEND",
  BLOCKED = "BLOCKED",
  REMOVED = "REMOVED",
  GROUP = "GROUP"
}



type EagerFriendRequest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FriendRequest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly status?: FriendRequestStatus | keyof typeof FriendRequestStatus | null;
  readonly sender?: Profile | null;
  readonly receiver?: Profile | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly friendRequestSenderId?: string | null;
  readonly friendRequestReceiverId?: string | null;
}

type LazyFriendRequest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FriendRequest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly status?: FriendRequestStatus | keyof typeof FriendRequestStatus | null;
  readonly sender: AsyncItem<Profile | undefined>;
  readonly receiver: AsyncItem<Profile | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly friendRequestSenderId?: string | null;
  readonly friendRequestReceiverId?: string | null;
}

export declare type FriendRequest = LazyLoading extends LazyLoadingDisabled ? EagerFriendRequest : LazyFriendRequest

export declare const FriendRequest: (new (init: ModelInit<FriendRequest>) => FriendRequest) & {
  copyOf(source: FriendRequest, mutator: (draft: MutableModel<FriendRequest>) => MutableModel<FriendRequest> | void): FriendRequest;
}

type EagerNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: NotificationType | keyof typeof NotificationType | null;
  readonly content: string;
  readonly read?: boolean | null;
  readonly target?: Profile | null;
  readonly originator?: Profile | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly notificationTargetId?: string | null;
  readonly notificationOriginatorId?: string | null;
}

type LazyNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: NotificationType | keyof typeof NotificationType | null;
  readonly content: string;
  readonly read?: boolean | null;
  readonly target: AsyncItem<Profile | undefined>;
  readonly originator: AsyncItem<Profile | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly notificationTargetId?: string | null;
  readonly notificationOriginatorId?: string | null;
}

export declare type Notification = LazyLoading extends LazyLoadingDisabled ? EagerNotification : LazyNotification

export declare const Notification: (new (init: ModelInit<Notification>) => Notification) & {
  copyOf(source: Notification, mutator: (draft: MutableModel<Notification>) => MutableModel<Notification> | void): Notification;
}

type EagerMemberships = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Memberships, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly group?: Groups | null;
  readonly user?: Profile | null;
  readonly status?: RelationshipStatus | keyof typeof RelationshipStatus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly membershipsGroupId?: string | null;
  readonly membershipsUserId?: string | null;
}

type LazyMemberships = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Memberships, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly group: AsyncItem<Groups | undefined>;
  readonly user: AsyncItem<Profile | undefined>;
  readonly status?: RelationshipStatus | keyof typeof RelationshipStatus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly membershipsGroupId?: string | null;
  readonly membershipsUserId?: string | null;
}

export declare type Memberships = LazyLoading extends LazyLoadingDisabled ? EagerMemberships : LazyMemberships

export declare const Memberships: (new (init: ModelInit<Memberships>) => Memberships) & {
  copyOf(source: Memberships, mutator: (draft: MutableModel<Memberships>) => MutableModel<Memberships> | void): Memberships;
}

type EagerGroups = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Groups, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description?: string | null;
  readonly name: string;
  readonly image?: string | null;
  readonly createdBy?: Profile | null;
  readonly members?: (Profile | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly groupsCreatedById?: string | null;
}

type LazyGroups = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Groups, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description?: string | null;
  readonly name: string;
  readonly image?: string | null;
  readonly createdBy: AsyncItem<Profile | undefined>;
  readonly members: AsyncCollection<Profile>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly groupsCreatedById?: string | null;
}

export declare type Groups = LazyLoading extends LazyLoadingDisabled ? EagerGroups : LazyGroups

export declare const Groups: (new (init: ModelInit<Groups>) => Groups) & {
  copyOf(source: Groups, mutator: (draft: MutableModel<Groups>) => MutableModel<Groups> | void): Groups;
}

type EagerMatches = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Matches, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: Profile | null;
  readonly matches?: (Profile | null)[] | null;
  readonly rejectedMatches?: (Profile | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly matchesUserId?: string | null;
}

type LazyMatches = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Matches, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: AsyncItem<Profile | undefined>;
  readonly matches: AsyncCollection<Profile>;
  readonly rejectedMatches: AsyncCollection<Profile>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly matchesUserId?: string | null;
}

export declare type Matches = LazyLoading extends LazyLoadingDisabled ? EagerMatches : LazyMatches

export declare const Matches: (new (init: ModelInit<Matches>) => Matches) & {
  copyOf(source: Matches, mutator: (draft: MutableModel<Matches>) => MutableModel<Matches> | void): Matches;
}

type EagerFriendships = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Friendships, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly friendshipStatus?: RelationshipStatus | keyof typeof RelationshipStatus | null;
  readonly updatedBy?: string | null;
  readonly firstUser?: Profile | null;
  readonly secondUser?: Profile | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly friendshipsFirstUserId?: string | null;
  readonly friendshipsSecondUserId?: string | null;
}

type LazyFriendships = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Friendships, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly friendshipStatus?: RelationshipStatus | keyof typeof RelationshipStatus | null;
  readonly updatedBy?: string | null;
  readonly firstUser: AsyncItem<Profile | undefined>;
  readonly secondUser: AsyncItem<Profile | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly friendshipsFirstUserId?: string | null;
  readonly friendshipsSecondUserId?: string | null;
}

export declare type Friendships = LazyLoading extends LazyLoadingDisabled ? EagerFriendships : LazyFriendships

export declare const Friendships: (new (init: ModelInit<Friendships>) => Friendships) & {
  copyOf(source: Friendships, mutator: (draft: MutableModel<Friendships>) => MutableModel<Friendships> | void): Friendships;
}

type EagerProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly languages?: string | null;
  readonly zipCode?: string | null;
  readonly gamePreference?: string | null;
  readonly behaviour?: string | null;
  readonly username?: string | null;
  readonly bio?: string | null;
  readonly photo?: string | null;
  readonly coverPhoto?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly age?: number | null;
  readonly country?: string | null;
  readonly timeZone?: string | null;
  readonly city?: string | null;
  readonly region?: string | null;
  readonly postalCode?: string | null;
  readonly language?: string | null;
  readonly favoriteGame?: string | null;
  readonly preferredGenre?: string | null;
  readonly timeAvailability?: string | null;
  readonly preferredTeammateAgeRange?: string | null;
  readonly skillLevel?: string | null;
  readonly preferredGameMode?: string | null;
  readonly preferredRole?: string | null;
  readonly playStyle?: string | null;
  readonly flexibility?: boolean | null;
  readonly behavior?: string | null;
  readonly communicationPreference?: string | null;
  readonly toleranceLevel?: string | null;
  readonly teamworkLevel?: string | null;
  readonly competitivenessLevel?: string | null;
  readonly groupsID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly matchesMatchesId?: string | null;
  readonly matchesRejectedMatchesId?: string | null;
}

type LazyProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly languages?: string | null;
  readonly zipCode?: string | null;
  readonly gamePreference?: string | null;
  readonly behaviour?: string | null;
  readonly username?: string | null;
  readonly bio?: string | null;
  readonly photo?: string | null;
  readonly coverPhoto?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly age?: number | null;
  readonly country?: string | null;
  readonly timeZone?: string | null;
  readonly city?: string | null;
  readonly region?: string | null;
  readonly postalCode?: string | null;
  readonly language?: string | null;
  readonly favoriteGame?: string | null;
  readonly preferredGenre?: string | null;
  readonly timeAvailability?: string | null;
  readonly preferredTeammateAgeRange?: string | null;
  readonly skillLevel?: string | null;
  readonly preferredGameMode?: string | null;
  readonly preferredRole?: string | null;
  readonly playStyle?: string | null;
  readonly flexibility?: boolean | null;
  readonly behavior?: string | null;
  readonly communicationPreference?: string | null;
  readonly toleranceLevel?: string | null;
  readonly teamworkLevel?: string | null;
  readonly competitivenessLevel?: string | null;
  readonly groupsID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly matchesMatchesId?: string | null;
  readonly matchesRejectedMatchesId?: string | null;
}

export declare type Profile = LazyLoading extends LazyLoadingDisabled ? EagerProfile : LazyProfile

export declare const Profile: (new (init: ModelInit<Profile>) => Profile) & {
  copyOf(source: Profile, mutator: (draft: MutableModel<Profile>) => MutableModel<Profile> | void): Profile;
}