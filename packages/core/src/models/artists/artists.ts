import { RequestConfig, SpotifyKind } from '../../abstract';
import { Cacheable, CacheEntity } from '../../cache';
import { ArtistObjectFull, MultipleArtistsResponse } from './api';

export class Artists extends SpotifyKind {
  constructor(opts: RequestConfig) {
    super(opts);
  }

  protected endpoints = {
    getSeveralArtists: {
      url: 'artists',
      limit: <number>50,
    },
  };

  /* ******** Multiple Tracks ******** */

  /* Private */
  @Cacheable(CacheEntity.Artist)
  private async _getSeveralArtists(
    ...ids: string[]
  ): Promise<ArtistObjectFull[]> {
    if (ids.length > this.endpoints.getSeveralArtists.limit) {
      throw new Error('Cannot request more items than the limit');
    }
    const { data } = await this.request<MultipleArtistsResponse>({
      method: 'get',
      url: this.endpoints.getSeveralArtists.url,
      params: {
        ids: ids.join(','),
        limit: this.endpoints.getSeveralArtists.limit,
      },
    });

    return data.artists;
  }
}
