import * as factory from '../../factory';
import { AsyncProvider } from '../../types';
import {
  checkUserFollowsArtist,
  checkUserFollowsUsers,
  checkUsersFollowPlaylists,
  followArtists,
  followPlaylist,
  followUsers,
  FOLLOW_LIMIT,
  getCurrentUsersProfile,
  getUsersFollowedArtists,
  getUsersProfile,
  getUsersTopArtists,
  getUsersTopTracks,
  unfollowArtists,
  unfollowPlaylist,
  unfollowUsers,
  USERS_TOP_LIMIT,
} from './users';

export default function Users(provider: AsyncProvider) {
  return {
    OwnProfile: {
      get: getCurrentUsersProfile(provider).bind(null, null),
    },
    Profile: {
      get: getUsersProfile(provider),
    },
    CheckFollows: {
      artists: checkUserFollowsArtist(provider),
      allArtists: factory.forLimited(
        checkUserFollowsArtist(provider),
        FOLLOW_LIMIT
      ),
      users: checkUserFollowsUsers(provider),
      allUsers: factory.forLimited(
        checkUserFollowsUsers(provider),
        FOLLOW_LIMIT
      ),
      playlist: checkUsersFollowPlaylists(provider),
    },
    Follow: {
      artists: followArtists(provider),
      allArtists: factory.forLimited(followArtists(provider), FOLLOW_LIMIT),
      users: followUsers(provider),
      allUsers: factory.forLimited(followUsers(provider), FOLLOW_LIMIT),
      playlist: followPlaylist(provider),
    },
    Unfollow: {
      artists: unfollowArtists(provider),
      allArtists: factory.forLimited(unfollowArtists(provider), FOLLOW_LIMIT),
      users: unfollowUsers(provider),
      allUsers: factory.forLimited(unfollowUsers(provider), FOLLOW_LIMIT),
      playlist: unfollowPlaylist(provider),
    },
    FollowedArtists: {
      // TODO factory for cursor based
      get: getUsersFollowedArtists(provider).bind(null, null),
    },
    TopArtists: {
      get: getUsersTopArtists(provider).bind(null, null),
      getAll: factory
        .forPaginated(getUsersTopArtists(provider), USERS_TOP_LIMIT)
        .bind(null, null),
    },
    TopTracks: {
      get: getUsersTopTracks(provider).bind(null, null),
      getAll: factory
        .forPaginated(getUsersTopTracks(provider), USERS_TOP_LIMIT)
        .bind(null, null),
    },
  } as const;
}
