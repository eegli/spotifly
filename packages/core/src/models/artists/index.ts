import * as factory from '../../factory';
import { AuthProvider } from '../../provider';
import {
  getArtistsAlbums,
  getArtistsAlbumsLimit,
  getArtistsRelatedArtists,
  getArtistsTopTracks,
  getSeveralArtists,
  getSeveralArtistsLimit,
  getSingleArtist,
} from './artists';

export default function Artists(provider: AuthProvider) {
  return {
    Artist: {
      get: getSingleArtist(provider),
      getSeveral: getSeveralArtists(provider),
      getAll: factory.forLimited(
        getSeveralArtists(provider),
        getSeveralArtistsLimit
      ),
    } as const,
    Albums: {
      get: getArtistsAlbums(provider),
      getAll: factory.forPaginated(
        getArtistsAlbums(provider),
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
