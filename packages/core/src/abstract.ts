import { AuthProvider } from './request';

export abstract class SpotifyKind {
  protected abstract endpoints: Record<string, Record<string, string | number>>;
  protected request: typeof AuthProvider.prototype.request;

  constructor(provider: InstanceType<typeof AuthProvider>) {
    this.request = provider.request.bind(provider);
  }
}
