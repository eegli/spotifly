import { SpotifyKind } from '../../abstract';
import { Cacheable, CacheEntity } from '../../cache';
import { ParamsSavedTracks, SavedTrackObject } from './api';

export type UsersSavedTracksResponse = SpotifyApi.UsersSavedTracksResponse;
export type MultipleTracksResponse = SpotifyApi.MultipleTracksResponse;
type TrackObjectFull = SpotifyApi.TrackObjectFull;

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

  @Cacheable<TrackObjectFull[]>(CacheEntity.Track, 'id')
  protected async getSeveralTracks(
    ...ids: string[]
  ): Promise<TrackObjectFull[]> {
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

  protected async getUserSavedTracks(
    params: ParamsSavedTracks = {}
  ): Promise<UsersSavedTracksResponse> {
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
  ): AsyncGenerator<SavedTrackObject[]> {
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
