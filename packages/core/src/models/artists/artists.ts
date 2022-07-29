import {
  GetEndpoint,
  LimitedGetEndpoint,
  Methods,
  transformResponse,
} from '../../abstract';

export class GetSingleArtist extends GetEndpoint {
  async get(params: { artistId: string }) {
    const res = await this.provider.request<SpotifyApi.SingleArtistResponse>({
      method: Methods.GET,
      url: `artists/${params.artistId}`,
    });
    return transformResponse(res);
  }
}

export class GetMultipleArtists extends LimitedGetEndpoint {
  async get(params: { artistIds: string[] }) {
    const res = await this.provider.request<SpotifyApi.MultipleArtistsResponse>(
      {
        method: Methods.GET,
        url: 'artists',
        params: {
          ids: params.artistIds.join(','),
        },
      }
    );
    return transformResponse(res);
  }

  limit = 50;
}
