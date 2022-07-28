import {
  DeleteEndpoint,
  GetEndpoint,
  LimitedGetEndpoint,
  Methods,
  PutEndpoint,
  transformResponse,
} from '../../abstract';
export class GetSingleTrack extends GetEndpoint {
  async get(params: { trackId: string }) {
    const res = await this.provider.request<SpotifyApi.SingleTrackResponse>({
      method: Methods.GET,
      url: `tracks/${params.trackId}`,
    });
    return transformResponse(res);
  }
}

export class GetMultipleTracks extends LimitedGetEndpoint {
  async get(params: { trackIds: string[]; market?: string }) {
    const res = await this.provider.request<SpotifyApi.MultipleTracksResponse>({
      method: Methods.GET,
      url: 'tracks',
      params: {
        ids: params.trackIds.join(','),
      },
    });
    return transformResponse(res);
  }

  limit = 50;
}
export class GetUsersSavedTracks extends LimitedGetEndpoint {
  async get(params?: { limit?: number; market?: string; offset?: number }) {
    const res =
      await this.provider.request<SpotifyApi.UsersSavedTracksResponse>({
        method: Methods.GET,
        url: 'me/tracks',
        params,
      });
    return transformResponse(res);
  }

  limit = 50;
}

export class SaveTracksForUser extends PutEndpoint {
  async put(params: { trackIds: string[] }) {
    const res =
      await this.provider.request<SpotifyApi.SaveTracksForUserResponse>({
        method: Methods.PUT,
        url: '/me/tracks/contains',
        params: {
          ids: params.trackIds.join(','),
        },
      });
    return transformResponse(res);
  }
}

export class RemoveUsersSavedTracks extends DeleteEndpoint {
  async delete(params: { trackIds: string[] }) {
    const res =
      await this.provider.request<SpotifyApi.RemoveUsersSavedTracksResponse>({
        method: Methods.DELETE,
        url: 'me/tracks',
        params: {
          ids: params.trackIds.join(','),
        },
      });
    return transformResponse(res);
  }
}

export class CheckUsersSavedTracks extends GetEndpoint {
  async get(params: { trackIds: string[] }) {
    const res =
      await this.provider.request<SpotifyApi.CheckUsersSavedTracksResponse>({
        method: Methods.GET,
        url: 'me/tracks',
        params: {
          ids: params.trackIds.join(','),
        },
      });
    return transformResponse(res);
  }
}

export class GetAudioFeatures extends GetEndpoint {
  async get(params: { trackId: string }) {
    const res = await this.provider.request<SpotifyApi.AudioFeaturesResponse>({
      method: Methods.GET,
      url: `audio-features/${params.trackId}`,
    });
    return transformResponse(res);
  }
}
export class GetMultipleAudioFeatures extends LimitedGetEndpoint {
  async get(params: { trackIds: string[] }) {
    const res =
      await this.provider.request<SpotifyApi.MultipleAudioFeaturesResponse>({
        method: Methods.GET,
        url: 'audio-features',
        params: {
          ids: params.trackIds.join(','),
        },
      });
    return transformResponse(res);
  }
  limit = 100;
}

export class GetAudioAnalysis extends GetEndpoint {
  async get(params: { trackId: string }) {
    const res = await this.provider.request<SpotifyApi.AudioAnalysisResponse>({
      method: Methods.GET,
      url: `audio-analysis/${params.trackId}`,
    });
    return transformResponse(res);
  }
}

export class GetRecommendations extends GetEndpoint {
  async get(params: {
    seed_artists: string;
    seed_genres: string;
    seed_tracks: string;
    limit?: number;
    market?: string;
    max_acousticness?: number;
    max_danceability?: number;
    max_duration_ms?: number;
    max_energy?: number;
    max_instrumentalness?: number;
    max_key?: number;
    max_liveness?: number;
    max_loudness?: number;
    max_mode?: number;
    max_popularity?: number;
    max_speechiness?: number;
    max_tempo?: number;
    max_time_signature?: number;
    max_valence?: number;
    min_acousticness?: number;
    min_danceability?: number;
    min_duration_ms?: number;
    min_energy?: number;
    min_instrumentalness?: number;
    min_key?: number;
    min_liveness?: number;
    min_loudness?: number;
    min_mode?: number;
    min_popularity?: number;
    min_speechiness?: number;
    min_tempo?: number;
    min_time_signature?: number;
    min_valence?: number;
    target_acousticness?: number;
    target_danceability?: number;
    target_duration_ms?: number;
    target_energy?: number;
    target_instrumentalness?: number;
    target_key?: number;
    target_liveness?: number;
    target_loudness?: number;
    target_mode?: number;
    target_popularity?: number;
    target_speechiness?: number;
    target_tempo?: number;
    target_time_signature?: number;
    target_valence?: number;
  }) {
    const res =
      await this.provider.request<SpotifyApi.RecommendationsFromSeedsResponse>({
        method: Methods.GET,
        url: 'recommendations',
        params,
      });
    return transformResponse(res);
  }
}
