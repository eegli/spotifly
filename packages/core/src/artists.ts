import { RequestAble, SpotifyKind } from './abstract';
import { MapCollection } from './types';
import { chunkify } from './utils';

export class Artists extends SpotifyKind<SpotifyApi.ArtistObjectFull[]> {
  private readonly MULTIPLE_ARTISTS = '/artists';
  private readonly CHUNK_SIZE = 50;

  private collection: MapCollection<SpotifyApi.ArtistObjectFull> = new Map();
  private artistIds: Set<string> = new Set();

  constructor(opts: RequestAble, id?: string, ...ids: string[]) {
    super(opts);
    if (id) {
      this.add(id, ...ids);
    }
  }

  add(id: string, ...ids: string[]) {
    [id, ...ids].forEach(id => this.artistIds.add(id));
  }

  get items() {
    return Array.from(this.collection.values());
  }

  async get(id: string, ...ids: string[]): Promise<void> {
    for await (const chunk of chunkify([id, ...ids], this.CHUNK_SIZE)) {
      const { data } =
        await this.request.get<SpotifyApi.MultipleArtistsResponse>(
          this.BASE_URL_V1 + this.MULTIPLE_ARTISTS,
          {
            params: {
              ids: chunk.join(','),
            },
          }
        );
      data.artists.forEach(artist => {
        this.collection.set(artist.id, artist);
      });
    }
  }
}
