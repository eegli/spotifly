import Albums from './models/albums';
import Artists from './models/artists';
import Search from './models/search';
import Shows from './models/shows';
import Tracks from './models/tracks';

import { AuthProvider, AuthProviderOptions } from './provider';

export function initialize(authOptions: AuthProviderOptions) {
  const provider = new AuthProvider(authOptions);
  return {
    Artists: Artists(provider),
    Albums: Albums(provider),
    Search: Search(provider),
    Shows: Shows(provider),
    Tracks: Tracks(provider),
  } as const;
}

export type SpotifyClient = ReturnType<typeof initialize>;

export type { DataPromise, DataResponse } from './types';
export type { AuthProviderOptions };
