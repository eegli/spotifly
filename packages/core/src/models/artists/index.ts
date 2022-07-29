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
    },
    TopTracks: {
      get: getArtistsTopTracks(provider),
    },
    RelatedArtists: {
      get: getArtistsRelatedArtists(provider),
    },
    extended: {
      getAllArtists: factory.getAllFromLimited(
        getMultipleArtists(provider),
        'artistIds',
        getMultipleArtistsLimit
      ),
    } as const,
  } as const;
}
