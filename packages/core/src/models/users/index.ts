import * as factory from '../../factory';
import { AsyncProvider } from '../../types';
import {
  checkFollowsArtists,
  checkFollowsUsers,
  checkUsersFollowPlaylist,
  followArtists,
  followPlaylist,
  followUsers,
  FOLLOW_LIMIT,
  getCurrentUsersProfile,
  getFollowedArtists,
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
    /**
     * Get detailed profile information about the current user (including the current user's username).
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-current-users-profile Get Current User's Profile}
     */
    getCurrentUsersProfile: getCurrentUsersProfile(provider).bind(null, null),
    /**
     * Get the current user's top artists based on calculated affinity.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-top-artists-and-tracks Get User's Top Items}
     */
    getUsersTopArtists: getUsersTopArtists(provider).bind(null, null),
    /**
     * Get the current user's top artists based on calculated affinity.
     *
     * This method automatically handles pagination and fetches all items.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-top-artists-and-tracks Get User's Top Items}
     */
    getAllUsersTopArtists: factory
      .forPaginated(getUsersTopArtists(provider), USERS_TOP_LIMIT)
      .bind(null, null),
    /**
     * Get the current user's top tracks based on calculated affinity.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-top-artists-and-tracks Get User's Top Items}
     */
    getUsersTopTracks: getUsersTopTracks(provider).bind(null, null),
    /**
     * Get the current user's top tracks based on calculated affinity.
     *
     * This method automatically handles pagination and fetches all items.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-top-artists-and-tracks Get User's Top Items}
     */
    getAllUsersTopTracks: factory
      .forPaginated(getUsersTopTracks(provider), USERS_TOP_LIMIT)
      .bind(null, null),
    /**
     * Get public profile information about a Spotify user.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-profile Get User's Profile}
     */
    getUsersProfile: getUsersProfile(provider),
    /**
     * Add the current user as a follower of a playlist.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/follow-playlist Follow Playlist}
     */
    followPlaylist: followPlaylist(provider),
    /**
     * Add the current user as a follower of one or more artists.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/follow-artists-users Follow Artists or Users}
     */
    followArtists: followArtists(provider),
    /**
     * Add the current user as a follower of one or more artists.
     *
     * This method takes care of chunking the ids and making multiple requests to the Spotify API.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/follow-artists-users Follow Artists or Users}
     */
    followAllArtists: factory.forLimited(followArtists(provider), FOLLOW_LIMIT),
    /**
     * Add the current user as a follower of one or more other Spotify users.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/follow-artists-users Follow Artists or Users}
     */
    followUsers: followUsers(provider),
    /**
     * Add the current user as a follower of one or more other Spotify users.
     *
     * This method takes care of chunking the ids and making multiple requests to the Spotify API.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/follow-artists-users Follow Artists or Users}
     */
    followAllUsers: factory.forLimited(followUsers(provider), FOLLOW_LIMIT),
    /**
     * Remove the current user as a follower of a playlist.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/unfollow-playlist Unfollow Playlist}
     */
    unfollowPlaylist: unfollowPlaylist(provider),
    /**
     * Remove the current user as a follower of one or more artists.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/unfollow-artists-users Unfollow Artists or Users}
     */
    unfollowArtists: unfollowArtists(provider),
    /**
     * Remove the current user as a follower of one or more artists.
     *
     * This method takes care of chunking the ids and making multiple requests to the Spotify API.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/unfollow-artists-users Unfollow Artists or Users}
     */
    unfollowAllArtists: factory.forLimited(
      unfollowArtists(provider),
      FOLLOW_LIMIT
    ),
    /**
     * Remove the current user as a follower of one or more other Spotify users.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/unfollow-artists-users Unfollow Artists or Users}
     */
    unfollowUsers: unfollowUsers(provider),
    /**
     * Remove the current user as a follower of one or more other Spotify users.
     *
     * This method takes care of chunking the ids and making multiple requests to the Spotify API.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/unfollow-artists-users Unfollow Artists or Users}
     */
    unfollowAllUsers: factory.forLimited(unfollowUsers(provider), FOLLOW_LIMIT),
    // TODO factory for cursor based
    /**
     * Get the current user's followed artists.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-followed Get Followed Artists}
     */
    getFollowedArtists: getFollowedArtists(provider).bind(null, null),
    /**
     * Check to see if the current user is following one or more artists.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/check-current-user-follows Check If User Follows Artists or Users}
     */
    checkFollowsArtists: checkFollowsArtists(provider),
    /**
     * Check to see if the current user is following one or more artists.
     *
     * This method takes care of chunking the ids and making multiple requests to the Spotify API.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/check-current-user-follows Check If User Follows Artists or Users}
     */
    checkFollowsAllArtists: factory.forLimited(
      checkFollowsArtists(provider),
      FOLLOW_LIMIT
    ),
    /**
     * Check to see if the current user is following one or more other Spotify users.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/check-current-user-follows Check If User Follows Artists or Users}
     */
    checkFollowsUsers: checkFollowsUsers(provider),
    /**
     * Check to see if the current user is following one or more other Spotify users.
     *
     * This method takes care of chunking the ids and making multiple requests to the Spotify API.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/check-current-user-follows Check If User Follows Artists or Users}
     */
    checkFollowsAllUsers: factory.forLimited(
      checkFollowsUsers(provider),
      FOLLOW_LIMIT
    ),
    /**
     * Check to see if one or more Spotify users are following a specified playlist.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/check-if-user-follows-playlist Check if Users Follow Playlist}
     */
    checkUsersFollowPlaylist: checkUsersFollowPlaylist(provider),
  };
}
