import { SpotifyKind } from '../../abstract';

export type GetSeveralArtistOptions = {
  market?: string;
};

type GroupType = 'album' | 'single' | 'appears_on' | 'compilation';
type Group =
  | `${GroupType}`
  | `${GroupType},${GroupType}`
  | `${GroupType},${GroupType},${GroupType}`
  | `${GroupType},${GroupType},${GroupType},${GroupType}`;

export type GetArtistsAlbumsOptions = {
  include_groups?: Group;
  limit?: number;
  market?: string;
  offset?: number;
};

export class ArtistsBase extends SpotifyKind {
  protected async getSeveralArtists(
    artistIds: string[],
    { market }: GetSeveralArtistOptions = {}
  ) {
    const { data } = await this.request<SpotifyApi.MultipleArtistsResponse>({
      method: 'get',
      url: 'artists',
      params: {
        ids: artistIds.join(','),
        market,
      },
    });
    return data.artists;
  }

  protected async getArtistsAlbums(
    boundArtistId: string,
    { limit, include_groups, market, offset }: GetArtistsAlbumsOptions
  ) {
    const { data } = await this.request<SpotifyApi.ArtistsAlbumsResponse>({
      method: 'get',
      url: `artists/${boundArtistId}/albums`,
      params: {
        include_groups,
        limit,
        market,
        offset,
      },
    });
    return data;
  }
}
