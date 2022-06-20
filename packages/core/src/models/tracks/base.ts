import { SpotifyKind } from '../../abstract';
import { Cacheable, CacheEntity } from '../../cache';
import { ParamsSavedTracks, SavedTrackObject } from './api';

export type UsersSavedTracksResponse = SpotifyApi.UsersSavedTracksResponse;
export type MultipleTracksResponse = SpotifyApi.MultipleTracksResponse;

export class TracksBase extends SpotifyKind {
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

  @Cacheable<SpotifyApi.TrackObjectFull[]>(CacheEntity.Track, 'id')
  protected async getSeveralTracks(
    ...ids: string[]
  ): Promise<SpotifyApi.TrackObjectFull[]> {
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

  protected async getUserSavedTracks(
    params: ParamsSavedTracks = {}
  ): Promise<UsersSavedTracksResponse> {
    const withNextUrl = typeof params === 'string';
    const { data } = await this.request<UsersSavedTracksResponse>({
      method: this.endpoints.usersSavedTracks.method,
      url: withNextUrl ? params : this.endpoints.usersSavedTracks.url,
      ...{ params: withNextUrl ? {} : params },
    });
    return data;
  }

  protected async *getUserSavedTracksIter(
    chunkSize = this.endpoints.usersSavedTracks.limit
  ): AsyncGenerator<SavedTrackObject[]> {
    if (chunkSize < 1) {
      throw new TypeError('Chunk size must be stricly positive');
    }
    const params = {
      offset: 0,
      limit: chunkSize,
      nextPage: <string | null>null,
    };
    do {
      const data = await this.getUserSavedTracks(
        params.nextPage ? params.nextPage : params
      );
      params.offset += chunkSize;
      params.nextPage = data.next;
      yield data.items;
    } while (params.nextPage);
  }
}
