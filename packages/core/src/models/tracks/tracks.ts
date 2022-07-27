import { GetEndpoint, PaginatedGetEndpoint, PutEndpoint } from '../../abstract';
import * as factory from '../../factory';
export class GetSingleTrack extends GetEndpoint {
  async get(params: { trackId: string }) {
    const res = await this.provider.request<SpotifyApi.SingleTrackResponse>({
      baseURL: 'https://api.spotify.com/v1',
      method: 'GET',
      url: `/tracks/${params.trackId}`,
    });
    return res.data;
  }
}

export class GetSeveralTracks extends GetEndpoint {
  async get(params: { trackIds: string[] }) {
    const res = await this.provider.request<SpotifyApi.MultipleTracksResponse>({
      baseURL: 'https://api.spotify.com/v1',
      method: 'GET',
      url: `/tracks`,
      params: {
        ids: params.trackIds.join(','),
      },
    });
    return res.data;
  }
}
export class GetUsersSavedTracks extends PaginatedGetEndpoint {
  async get(params?: { limit?: number; market?: string; offset?: number }) {
    return (
      await this.provider.request<SpotifyApi.UsersSavedTracksResponse>({
        baseURL: 'https://api.spotify.com/v1',
        method: 'GET',
        url: 'me/tracks',
        params,
      })
    ).data;
  }
  getAll = factory.createAutoPaginated(this.get, 50);
}

export class PutUserSavedTracks extends PutEndpoint {
  async put(params: { trackIds: string[] }) {
    const res =
      await this.provider.request<SpotifyApi.SaveTracksForUserResponse>({
        baseURL: 'https://api.spotify.com/v1',
        method: 'PUT',
        url: `me/tracks`,
        params: {
          ids: params.trackIds.join(','),
        },
      });
    return res.data;
  }
}
