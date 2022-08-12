import * as factory from '../../factory';
import { AsyncProvider } from '../../types';
import {
  checkUsersSavedAlbums,
  checkUsersSavedAlbumsLimit,
  getAlbumTracks,
  getAlbumTracksLimit,
  getNewAlbumReleases,
  getSeveralAlbums,
  getSeveralAlbumsLimit,
  getSingleAlbum,
  getUsersSavedAlbums,
  getUsersSavedAlbumsLimit,
  removeUsersSavedAlbums,
  removeUsersSavedAlbumsLimit,
  saveAlbumsForUser,
  saveAlbumsForUserLimit,
} from './albums';

export default function Albums(provider: AsyncProvider) {
  return {
    Album: {
      get: getSingleAlbum(provider),
      getSeveral: getSeveralAlbums(provider),
      getAll: factory.forLimited(
        getSeveralAlbums(provider),
        getSeveralAlbumsLimit
      ),
    },
    Tracks: {
      get: getAlbumTracks(provider),
      getAll: factory.forPaginated(
        getAlbumTracks(provider),
        getAlbumTracksLimit
      ),
    },
    UsersSaved: {
      get: getUsersSavedAlbums(provider).bind(null, null),
      getAll: factory
        .forPaginated(getUsersSavedAlbums(provider), getUsersSavedAlbumsLimit)
        .bind(null, null),
      save: saveAlbumsForUser(provider),
      saveAll: factory.forLimited(
        saveAlbumsForUser(provider),
        saveAlbumsForUserLimit
      ),
      remove: removeUsersSavedAlbums(provider),
      removeAll: factory.forLimited(
        removeUsersSavedAlbums(provider),
        removeUsersSavedAlbumsLimit
      ),
      check: checkUsersSavedAlbums(provider),
      checkAll: factory.forLimited(
        checkUsersSavedAlbums(provider),
        checkUsersSavedAlbumsLimit
      ),
    },
    NewReleases: {
      get: getNewAlbumReleases(provider).bind(null, null),
    },
  } as const;
}
