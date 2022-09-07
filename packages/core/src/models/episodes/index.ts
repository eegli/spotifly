import * as factory from '../../factory';
import { AsyncProvider } from '../../types';
import {
  checkUsersSavedEpisodes,
  getEpisode,
  getSeveralEpisodes,
  getUsersSavedEpisodes,
  removeUsersSavedEpisodes,
  saveEpisodesForUser,
  SEVERAL_EPISODES_LIMIT,
  USER_EPISODES_LIMIT,
} from './episodes';

export default function Episodes(provider: AsyncProvider) {
  return {
    /**
     * Get Spotify catalog information for a single episode identified by its unique Spotify ID.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-episode Get Episode}
     */
    getEpisode: getEpisode(provider),
    /**
     * Get Spotify catalog information for several episodes based on their Spotify IDs.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-multiple-episodes Get Several Episodes}
     */
    getSeveralEpisodes: getSeveralEpisodes(provider),
    /**
     * Get Spotify catalog information for several episodes based on their Spotify IDs.
     *
     * This method takes care of chunking the ids and making multiple requests to the Spotify API.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-multiple-episodes Get Several Episodes}
     */
    getAllEpisodes: factory.forLimited(
      getSeveralEpisodes(provider),
      SEVERAL_EPISODES_LIMIT
    ),
    beta: {
      /**
       * Get a list of the episodes saved in the current Spotify user's library.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-saved-episodes Get User's Saved Episodes}
       */
      getUsersSavedEpisodes: getUsersSavedEpisodes(provider).bind(null, null),
      /**
       * Get a list of the episodes saved in the current Spotify user's library.
       *
       * This method automatically handles pagination and fetches all items.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-saved-episodes Get User's Saved Episodes}
       */
      getAllUsersSavedEpisodes: factory
        .forPaginated(getUsersSavedEpisodes(provider), USER_EPISODES_LIMIT)
        .bind(null, null),
      /**
       * Save one or more episodes to the current user's library.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/save-episodes-user Save Episodes for User}
       */
      saveEpisodesForUser: saveEpisodesForUser(provider),
      /**
       * Save one or more episodes to the current user's library.
       *
       * This method takes care of chunking the ids and making multiple requests to the Spotify API.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/save-episodes-user Save Episodes for User}
       */
      saveAllEpisodesForUser: factory.forLimited(
        saveEpisodesForUser(provider),
        USER_EPISODES_LIMIT
      ),
      /**
       * Remove one or more episodes from the current user's library.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/remove-episodes-user Remove User's Saved Episodes}
       */
      removeUsersSavedEpisodes: removeUsersSavedEpisodes(provider),
      /**
       * Remove one or more episodes from the current user's library.
       *
       * This method takes care of chunking the ids and making multiple requests to the Spotify API.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/remove-episodes-user Remove User's Saved Episodes}
       */
      removeAllUsersSavedEpisodes: factory.forLimited(
        removeUsersSavedEpisodes(provider),
        USER_EPISODES_LIMIT
      ),

      /**
       * Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/check-users-saved-episodes Check User's Saved Episodes}
       */
      checkUsersSavedEpisodes: checkUsersSavedEpisodes(provider),
      /**
       * Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.
       *
       * This method takes care of chunking the ids and making multiple requests to the Spotify API.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/check-users-saved-episodes Check User's Saved Episodes}
       */
      checkAllUsersSavedEpisodes: factory.forLimited(
        checkUsersSavedEpisodes(provider),
        USER_EPISODES_LIMIT
      ),
    },
  };
}
