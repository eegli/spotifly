import { AuthProvider, AuthProviderOptions } from './provider';
import axios from 'axios';

import Albums from './models/albums';
import Artists from './models/artists';
import Categories from './models/categories';
import Episodes from './models/episodes';
import Genres from './models/genres';
import Markets from './models/markets';
import Player from './models/player';
import Playlists from './models/playlists';
import Search from './models/search';
import Shows from './models/shows';
import Tracks from './models/tracks';
import Users from './models/users';

export function initialize(authOptions: AuthProviderOptions) {
  const provider = new AuthProvider(authOptions);
  return {
    Albums: Albums(provider),
    Artists: Artists(provider),
    Categories: Categories(provider),
    Episodes: Episodes(provider),
    Genres: Genres(provider),
    Markets: Markets(provider),
    Player: Player(provider),
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
export const isError = axios.isAxiosError;
