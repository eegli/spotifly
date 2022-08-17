import * as factory from '../../factory';
import { AsyncProvider } from '../../types';
import {
  checkUsersSavedAlbums,
  getAlbumTracks,
  getNewAlbumReleases,
  getSeveralAlbums,
  getSingleAlbum,
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
      get: getSingleAlbum(provider),
      getSeveral: getSeveralAlbums(provider),
      getAll: factory.forLimited(
        getSeveralAlbums(provider),
        LIMIT_GET_SEVERAL_ALBUMS
      ),
    },
    Tracks: {
      get: getAlbumTracks(provider),
      getAll: factory.forPaginated(
        getAlbumTracks(provider),
        LIMIT_GET_ALBUM_TRACKS
      ),
    },
    UsersSaved: {
      get: getUsersSavedAlbums(provider).bind(null, null),
      getAll: factory
        .forPaginated(getUsersSavedAlbums(provider), LIMIT_GET_USER_ALBUMS)
        .bind(null, null),
      save: saveAlbumsForUser(provider),
      saveAll: factory.forLimited(
        saveAlbumsForUser(provider),
        LIMIT_MODIFY_CHECK_USER_ALBUMS
      ),
      remove: removeUsersSavedAlbums(provider),
      removeAll: factory.forLimited(
        removeUsersSavedAlbums(provider),
        LIMIT_MODIFY_CHECK_USER_ALBUMS
      ),
      check: checkUsersSavedAlbums(provider),
      checkAll: factory.forLimited(
        checkUsersSavedAlbums(provider),
        LIMIT_MODIFY_CHECK_USER_ALBUMS
      ),
    },
    NewReleases: {
      get: getNewAlbumReleases(provider).bind(null, null),
    },
  } as const;
}
