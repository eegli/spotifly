import * as factory from '../../factory';
import { AsyncProvider } from '../../types';
import {
  getArtistsAlbums,
  getArtistsAlbumsLimit,
  getArtistsRelatedArtists,
  getArtistsTopTracks,
  getSeveralArtists,
  getSeveralArtistsLimit,
  getSingleArtist,
} from './artists';

export default function Artists(provider: AsyncProvider) {
  return {
    Artist: {
      get: getSingleArtist(provider),
      getSeveral: getSeveralArtists(provider),
      getAll: factory.forLimited(
        getSeveralArtists(provider),
        getSeveralArtistsLimit
      ),
    },
    Albums: {
      get: getArtistsAlbums(provider),
      getAll: factory.forPaginated(
        getArtistsAlbums(provider),
        getArtistsAlbumsLimit
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
