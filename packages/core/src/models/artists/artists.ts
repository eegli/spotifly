import { Methods, transformResponse, WithProvider } from '../../request';

export const getSingleArtist: WithProvider<
  { artistId: string },
  SpotifyApi.SingleArtistResponse
> = provider => async params =>
  transformResponse(
    await provider.request({
      method: Methods.GET,
      url: `artists/${params.artistId}`,
    })
  );

export const getMultipleArtists: WithProvider<
  { artistIds: string[] },
  SpotifyApi.MultipleArtistsResponse
> = provider => async params =>
  transformResponse(
    await provider.request({
      method: Methods.GET,
      url: 'artists',
      params: {
        ids: params.artistIds.join(','),
      },
    })
  );
export const getMultipleArtistsLimit = 50;

type GroupType = 'album' | 'single' | 'appears_on' | 'compilation';
type Group =
  | `${GroupType}`
  | `${GroupType},${GroupType}`
  | `${GroupType},${GroupType},${GroupType}`
  | `${GroupType},${GroupType},${GroupType},${GroupType}`;

export const getArtistsAlbums: WithProvider<
  {
    artistId: string;
    include_groups?: Group;
    offset?: number;
    limit?: number;
    market?: string;
  },
  SpotifyApi.ArtistsAlbumsResponse
> = provider => async params =>
  transformResponse(
    await provider.request({
      method: Methods.GET,
      url: `artists/${params.artistId}/albums`,
      params,
    })
  );
export const getArtistsAlbumsLimit = 50;

export const getArtistsTopTracks: WithProvider<
  { artistId: string; market?: string },
  SpotifyApi.ArtistsTopTracksResponse
> = provider => async params =>
  transformResponse(
    await provider.request({
      method: Methods.GET,
      url: `artists/${params.artistId}/top-tracks`,
      params,
    })
  );

export const getArtistsRelatedArtists: WithProvider<
  { artistId: string },
  SpotifyApi.ArtistsRelatedArtistsResponse
> = provider => async params =>
  transformResponse(
    await provider.request({
      method: Methods.GET,
      url: `artists/${params.artistId}/related-artists`,
    })
  );
