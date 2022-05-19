import { Cacheable, CacheEntity } from '../../../cache';
import { chunkify } from '../../../utils';
import { RequestConfig, SpotifyKind } from '../../abstract';
import {
  SavedTrackObject,
  SavedTracksParams,
  SavedTracksResponse,
  TracksAPI,
} from './api';

let isCacheEnabled = true;

export class Tracks extends SpotifyKind implements TracksAPI {
  constructor(opts: RequestConfig, withCache = true) {
    super(opts);
    isCacheEnabled = withCache;
  }

  /* ******** Multiple Tracks ******** */

  /* Private */
  @Cacheable({ entity: CacheEntity.Track, enabled: isCacheEnabled })
  // TODO add dev warning for limit
  private async _getSeveralTracks(
    ...ids: string[]
  ): Promise<SpotifyApi.TrackObjectFull[]> {
    const res = await this.request.get<SpotifyApi.MultipleTracksResponse>(
      this.endpoints.getSeveralTracks.url,
      {
        params: {
          ids: ids.join(','),
          limit: this.endpoints.getSeveralTracks.limit,
        },
      }
    );

    return res.data.tracks;
  }

  /* Public API */
  public tracks(id: string, ...ids: string[]) {
    const self = this;
    const allIds = [id, ...ids];
    const limit = this.endpoints.getSeveralTracks.limit;

    async function getAll() {
      return chunkify(allIds, limit).reduce(async (acc, [id, ids]) => {
        const res = await self._getSeveralTracks(id, ids);
        acc.then(existing => existing.push(...res));
        return acc;
      }, Promise.resolve(<SpotifyApi.TrackObjectFull[]>[]));
    }

    // If the number of items requested per iteration (= chunk size) is
    // larger than the API request limit, the chunk size will be set
    // to the limit. This way, we do the least amount of requests by
    // maxing out the request limit.

    // Example: API limit = 2, chunkSize = 3, items requested = 5.

    // In this case, the chunk size will be set to 2 and generator
    // will yield 2, 2 and 1 item in the last iteration.

    async function* iter({ chunkSize = limit } = {}): AsyncGenerator<
      SpotifyApi.TrackObjectFull[]
    > {
      // Yield each chunk
      chunkSize = chunkSize > limit ? limit : chunkSize;
      const chunks = chunkify(allIds, chunkSize);
      for (let i = 0; i < chunks.length; i++) {
        const curr = chunks[i];
        yield self._getSeveralTracks(curr[0], ...curr.slice(1));
      }
    }
    return {
      getAll,
      iter,
    };
  }

  /* ******** User Saved Tracks ******** */

  /* Private */
  private async _getUserSavedTracks({
    limit = this.endpoints.getUsersSavedTracks.limit,
    offset = 0,
  }: SavedTracksParams = {}): Promise<SavedTracksResponse> {
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

    const get = this._getUserSavedTracks.bind(this);

    async function getAll(): Promise<SavedTrackObject[]> {
      const result = [];
      for await (const chunk of iter()) {
        result.push(...chunk.items);
      }
      return result;
    }

    async function* iter({
      chunkSize = self.endpoints.getUsersSavedTracks.limit,
    } = {}): AsyncGenerator<SpotifyApi.UsersSavedTracksResponse> {
      let hasNextPage = true;
      for (let offset = 0; hasNextPage; offset += chunkSize) {
        const data = await self._getUserSavedTracks({
          offset,
          limit: chunkSize,
        });
        hasNextPage = !!data.next;
        yield data;
      }
    }

    return {
      get,
      getAll,
      iter,
    };
  }
}
