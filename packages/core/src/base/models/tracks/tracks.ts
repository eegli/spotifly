import { Cacheable, CacheEntity } from '../../../cache';
import { MapCollection } from '../../../types';
import { chunkify } from '../../../utils';
import { Collectible, RequestConfig, SpotifyKind } from '../../abstract';
import {
  FullTrack,
  SavedTrackObject,
  SavedTracksParams,
  SavedTracksResponse,
  TracksAPI,
} from './api';

let isCacheEnabled = true;

export class Tracks extends SpotifyKind implements TracksAPI {
  #userSavedTracks: MapCollection<any> = new Map();
  #tracks: MapCollection<FullTrack> = new Map();

  constructor(opts: RequestConfig, withCache = true) {
    super(opts);
    isCacheEnabled = withCache;
  }

  public get collection() {
    return {
      tracks: new Collectible(this.#tracks),
      userSavedTracks: new Collectible(this.#userSavedTracks),
    };
  }

  @Cacheable({ entity: CacheEntity.Track, enabled: isCacheEnabled })
  public async getSeveralTracks(
    id: string,
    ...ids: string[]
  ): Promise<FullTrack[]> {
    return chunkify([id, ...ids], this.endpoints.getSeveralTracks.limit).reduce(
      async (acc, chunk) => {
        const { data } =
          await this.request.get<SpotifyApi.MultipleTracksResponse>(
            this.endpoints.getSeveralTracks.url,
            {
              params: {
                ids: chunk.join(','),
                limit: this.endpoints.getSeveralTracks.limit,
              },
            }
          );

        acc.then(res => {
          data.tracks.forEach(track => {
            this.#tracks.set(track.id, track);
          });
          res.push(...data.tracks);
        });
        return acc;
      },
      Promise.resolve(<FullTrack[]>[])
    );
  }

  /* Private */
  async #getUserSavedTracks({
    limit = this.endpoints.getUsersSavedTracks.limit,
    offset = 0,
  }: SavedTracksParams): Promise<SavedTracksResponse> {
    const res = await this.request.get<SpotifyApi.UsersSavedTracksResponse>(
      this.endpoints.getUsersSavedTracks.url,
      {
        params: {
          limit,
          offset,
        },
      }
    );
    return res.data;
  }

  /* Public API */
  public get userSavedTracks() {
    const self = this;
    return {
      get: this.#getUserSavedTracks,
      getAll: async function (): Promise<SavedTrackObject[]> {
        const result = [];
        for await (const chunk of this.iter()) {
          result.push(...chunk.items);
        }
        return result;
      },
      async *iter({
        chunkSize = self.endpoints.getUsersSavedTracks.limit,
      } = {}): AsyncGenerator<SpotifyApi.UsersSavedTracksResponse> {
        let hasNextPage = true;
        for (let offset = 0; hasNextPage; offset += chunkSize) {
          const data = await self.#getUserSavedTracks({
            offset,
            limit: chunkSize,
          });
          hasNextPage = !!data.next;
          yield data;
        }
      },
    };
  }
}
