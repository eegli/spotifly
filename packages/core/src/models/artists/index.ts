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
      extended: {
        getAll: factory.forLimited(
          getMultipleArtists(provider),
          getMultipleArtistsLimit
        ),
      } as const,
    } as const,
    Albums: {
      get: getArtistsAlbums(provider),
      extended: {
        getAll(ids: string) {
          return factory.forPaginated(
            getArtistsAlbums(provider).bind(null, ids),
            getArtistsAlbumsLimit
          );
        },
      } as const,
    } as const,
    TopTracks: {
      get: getArtistsTopTracks(provider),
    } as const,
    RelatedArtists: {
      get: getArtistsRelatedArtists(provider),
    } as const,
  } as const;
}
