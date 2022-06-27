import { AuthProvider } from './request';

export abstract class SpotifyKind {
  protected request: typeof AuthProvider.prototype.request;

  constructor(provider: InstanceType<typeof AuthProvider>) {
    this.request = provider.request.bind(provider);
  }
}
