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
      /**
       * Get detailed profile information about the current user (including the current user's username).
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-current-users-profile Get Current User's Profile}
       */
      get: getCurrentUsersProfile(provider).bind(null, null),
    },
    TopArtists: {
      /**
       * Get the current user's top artists based on calculated affinity.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-top-artists-and-tracks Get User's Top Items}
       */
      get: getUsersTopArtists(provider).bind(null, null),
      /**
       * Get the current user's top artists based on calculated affinity.
       *
       * This method automatically handles pagination and fetches all items.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-top-artists-and-tracks Get User's Top Items}
       */
      getAll: factory
        .forPaginated(getUsersTopArtists(provider), USERS_TOP_LIMIT)
        .bind(null, null),
    },
    TopTracks: {
      /**
       * Get the current user's top tracks based on calculated affinity.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-top-artists-and-tracks Get User's Top Items}
       */
      get: getUsersTopTracks(provider).bind(null, null),
      /**
       * Get the current user's top tracks based on calculated affinity.
       *
       * This method automatically handles pagination and fetches all items.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-top-artists-and-tracks Get User's Top Items}
       */
      getAll: factory
        .forPaginated(getUsersTopTracks(provider), USERS_TOP_LIMIT)
        .bind(null, null),
    },
    Profile: {
      /**
       * Get public profile information about a Spotify user.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-profile Get User's Profile}
       */
      get: getUsersProfile(provider),
    },
    Follow: {
      /**
       * Add the current user as a follower of a playlist.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/follow-playlist Follow Playlist}
       */
      playlist: followPlaylist(provider),
      /**
       * Add the current user as a follower of one or more artists.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/follow-artists-users Follow Artists or Users}
       */
      artists: followArtists(provider),
      /**
       * Add the current user as a follower of one or more artists.
       *
       * This method takes care of chunking the ids and making multiple requests to the Spotify API.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/follow-artists-users Follow Artists or Users}
       */
      allArtists: factory.forLimited(followArtists(provider), FOLLOW_LIMIT),
      /**
       * Add the current user as a follower of one or more other Spotify users.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/follow-artists-users Follow Artists or Users}
       */
      users: followUsers(provider),
      /**
       * Add the current user as a follower of one or more other Spotify users.
       *
       * This method takes care of chunking the ids and making multiple requests to the Spotify API.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/follow-artists-users Follow Artists or Users}
       */
      allUsers: factory.forLimited(followUsers(provider), FOLLOW_LIMIT),
    },
    Unfollow: {
      /**
       * Remove the current user as a follower of a playlist.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/unfollow-playlist Unfollow Playlist}
       */
      playlist: unfollowPlaylist(provider),
      /**
       * Remove the current user as a follower of one or more artists.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/unfollow-artists-users Unfollow Artists or Users}
       */
      artists: unfollowArtists(provider),
      /**
       * Remove the current user as a follower of one or more artists.
       *
       * This method takes care of chunking the ids and making multiple requests to the Spotify API.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/unfollow-artists-users Unfollow Artists or Users}
       */
      allArtists: factory.forLimited(unfollowArtists(provider), FOLLOW_LIMIT),
      /**
       * Remove the current user as a follower of one or more other Spotify users.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/unfollow-artists-users Unfollow Artists or Users}
       */
      users: unfollowUsers(provider),
      /**
       * Remove the current user as a follower of one or more other Spotify users.
       *
       * This method takes care of chunking the ids and making multiple requests to the Spotify API.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/unfollow-artists-users Unfollow Artists or Users}
       */
      allUsers: factory.forLimited(unfollowUsers(provider), FOLLOW_LIMIT),
    },
    FollowedArtists: {
      // TODO factory for cursor based
      /**
       * Get the current user's followed artists.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-followed Get Followed Artists}
       */
      get: getUsersFollowedArtists(provider).bind(null, null),
    },
    CheckFollows: {
      /**
       * Check to see if the current user is following one or more artists.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/check-current-user-follows Check If User Follows Artists or Users}
       */
      artists: checkUserFollowsArtist(provider),
      /**
       * Check to see if the current user is following one or more artists.
       *
       * This method takes care of chunking the ids and making multiple requests to the Spotify API.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/check-current-user-follows Check If User Follows Artists or Users}
       */
      allArtists: factory.forLimited(
        checkUserFollowsArtist(provider),
        FOLLOW_LIMIT
      ),
      /**
       * Check to see if the current user is following one or more other Spotify users.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/check-current-user-follows Check If User Follows Artists or Users}
       */
      users: checkUserFollowsUsers(provider),
      /**
       * Check to see if the current user is following one or more other Spotify users.
       *
       * This method takes care of chunking the ids and making multiple requests to the Spotify API.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/check-current-user-follows Check If User Follows Artists or Users}
       */
      allUsers: factory.forLimited(
        checkUserFollowsUsers(provider),
        FOLLOW_LIMIT
      ),
      /**
       * Check to see if one or more Spotify users are following a specified playlist.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/check-if-user-follows-playlist Check if Users Follow Playlist}
       */
      playlist: checkUsersFollowPlaylists(provider),
    },
  } as const;
}
