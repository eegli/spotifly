import Artists from './models/artists';
import Tracks from './models/tracks';
import type { AuthProviderOptions } from './provider';
import { AuthProvider } from './provider';

export function initialize(authOptions: AuthProviderOptions) {
  const provider = new AuthProvider(authOptions);
  return {
    Tracks: Tracks(provider),
    Artists: Artists(provider),
  } as const;
}

export type SpotifyClient = ReturnType<typeof initialize>;

export type { AuthProviderOptions };
