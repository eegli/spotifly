import Artists from './models/artists';
import Tracks from './models/tracks';
import { AuthInitOptions, AuthProvider } from './provider';

export default function initialize(authInitOptions: AuthInitOptions) {
  const provider = new AuthProvider({
    ...authInitOptions,
    requestConfig: { baseURL: 'https://api.spotify.com/v1' },
  });
  return {
    Tracks: Tracks(provider),
    Artists: Artists(provider),
  } as const;
}

export type SpotifyClient = ReturnType<typeof initialize>;
