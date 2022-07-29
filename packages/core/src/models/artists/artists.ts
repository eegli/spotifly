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
