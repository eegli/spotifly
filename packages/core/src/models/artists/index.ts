import * as factory from '../../factory';
import { AuthProvider } from '../../provider';
import {
  getArtistsAlbums,
  getArtistsRelatedArtists,
  getArtistsTopTracks,
  getMultipleArtists,
  getMultipleArtistsLimit,
  getSingleArtist,
} from './artists';

export default function Artists(provider: AuthProvider) {
  return {
    get: getSingleArtist(provider),
    getMultiple: getMultipleArtists(provider),
    Albums: {
      get: getArtistsAlbums(provider),
    } as const,
    TopTracks: {
      get: getArtistsTopTracks(provider),
    } as const,
    RelatedArtists: {
      get: getArtistsRelatedArtists(provider),
    } as const,
    extended: {
      getAllArtists: factory.getAllFromLimited(
        getMultipleArtists(provider),
        'artistIds',
        getMultipleArtistsLimit
      ),
    } as const,
  } as const;
}
