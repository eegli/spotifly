import { AsyncProvider } from '../../async';
import { Cacheable, CacheEntity } from '../../cache';
type MultipleArtistsResponse = SpotifyApi.MultipleArtistsResponse;

export class ArtistsBase extends AsyncProvider {
  protected endpoints = {
    severalArtists: {
      url: 'artists',
      limit: <number>50,
    },
  };

  /* Private */
  @Cacheable(CacheEntity.Artist)
  protected async getSeveralArtists(
    ...ids: string[]
  ): Promise<MultipleArtistsResponse> {
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

    return data;
  }
}
