// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const FriendRequestStatus = {
  "PENDING": "PENDING",
  "ACCEPTED": "ACCEPTED",
  "REJECTED": "REJECTED"
};

const NotificationType = {
  "FRIEND_REQUEST": "FRIEND_REQUEST",
  "MESSAGE": "MESSAGE",
  "GROUP_INVITATION": "GROUP_INVITATION",
  "GROUP_MESSAGE": "GROUP_MESSAGE"
};

const RelationshipStatus = {
  "FRIEND": "FRIEND",
  "BLOCKED": "BLOCKED",
  "REMOVED": "REMOVED",
  "GROUP": "GROUP"
};

const { FriendRequest, Notification, Memberships, Groups, Matches, Friendships, Profile } = initSchema(schema);

export {
  FriendRequest,
  Notification,
  Memberships,
  Groups,
  Matches,
  Friendships,
  Profile,
  FriendRequestStatus,
  NotificationType,
  RelationshipStatus
};