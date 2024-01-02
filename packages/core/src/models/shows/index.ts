import * as factory from '../../factory';
import { AsyncProvider } from '../../types';
import {
  checkUsersSavedShows,
  getSeveralShows,
  getShow,
  getShowEpisodes,
  getUsersSavedShows,
  removeUsersSavedShows,
  saveShowsForUser,
  SEVERAL_SHOWS_LIMIT,
  SHOW_EPISODES_LIMIT,
  USER_SHOW_LIMIT,
} from './shows';

export default function Shows(provider: AsyncProvider) {
  return {
    /**
     * Get Spotify catalog information for a single show identified by its unique Spotify ID.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-a-show Get Show}
     */
    getShow: getShow(provider),
    /**
     * Get Spotify catalog information for several shows based on their Spotify IDs.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-multiple-shows Get Several Shows}
     */
    getSeveralShows: getSeveralShows(provider),
    /**
     * Get Spotify catalog information for several shows based on their Spotify IDs.
     *
     * This method takes care of chunking the ids and making multiple requests to the Spotify API.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-multiple-shows Get Several Shows}
     */
    getAllShows: factory.handleLimited(
      getSeveralShows(provider),
      SEVERAL_SHOWS_LIMIT,
    ),
    /**
     * Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-a-shows-episodes Get Show Episodes}
     */
    getShowEpisodes: getShowEpisodes(provider),
    /**
     * Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.
     *
     * This method automatically handles pagination and fetches all items.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-a-shows-episodes Get Show Episodes}
     */
    getAllShowEpisodes: factory.resolveOffsetPaginated(
      getShowEpisodes(provider),
      SHOW_EPISODES_LIMIT,
    ),
    /**
     * Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-saved-shows Get User's Saved Shows}
     */
    getUsersSavedShows: getUsersSavedShows(provider).bind(null, null),
    /**
     * Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.
     *
     * This method automatically handles pagination and fetches all items.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-saved-shows Get User's Saved Shows}
     */
    getAllUsersSavedShows: factory
      .resolveOffsetPaginated(getUsersSavedShows(provider), USER_SHOW_LIMIT)
      .bind(null, null),
    /**
     * Save one or more shows to current Spotify user's library.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/save-shows-user Save Shows for Current User}
     */
    saveShowsForUser: saveShowsForUser(provider),
    /**
     * Save one or more shows to current Spotify user's library.
     *
     * This method takes care of chunking the ids and making multiple requests to the Spotify API.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/save-shows-user Save Shows for Current User}
     */
    saveAllShowsForUser: factory.handleLimited(
      saveShowsForUser(provider),
      USER_SHOW_LIMIT,
    ),
    /**
     * Delete one or more shows from current Spotify user's library.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/remove-shows-user Remove User's Saved Shows}
     */
    removeUsersSavedShows: removeUsersSavedShows(provider),
    /**
     * Delete one or more shows from current Spotify user's library.
     *
     * This method takes care of chunking the ids and making multiple requests to the Spotify API.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-multiple-shows Remove User's Saved Shows}
     */
    removeAllUsersSavedShows: factory.handleLimited(
      removeUsersSavedShows(provider),
      USER_SHOW_LIMIT,
    ),
    /**
     * Check if one or more shows is already saved in the current Spotify user's library.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/check-users-saved-shows Check User's Saved Shows}
     */
    checkUsersSavedShows: checkUsersSavedShows(provider),
    /**
     * Check if one or more shows is already saved in the current Spotify user's library.
     *
     * This method takes care of chunking the ids and making multiple requests to the Spotify API.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/check-users-saved-shows Check User's Saved Shows}
     */
    checkAllUsersSavedShows: factory.handleLimited(
      checkUsersSavedShows(provider),
      USER_SHOW_LIMIT,
    ),
  };
}
