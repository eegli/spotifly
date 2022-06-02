import { RequestConfig, SpotifyKind } from '../../abstract';
import { chunkify } from '../../utils';

export class Artists extends SpotifyKind {
  constructor(opts: RequestConfig) {
    super(opts);
  }

  async getSeveralArtists(id: string, ...ids: string[]): Promise<this> {
    const chunkSize = this.endpoints.getSeveralArtists.limit;
    for await (const chunk of chunkify([id, ...ids], chunkSize)) {
      const { data } = await this.request<SpotifyApi.MultipleArtistsResponse>({
        method: 'get',
        url: this.endpoints.getSeveralArtists.url,
        params: {
          ids: chunk.join(','),
        },
      });
    }
    return this;
  }
}
