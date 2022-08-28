import Albums from './models/albums';
import Artists from './models/artists';
import Categories from './models/categories';
import Episodes from './models/episodes';
import Playlists from './models/playlists';
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
    Categories: Categories(provider),
    Episodes: Episodes(provider),
    Playlists: Playlists(provider),
    Search: Search(provider),
    Shows: Shows(provider),
    Tracks: Tracks(provider),
    Users: Users(provider),
  } as const;
}

export type SpotifyClient = ReturnType<typeof initialize>;

export type { DataPromise, DataResponse } from './types';
export type { AuthProviderOptions };
