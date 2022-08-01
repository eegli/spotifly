import * as factory from '../../factory';
import { AuthProvider } from '../../provider';
import {
  getArtistsAlbums,
  getArtistsAlbumsLimit,
  getArtistsRelatedArtists,
  getArtistsTopTracks,
  getMultipleArtists,
  getMultipleArtistsLimit,
  getSingleArtist,
} from './artists';

export default function Artists(provider: AuthProvider) {
  return {
    Artist: {
      get: getSingleArtist(provider),
      getMultiple: getMultipleArtists(provider),
      getAll: factory.forLimited(
        getMultipleArtists(provider),
        getMultipleArtistsLimit
      ),
    } as const,
    Albums: {
      get: getArtistsAlbums(provider),
      getAll: (ids: string) =>
        factory.forPaginated(
          getArtistsAlbums(provider).bind(null, ids),
          getArtistsAlbumsLimit
        ),
    } as const,
    TopTracks: {
      get: getArtistsTopTracks(provider),
    } as const,
    RelatedArtists: {
      get: getArtistsRelatedArtists(provider),
    } as const,
  } as const;
}
