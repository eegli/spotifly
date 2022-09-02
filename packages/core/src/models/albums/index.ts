import * as factory from '../../factory';
import { AsyncProvider } from '../../types';
import {
  checkUsersSavedAlbums,
  getAlbum,
  getAlbumTracks,
  getNewAlbumReleases,
  getSeveralAlbums,
  getUsersSavedAlbums,
  LIMIT_GET_ALBUM_TRACKS,
  LIMIT_GET_SEVERAL_ALBUMS,
  LIMIT_GET_USER_ALBUMS,
  LIMIT_MODIFY_CHECK_USER_ALBUMS,
  removeUsersSavedAlbums,
  saveAlbumsForUser,
} from './albums';

export default function Albums(provider: AsyncProvider) {
  return {
    Album: {
      /**
       * Get Spotify catalog information for a single album.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-album Get Album}
       */
      get: getAlbum(provider),
      /**
       * Get Spotify catalog information for multiple albums identified by their Spotify IDs.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-multiple-albums Get Several Albums}
       */
      getSeveral: getSeveralAlbums(provider),
      /**
       * Get Spotify catalog information for multiple albums identified by their Spotify IDs.
       *
       * This method takes care of chunking the ids and making multiple requests to the Spotify API.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-multiple-albums Get Several Albums}
       */
      getAll: factory.forLimited(
        getSeveralAlbums(provider),
        LIMIT_GET_SEVERAL_ALBUMS
      ),
    },
    Tracks: {
      /**
       * Get Spotify catalog information about an album’s tracks. Optional parameters can be used to limit the number of tracks returned.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-albums-tracks Get Album Tracks}
       */
      get: getAlbumTracks(provider),
      /**
       * Get Spotify catalog information about an album’s tracks. Optional parameters can be used to limit the number of tracks returned.
       *
       * This method automatically handles pagination and fetches all items.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-albums-tracks Get Album Tracks}
       */
      getAll: factory.forPaginated(
        getAlbumTracks(provider),
        LIMIT_GET_ALBUM_TRACKS
      ),
    },
    UsersSaved: {
      /**
       * Get a list of the albums saved in the current Spotify user's 'Your Music' library.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-saved-albums Get Saved Albums}
       */
      get: getUsersSavedAlbums(provider).bind(null, null),
      /**
       * Get a list of the albums saved in the current Spotify user's 'Your Music' library.
       *
       * This method automatically handles pagination and fetches all items.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-saved-albums Get Saved Albums}
       */
      getAll: factory
        .forPaginated(getUsersSavedAlbums(provider), LIMIT_GET_USER_ALBUMS)
        .bind(null, null),
      /**
       * Save one or more albums to the current user's 'Your Music' library.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/save-albums-user Save Albums}
       */
      save: saveAlbumsForUser(provider),
      /**
       * Save one or more albums to the current user's 'Your Music' library.
       *
       * This method takes care of chunking the ids and making multiple requests to the Spotify API.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/save-albums-user Save Albums}
       */
      saveAll: factory.forLimited(
        saveAlbumsForUser(provider),
        LIMIT_MODIFY_CHECK_USER_ALBUMS
      ),
      /**
       * Remove one or more albums from the current user's 'Your Music' library.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/remove-albums-user Remove Albums}
       */
      remove: removeUsersSavedAlbums(provider),
      /**
       * Remove one or more albums from the current user's 'Your Music' library.
       *
       * This method takes care of chunking the ids and making multiple requests to the Spotify API.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/remove-albums-user Remove Albums}
       */
      removeAll: factory.forLimited(
        removeUsersSavedAlbums(provider),
        LIMIT_MODIFY_CHECK_USER_ALBUMS
      ),
      /**
       * Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/check-users-saved-albums Check Saved Albums}
       */
      check: checkUsersSavedAlbums(provider),
      /**
       * Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.
       *
       * This method takes care of chunking the ids and making multiple requests to the Spotify API.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/check-users-saved-albums Check Saved Albums}
       */
      checkAll: factory.forLimited(
        checkUsersSavedAlbums(provider),
        LIMIT_MODIFY_CHECK_USER_ALBUMS
      ),
    },
    NewReleases: {
      /**
       * Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-new-releases Get New Releases}
       */
      get: getNewAlbumReleases(provider).bind(null, null),
    },
  } as const;
}
