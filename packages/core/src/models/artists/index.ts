import * as factory from '../../factory';
import { AuthProvider } from '../../provider';
import {
  getMultipleArtists,
  getMultipleArtistsLimit,
  getSingleArtist,
} from './artists';

export default function Artists(provider: AuthProvider) {
  return {
    get: getSingleArtist(provider),
    getMultiple: getMultipleArtists(provider),
    extended: {
      allArtists: factory.getAllFromLimited(
        getMultipleArtists(provider),
        'artistIds',
        getMultipleArtistsLimit
      ),
    } as const,
  } as const;
}
