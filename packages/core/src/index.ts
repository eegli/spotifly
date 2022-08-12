import Artists from './models/artists';
import Search from './models/search';
import Tracks from './models/tracks';
import { AuthProvider, AuthProviderOptions } from './provider';

export function initialize(authOptions: AuthProviderOptions) {
  const provider = new AuthProvider(authOptions);
  return {
    Artists: Artists(provider),
    Search: Search(provider),
    Tracks: Tracks(provider),
  } as const;
}

export type SpotifyClient = ReturnType<typeof initialize>;

export type { DataPromise, DataResponse } from './types';
export type { AuthProviderOptions };
