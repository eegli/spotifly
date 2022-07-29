import { AuthInitOptions } from './abstract';
import Artists from './models/artists';
import Tracks from './models/tracks';

export type { AuthInitOptions } from './abstract';
export { AuthProvider } from './provider';
export type { AuthProviderCtrArgs } from './provider';

export function init(authInitOptions: AuthInitOptions) {
  return {
    Tracks: Tracks(authInitOptions),
    Artists: Artists(authInitOptions),
  } as const;
}
