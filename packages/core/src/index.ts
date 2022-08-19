import Albums from './models/albums';
import Artists from './models/artists';
import Episodes from './models/episodes';
import Search from './models/search';
import Shows from './models/shows';
import Tracks from './models/tracks';
import Users from './models/users';

import { AuthProvider, AuthProviderOptions } from './provider';

export function initialize(authOptions: AuthProviderOptions) {
  const provider = new AuthProvider(authOptions);
  return {
    Albums: Albums(provider),
    Artists: Artists(provider),
    Episodes: Episodes(provider),
    Search: Search(provider),
    Shows: Shows(provider),
    Tracks: Tracks(provider),
    Users: Users(provider),
  } as const;
}

export type SpotifyClient = ReturnType<typeof initialize>;

export type { DataPromise, DataResponse } from './types';
export type { AuthProviderOptions };
