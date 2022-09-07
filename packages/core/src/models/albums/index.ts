import * as factory from '../../factory';
import { AsyncProvider } from '../../types';
import {
  checkUsersSavedAlbums,
  getAlbum,
  getAlbumTracks,
  getNewAlbumReleases,
  getSeveralAlbums,
  getUsersSavedAlbums,
  LIMIT_ALBUM_TRACKS,
  LIMIT_SEVERAL_ALBUMS,
  LIMIT_USER_ALBUMS_GET,
  LIMIT_USER_ALBUMS_MODIFY_CHECK,
  removeUsersSavedAlbums,
  saveAlbumsForUser,
} from './albums';

export default function Albums(provider: AsyncProvider) {
  return {
    /**
     * Get Spotify catalog information for a single album.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-album Get Album}
     */
    getAlbum: getAlbum(provider),
    /**
     * Get Spotify catalog information for multiple albums identified by their Spotify IDs.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-multiple-albums Get Several Albums}
     */
    getSeveralAlbums: getSeveralAlbums(provider),
    /**
     * Get Spotify catalog information for multiple albums identified by their Spotify IDs.
     *
     * This method takes care of chunking the ids and making multiple requests to the Spotify API.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-multiple-albums Get Several Albums}
     */
    getAllAlbums: factory.handleLimited(
      getSeveralAlbums(provider),
      LIMIT_SEVERAL_ALBUMS
    ),
    /**
     * Get Spotify catalog information about an album’s tracks. Optional parameters can be used to limit the number of tracks returned.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-albums-tracks Get Album Tracks}
     */
    getAlbumTracks: getAlbumTracks(provider),
    /**
     * Get Spotify catalog information about an album’s tracks. Optional parameters can be used to limit the number of tracks returned.
     *
     * This method automatically handles pagination and fetches all items.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-albums-tracks Get Album Tracks}
     */
    getAllAlbumTracks: factory.resolveOffsetPaginated(
      getAlbumTracks(provider),
      LIMIT_ALBUM_TRACKS
    ),
    /**
     * Get a list of the albums saved in the current Spotify user's 'Your Music' library.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-saved-albums Get Saved Albums}
     */
    getUsersSavedAlbums: getUsersSavedAlbums(provider).bind(null, null),
    /**
     * Get a list of the albums saved in the current Spotify user's 'Your Music' library.
     *
     * This method automatically handles pagination and fetches all items.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-saved-albums Get Saved Albums}
     */
    getAllUsersSavedAlbums: factory
      .resolveOffsetPaginated(
        getUsersSavedAlbums(provider),
        LIMIT_USER_ALBUMS_GET
      )
      .bind(null, null),
    /**
     * Save one or more albums to the current user's 'Your Music' library.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/save-albums-user Save Albums}
     */
    saveAlbumsForUser: saveAlbumsForUser(provider),
    /**
     * Save one or more albums to the current user's 'Your Music' library.
     *
     * This method takes care of chunking the ids and making multiple requests to the Spotify API.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/save-albums-user Save Albums}
     */
    saveAllAlbumsForUser: factory.handleLimited(
      saveAlbumsForUser(provider),
      LIMIT_USER_ALBUMS_MODIFY_CHECK
    ),
    /**
     * Remove one or more albums from the current user's 'Your Music' library.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/remove-albums-user Remove Albums}
     */
    removeUsersSavedAlbums: removeUsersSavedAlbums(provider),
    /**
     * Remove one or more albums from the current user's 'Your Music' library.
     *
     * This method takes care of chunking the ids and making multiple requests to the Spotify API.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/remove-albums-user Remove Albums}
     */
    removeAllUsersSavedAlbums: factory.handleLimited(
      removeUsersSavedAlbums(provider),
      LIMIT_USER_ALBUMS_MODIFY_CHECK
    ),
    /**
     * Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/check-users-saved-albums Check Saved Albums}
     */
    checkUsersSavedAlbums: checkUsersSavedAlbums(provider),
    /**
     * Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.
     *
     * This method takes care of chunking the ids and making multiple requests to the Spotify API.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/check-users-saved-albums Check Saved Albums}
     */
    checkAllUsersSavedAlbums: factory.handleLimited(
      checkUsersSavedAlbums(provider),
      LIMIT_USER_ALBUMS_MODIFY_CHECK
    ),
    /**
     * Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-new-releases Get New Releases}
     */
    getNewAlbumReleases: getNewAlbumReleases(provider).bind(null, null),
  };
}
