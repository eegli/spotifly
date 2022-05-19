import { chunkify } from '../../utils';
import { RequestConfig, SpotifyKind } from '../abstract';

export class Artists extends SpotifyKind {
  constructor(opts: RequestConfig) {
    super(opts);
  }

  async getSeveralArtists(id: string, ...ids: string[]): Promise<this> {
    const chunkSize = this.endpoints.getSeveralArtists.limit;
    for await (const chunk of chunkify([id, ...ids], chunkSize)) {
      const { data } =
        await this.request.get<SpotifyApi.MultipleArtistsResponse>(
          this.endpoints.getSeveralArtists.url,
          {
            params: {
              ids: chunk.join(','),
            },
          }
        );
    }
    return this;
  }
}
