import * as AppCache from './cache';
import * as models from './models';
import { AuthProvider, AuthProviderConfig } from './request';

export default class Spotifly {
  public tracks: models.Tracks;
  constructor(config: AuthProviderConfig) {
    const provider = new AuthProvider(config);
    this.tracks = new models.Tracks(provider);
  }
  // https://github.com/microsoft/TypeScript/issues/5711
  public static get cache(): typeof AppCache.cache {
    return AppCache.cache;
  }
  public static Tracks = models.Tracks;
}
