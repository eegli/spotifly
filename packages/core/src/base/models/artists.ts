import { MapCollection } from '../../types';
import { chunkify } from '../../utils';
import { Collectible, RequestConfig, SpotifyKind } from '../abstract';

export class Artists extends SpotifyKind {
  #artists: MapCollection<SpotifyApi.ArtistObjectFull> = new Map();

  constructor(opts: RequestConfig) {
    super(opts);
  }

  public get collection() {
    return {
      artists: new Collectible(this.#artists),
    };
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
      data.artists.forEach(artist => {
        this.#artists.set(artist.id, artist);
      });
    }
    return this;
  }
}
