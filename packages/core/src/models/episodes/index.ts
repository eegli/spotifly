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
      get: getSingleEpisode(provider),
      getSeveral: getSeveralEpisodes(provider),
      getAll: factory.forLimited(
        getSeveralEpisodes(provider),
        getSeveralEpisodesLimit
      ),
    },
    UsersSaved: {
      get: getUsersSavedEpisodes(provider).bind(null, null),
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
