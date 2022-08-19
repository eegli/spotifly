import * as factory from '../../factory';
import { AsyncProvider } from '../../types';
import {
  checkUsersSavedShows,
  checkUsersSavedShowsLimit,
  getSeveralShows,
  getShowEpisodes,
  getShowEpisodesLimit,
  getSingleShow,
  getUsersSavedShows,
  getUsersSavedShowsLimit,
  removeUsersSavedShows,
  removeUsersSavedShowsLimit,
  saveShowsForUser,
  saveShowsForUserLimit,
} from './shows';

export default function Shows(provider: AsyncProvider) {
  return {
    Show: {
      /**
       * Get Spotify catalog information for a single show identified by its unique Spotify ID.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-a-show Get Show}
       */
      get: getSingleShow(provider),
      /**
       * Get Spotify catalog information for several shows based on their Spotify IDs.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-multiple-shows Get Several Shows}
       */
      getSeveral: getSeveralShows(provider),
      /**
       * Get Spotify catalog information for several shows based on their Spotify IDs.
       *
       * This method takes care of chunking the ids and making multiple requests to the Spotify API.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-multiple-shows Get Several Shows}
       */
      getAll: factory.forLimited(
        getSeveralShows(provider),
        getUsersSavedShowsLimit
      ),
    },
    Episodes: {
      /**
       * Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-a-shows-episodes Get Show Episodes}
       */
      get: getShowEpisodes(provider),
      /**
       * Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.
       *
       * This method automatically handles pagination and fetches all items.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-a-shows-episodes Get Show Episodes}
       */
      getAll: factory.forPaginated(
        getShowEpisodes(provider),
        getShowEpisodesLimit
      ),
    },
    UsersSaved: {
      /**
       * Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-saved-shows Get User's Saved Shows}
       */
      get: getUsersSavedShows(provider).bind(null, null),
      /**
       * Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.
       *
       * This method automatically handles pagination and fetches all items.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-saved-shows Get User's Saved Shows}
       */
      getAll: factory
        .forPaginated(getUsersSavedShows(provider), getUsersSavedShowsLimit)
        .bind(null, null),
      /**
       * Save one or more shows to current Spotify user's library.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/save-shows-user Save Shows for Current User}
       */
      save: saveShowsForUser(provider),
      /**
       * Save one or more shows to current Spotify user's library.
       *
       * This method takes care of chunking the ids and making multiple requests to the Spotify API.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/save-shows-user Save Shows for Current User}
       */
      saveAll: factory.forLimited(
        saveShowsForUser(provider),
        saveShowsForUserLimit
      ),
      /**
       * Delete one or more shows from current Spotify user's library.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/remove-shows-user Remove User's Saved Shows}
       */
      remove: removeUsersSavedShows(provider),
      /**
       * Delete one or more shows from current Spotify user's library.
       *
       * This method takes care of chunking the ids and making multiple requests to the Spotify API.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-multiple-shows Remove User's Saved Shows}
       */
      removeAll: factory.forLimited(
        removeUsersSavedShows(provider),
        removeUsersSavedShowsLimit
      ),
      /**
       * Check if one or more shows is already saved in the current Spotify user's library.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/check-users-saved-shows Check User's Saved Shows}
       */
      check: checkUsersSavedShows(provider),
      /**
       * Check if one or more shows is already saved in the current Spotify user's library.
       *
       * This method takes care of chunking the ids and making multiple requests to the Spotify API.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/check-users-saved-shows Check User's Saved Shows}
       */
      checkAll: factory.forLimited(
        checkUsersSavedShows(provider),
        checkUsersSavedShowsLimit
      ),
    },
  } as const;
}
