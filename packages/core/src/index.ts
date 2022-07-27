import { AuthInitOptions } from './abstract';
import Tracks from './models/tracks';

export type { AuthInitOptions } from './abstract';
export { AuthProvider } from './provider';
export type { AuthProviderCtrArgs } from './provider';

export function init(authInitOptions: AuthInitOptions) {
  return {
    Tracks: Tracks(authInitOptions),
  } as const;
}
