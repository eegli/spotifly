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
    options: GetSeveralArtistOptions = {}
  ) {
    const { data } = await this.request<SpotifyApi.MultipleArtistsResponse>({
      method: 'get',
      url: 'artists',
      params: {
        ids: artistIds.join(','),
        ...options,
      },
    });
    return data.artists;
  }

  protected async getArtistsAlbums(
    boundArtistId: string,
    options: GetArtistsAlbumsOptions = {}
  ) {
    const { data } = await this.request<SpotifyApi.ArtistsAlbumsResponse>({
      method: 'get',
      url: `artists/${boundArtistId}/albums`,
      params: options,
    });
    return data;
  }
}
