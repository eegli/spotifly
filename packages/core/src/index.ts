import { MultipleTracks, SingleTrack, UsersSaved } from './models/';
import { AuthProvider } from './provider';

export { AuthProvider } from './provider';
export type { AuthProviderConfig } from './provider';

export function init(provider: AuthProvider) {
  return {
    Tracks: {
      MultipleTracks: new MultipleTracks(provider),
      SingleTrack: new SingleTrack(provider),
      UsersSaved: new UsersSaved(provider),
    } as const,
  } as const;
}

const Spotify = init(new AuthProvider({ accessToken: '123' }));
