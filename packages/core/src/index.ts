import { cache } from './cache';
import * as models from './models';
import { AuthProvider, AuthProviderConfig } from './request';

export default class Spotifly {
  public tracks: models.Tracks;
  constructor(config: AuthProviderConfig) {
    const provider = new AuthProvider(config);
    this.tracks = new models.Tracks(provider);
  }
  public static cache = cache;
  public static Tracks = models.Tracks;
}
