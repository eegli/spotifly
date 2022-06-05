import { RequestConfig, SpotifyKind } from '../../abstract';
import { Cacheable, CacheEntity } from '../../cache';
import { chunkify } from '../../utils';
import {
  ParamsSavedTracks,
  SavedTrackObject,
  TrackObjectFull,
  TracksAPI,
  UsersSavedTracksResponse,
} from './api';

export class Tracks extends SpotifyKind implements TracksAPI {
  constructor(args: RequestConfig) {
    super(args);
  }

  protected endpoints = {
    severalTracks: {
      limit: <number>50,
      url: 'tracks',
      method: 'get',
    },
    usersSavedTracks: {
      limit: <number>50,
      url: 'me/tracks',
      method: 'get',
    },
  } as const;

  /* ******** Multiple Tracks ******** */
  @Cacheable(CacheEntity.Track)
  private async _getSeveralTracks(...ids: string[]) {
    if (ids.length > this.endpoints.severalTracks.limit) {
      throw new Error('Cannot request more items than the limit');
    }
    const res = await this.request<SpotifyApi.MultipleTracksResponse>({
      method: this.endpoints.severalTracks.method,
      url: this.endpoints.severalTracks.url,
      params: {
        ids: ids.join(','),
        limit: this.endpoints.severalTracks.limit,
      },
    });

    return res.data.tracks;
  }

  /**
   * Returns an object literal that offers multiple ways to fetch
   * track data. If the number of track ids exceeds the limit, the
   * request is split into chunks
   *
   * @public
   * @param {...string[]} ids Spotify track ids
   *
   */
  public tracks(...ids: string[]) {
    const self = this;
    const limit = this.endpoints.severalTracks.limit;

    /**
     * Gets track data for all track ids. Chunked requests are made
     * one after another. This method is well suited for Spotify
     * applications that have been granted a low request limit. Use
     * getAll() if you want to fetch tracks in parallel.
     *
     * @public
     *
     */
    async function get() {
      return chunkify(ids, limit).reduce(async (acc, idsChunk) => {
        const res = await self._getSeveralTracks(...idsChunk);
        acc.then(existing => existing.push(...res));
        return acc;
      }, Promise.resolve(<TrackObjectFull[]>[]));
    }
    /**
     * Gets track data for all track ids. Chunked requests are made in
     * parallel. This method is well suited for Spotify applications
     * that have been granted a high request limit. Use get() if you
     * want to fetch tracks one after another.
     *
     * @public
     *
     */
    async function getAll() {
      const chunks = chunkify(ids, limit).map(idsChunk =>
        self._getSeveralTracks(...idsChunk)
      );
      return Promise.all(chunks);
    }

    /**
    * Returns an iterator over all track ids that yields chunks of the
    * specified size (or less) of track data. 
    *
    * If the number of items requested per iteration (chunk size) is
    *   larger than the request limit, the chunk size will be set to
    *   the limit. This way, the least amount of requests are done by
    *   maxing out the request limit.

    * Example: API limit = 2, chunkSize = 3, items requested = 5.

    * In this case, the chunk size will be set to 2 and generator will
    * yield 2, 2 and 1 item in the last iteration.
     *
     * @public
     *
     */
    async function* iter(chunkSize = limit) {
      chunkSize = chunkSize > limit ? limit : chunkSize;
      const chunks = chunkify(ids, chunkSize);
      for (let i = 0; i < chunks.length; i++) {
        yield self._getSeveralTracks(...chunks[i]);
      }
    }
    return {
      get,
      getAll,
      iter,
    };
  }

  /* ******** User Saved Tracks ******** */

  private async _getUserSavedTracks(params: ParamsSavedTracks = {}) {
    params.limit ??= this.endpoints.usersSavedTracks.limit;
    params.offset ??= 0;

    const res = await this.request<UsersSavedTracksResponse>({
      method: this.endpoints.usersSavedTracks.method,
      url: this.endpoints.usersSavedTracks.url,
      params: {
        limit: params.limit,
        offset: params.offset,
      },
    });
    return res.data;
  }

  /**
   * Returns an object literal that offers multiple ways to fetch a
   * user's saved tracks.
   *
   * @public
   *
   */
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

    async function* iter(chunkSize = self.endpoints.usersSavedTracks.limit) {
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
