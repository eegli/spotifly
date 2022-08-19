import * as factory from '../../factory';
import { AsyncProvider } from '../../types';
import {
  checkUsersSavedEpisodes,
  getSeveralEpisodes,
  getSeveralEpisodesLimit,
  getSingleEpisode,
  getUsersSavedEpisodes,
  removeUsersSavedEpisodes,
  saveEpisodesForUser,
  userEpisodesLimit,
} from './episodes';

export default function Episodes(provider: AsyncProvider) {
  return {
    Episode: {
      /**
       * Get Spotify catalog information for a single episode identified by its unique Spotify ID.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-episode Get Episode}
       */
      get: getSingleEpisode(provider),
      /**
       * Get Spotify catalog information for several episodes based on their Spotify IDs.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-multiple-episodes Get Several Episodes}
       */
      getSeveral: getSeveralEpisodes(provider),
      /**
       * Get Spotify catalog information for several episodes based on their Spotify IDs.
       *
       * This method takes care of chunking the ids and making multiple requests to the Spotify API.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-multiple-episodes Get Several Episodes}
       */
      getAll: factory.forLimited(
        getSeveralEpisodes(provider),
        getSeveralEpisodesLimit
      ),
    },
    UsersSaved: {
      /**
       * Get a list of the episodes saved in the current Spotify user's library.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-saved-episodes Get User's Saved Episodes}
       */
      get: getUsersSavedEpisodes(provider).bind(null, null),
      /**
       * Get a list of the episodes saved in the current Spotify user's library.
       *
       * This method automatically handles pagination and fetches all items.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-saved-episodes Get User's Saved Episodes}
       */
      getAll: factory
        .forPaginated(getUsersSavedEpisodes(provider), userEpisodesLimit)
        .bind(null, null),
      save: saveEpisodesForUser(provider),
      saveAll: factory.forLimited(
        saveEpisodesForUser(provider),
        userEpisodesLimit
      ),
      remove: removeUsersSavedEpisodes(provider),
      removeAll: factory.forLimited(
        removeUsersSavedEpisodes(provider),
        userEpisodesLimit
      ),
      check: checkUsersSavedEpisodes(provider),
      checkAll: factory.forLimited(
        checkUsersSavedEpisodes(provider),
        userEpisodesLimit
      ),
    },
  } as const;
}
