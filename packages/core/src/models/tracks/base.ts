import { SpotifyKind } from '../../abstract';

export type GetSeveralTracksOptions = {
  market?: string;
};

export type GetUserSavedTrackOptions = {
  limit?: number;
  market?: string;
  offset?: number;
};

export class TracksBase extends SpotifyKind {
  protected async getSeveralTracks(
    trackids: string[],
    options: GetSeveralTracksOptions = {}
  ) {
    const res = await this.request<SpotifyApi.MultipleTracksResponse>({
      method: 'get',
      url: 'tracks',
      params: {
        ids: trackids.join(','),
        ...options,
      },
    });
    return res.data.tracks;
  }

  protected async getUserSavedTracks(options: GetUserSavedTrackOptions = {}) {
    const { data } = await this.request<SpotifyApi.UsersSavedTracksResponse>({
      method: 'get',
      url: 'me/tracks',
      params: options,
    });
    return data;
  }
}
