import { SpotifyKind } from '../../abstract';
import { Cacheable, CacheEntity } from '../../cache';

export type MultipleArtistsResponse = SpotifyApi.MultipleArtistsResponse;

export class ArtistsBase extends SpotifyKind {
  protected endpoints = {
    severalArtists: {
      url: 'artists',
      limit: <number>50,
    },
  };

  /* Private */
  @Cacheable(CacheEntity.Artist)
  protected async getSeveralArtists(...ids: string[]) {
    if (ids.length > this.endpoints.severalArtists.limit) {
      throw new Error('Cannot request more items than the limit');
    }
    const { data } = await this.request<MultipleArtistsResponse>({
      method: 'get',
      url: this.endpoints.severalArtists.url,
      params: {
        ids: ids.join(','),
        limit: this.endpoints.severalArtists.limit,
      },
    });
    return data.artists;
  }
}
