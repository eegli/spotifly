import * as factory from '../../factory';
import { AsyncProvider } from '../../types';
import {
  addPlaylistItems,
  changePlaylis,
  createPlaylist,
  getCategoryPlaylists,
  getCurrentUsersPlaylists,
  getFeaturedPlaylists,
  getPlaylist,
  getPlaylistCoverImage,
  getPlaylistItems,
  getUsersPlaylists,
  PLAYLIST_ITEMS_LIMIT,
  removePlaylistItems,
  reorderPlaylistItems,
  uploadCustomPlaylistCoverImage,
  USERS_PLAYLISTS_LIMIT,
} from './playlists';

export default function Playlists(provider: AsyncProvider) {
  return {
    /**
     * Get a playlist owned by a Spotify user.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-playlist Get Playlist}
     */
    getPlaylist: getPlaylist(provider),
    /**
     * Change a playlist's name and public/private state. (The user must, of course, own the playlist.)
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/change-playlist-details Change Playlist Details}
     */
    changePlaylist: changePlaylis(provider),
    /**
     * Get full details of the items of a playlist owned by a Spotify user.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-playlists-tracks Get Playlist Items}
     */
    getPlaylistItems: getPlaylistItems(provider),
    /**
     * Get full details of the items of a playlist owned by a Spotify user.
     *
     * This method automatically handles pagination and fetches all items.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-playlists-tracks Get Playlist Items}
     */
    getAllPlaylistItems: factory.resolveOffsetPaginated(
      getPlaylistItems(provider),
      PLAYLIST_ITEMS_LIMIT,
    ),
    /**
     * Add one or more items to a user's playlist.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/add-tracks-to-playlist Add Items to Playlist}
     */
    addPlaylistItems: addPlaylistItems(provider),
    /**
     * Reorder items in a playlist.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/reorder-or-replace-playlists-tracks Update Playlist Items}
     */
    reorderPlaylistItems: reorderPlaylistItems(provider),
    /**
     * Remove one or more items from a user's playlist.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/remove-tracks-playlist Remove Playlist Items}
     */
    removePlaylistItems: removePlaylistItems(provider),
    /**
     * Get a list of the playlists owned or followed by the current Spotify user.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-a-list-of-current-users-playlists Get Current User's Playlists}
     */
    getCurrentUsersPlaylists: getCurrentUsersPlaylists(provider).bind(
      null,
      null,
    ),
    /**
     * Get a list of the playlists owned or followed by the current Spotify user.
     *
     * This method automatically handles pagination and fetches all items.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-a-list-of-current-users-playlists Get Current User's Playlists}
     */
    getAllCurrentUsersPlaylists: factory
      .resolveOffsetPaginated(
        getCurrentUsersPlaylists(provider),
        USERS_PLAYLISTS_LIMIT,
      )
      .bind(null, null),
    /**
     * Get a list of the playlists owned or followed by a Spotify user.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-list-users-playlists Get User's Playlists}
     */
    getUsersPlaylists: getUsersPlaylists(provider),
    /**
     * Get a list of the playlists owned or followed by a Spotify user.
     *
     * This method automatically handles pagination and fetches all items.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-list-users-playlists Get User's Playlists}
     */
    getAllUsersPlaylists: factory.resolveOffsetPaginated(
      getUsersPlaylists(provider),
      USERS_PLAYLISTS_LIMIT,
    ),
    /**
     * Create a playlist for a Spotify user. (The playlist will be empty until you add tracks.)
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/create-playlist Create Playlist}
     */
    createPlaylist: createPlaylist(provider),
    /**
     * Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab).
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-featured-playlists Get Featured Playlists}
     */
    getFeaturedPlaylists: getFeaturedPlaylists(provider).bind(null, null),
    /**
     * Get a list of Spotify playlists tagged with a particular category.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-a-categories-playlists Get Category's Playlists}
     */
    getCategoryPlaylists: getCategoryPlaylists(provider),
    /**
     * Get the current image associated with a specific playlist.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-playlist-cover Get Playlist Cover Image}
     */
    getPlaylistCoverImage: getPlaylistCoverImage(provider),
    /**
     * Replace the image used to represent a specific playlist.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/upload-custom-playlist-cover Add Custom Playlist Cover Image}
     */
    uploadCustomPlaylistCoverImage: uploadCustomPlaylistCoverImage(provider),
  };
}
