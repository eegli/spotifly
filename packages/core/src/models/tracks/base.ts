import { AsyncProvider } from '../../async';
import { Cacheable, CacheEntity } from '../../cache';
import { ParamsSavedTracks } from './api';

type UsersSavedTracksResponse = SpotifyApi.UsersSavedTracksResponse;
type MultipleTracksResponse = SpotifyApi.MultipleTracksResponse;

export class TracksBase extends AsyncProvider {
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

  @Cacheable(CacheEntity.Track)
  protected async getSeveralTracks(...ids: string[]) {
    if (ids.length > this.endpoints.severalTracks.limit) {
      throw new Error('Cannot request more items than the limit');
    }
    const res = await this.request<MultipleTracksResponse>({
      method: this.endpoints.severalTracks.method,
      url: this.endpoints.severalTracks.url,
      params: {
        ids: ids.join(','),
        limit: this.endpoints.severalTracks.limit,
      },
    });
    return res.data.tracks;
  }

  protected async getUserSavedTracks(params: ParamsSavedTracks = {}) {
    const { data } = await this.request<UsersSavedTracksResponse>({
      method: this.endpoints.usersSavedTracks.method,
      url: this.endpoints.usersSavedTracks.url,
      params: {
        limit: params.limit || this.endpoints.usersSavedTracks.limit,
        offset: params.offset || 0,
      },
    });
    return data;
  }

  protected async *getUserSavedTracksIter(
    chunkSize = this.endpoints.usersSavedTracks.limit
  ) {
    let hasNextPage = true;
    for (let offset = 0; hasNextPage; offset += chunkSize) {
      const data = await this.getUserSavedTracks({
        offset,
        limit: chunkSize,
      });
      hasNextPage = !!data.next;
      yield data.items;
    }
  }
}
