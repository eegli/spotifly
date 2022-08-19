import * as factory from '../../factory';
import type { AsyncProvider } from '../../types';
import {
  getArtistsAlbums,
  getArtistsRelatedArtists,
  getArtistsTopTracks,
  getSeveralArtists,
  getSingleArtist,
  LIMIT_GET_ARTIST_ALBUMS,
  LIMIT_GET_SEVERAL_ARTISTS,
} from './artists';

export default function Artists(provider: AsyncProvider) {
  return {
    Albums: {
      get: getArtistsAlbums(provider),
      getAll: factory.forPaginated(
        getArtistsAlbums(provider),
        LIMIT_GET_ARTIST_ALBUMS
      ),
    },
    Artist: {
      get: getSingleArtist(provider),
      getSeveral: getSeveralArtists(provider),
      getAll: factory.forLimited(
        getSeveralArtists(provider),
        LIMIT_GET_SEVERAL_ARTISTS
      ),
    },
    TopTracks: {
      get: getArtistsTopTracks(provider),
    },
    RelatedArtists: {
      get: getArtistsRelatedArtists(provider),
    },
  } as const;
}
