import Tracks from './models/tracks';
import { AuthProvider } from './provider';

export { AuthProvider } from './provider';
export type { AuthProviderConfig } from './provider';

export function init(provider: AuthProvider) {
  return {
    Tracks: Tracks(provider),
  } as const;
}
