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
      get: getSingleShow(provider),
      getSeveral: getSeveralShows(provider),
      getAll: factory.forLimited(
        getSeveralShows(provider),
        getUsersSavedShowsLimit
      ),
    },
    Episodes: {
      get: getShowEpisodes(provider),
      getAll: factory.forPaginated(
        getShowEpisodes(provider),
        getShowEpisodesLimit
      ),
    },
    UsersSaved: {
      get: getUsersSavedShows(provider).bind(null, null),
      getAll: factory
        .forPaginated(getUsersSavedShows(provider), getUsersSavedShowsLimit)
        .bind(null, null),
      save: saveShowsForUser(provider),
      saveAll: factory.forLimited(
        saveShowsForUser(provider),
        saveShowsForUserLimit
      ),
      remove: removeUsersSavedShows(provider),
      removeAll: factory.forLimited(
        removeUsersSavedShows(provider),
        removeUsersSavedShowsLimit
      ),
      check: checkUsersSavedShows(provider),
      checkAll: factory.forLimited(
        checkUsersSavedShows(provider),
        checkUsersSavedShowsLimit
      ),
    },
  } as const;
}
