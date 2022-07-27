import {
  DeleteEndpoint,
  GetEndpoint,
  PaginatedGetEndpoint,
  PutEndpoint,
} from '../../abstract';
import * as factory from '../../factory';
export class GetSingleTrack extends GetEndpoint {
  async get(params: { trackId: string }) {
    const res = await this.provider.request<SpotifyApi.SingleTrackResponse>({
      method: 'GET',
      url: `/tracks/${params.trackId}`,
    });
    return res.data;
  }
}

export class GetSeveralTracks extends GetEndpoint {
  async get(params: { trackIds: string[] }) {
    const res = await this.provider.request<SpotifyApi.MultipleTracksResponse>({
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
        method: 'PUT',
        url: `me/tracks`,
        params: {
          ids: params.trackIds.join(','),
        },
      });
    return res.data;
  }
}

export class RemoveUserSavedTracks extends DeleteEndpoint {
  async delete(params: { trackIds: string[] }) {
    const res =
      await this.provider.request<SpotifyApi.RemoveUsersSavedTracksResponse>({
        method: 'DELETE',
        url: `me/tracks`,
        params: {
          ids: params.trackIds.join(','),
        },
      });
    return res.data;
  }
}
