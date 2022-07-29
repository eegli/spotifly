import {
  Methods,
  transformResponse,
  WithProvider,
  WithProviderOptional,
} from '../../request';

export const getSingleTrack: WithProvider<
  { trackId: string },
  SpotifyApi.SingleTrackResponse
> = provider => async params =>
  transformResponse(
    await provider.request({
      method: Methods.GET,
      url: `tracks/${params.trackId}`,
    })
  );

export const getMultipleTracks: WithProvider<
  { trackIds: string[]; market?: string },
  SpotifyApi.MultipleTracksResponse
> = provider => async params =>
  transformResponse(
    await provider.request({
      method: Methods.GET,
      url: 'tracks',
      params: {
        ids: params.trackIds.join(','),
      },
    })
  );

export const getMultipleTracksLimit = 50;

export const getUsersSavedTracks: WithProviderOptional<
  { limit?: number; market?: string; offset?: number } | undefined,
  SpotifyApi.UsersSavedTracksResponse
> = provider => async params =>
  transformResponse(
    await provider.request({
      method: Methods.GET,
      url: 'me/tracks',
      params,
    })
  );

export const getUsersSavedTracksLimit = 50;

export const saveTracksForUser: WithProvider<
  { trackIds: string[] },
  SpotifyApi.SaveTracksForUserResponse
> = provider => async params =>
  transformResponse(
    await provider.request({
      method: Methods.PUT,
      url: 'me/tracks',
      params: {
        ids: params.trackIds.join(','),
      },
    })
  );

export const saveTracksForUserLimit = 50;

export const removeUsersSavedTracks: WithProvider<
  { trackIds: string[] },
  SpotifyApi.RemoveUsersSavedTracksResponse
> = provider => async params =>
  transformResponse(
    await provider.request({
      method: Methods.DELETE,
      url: 'me/tracks',
      params: {
        ids: params.trackIds.join(','),
      },
    })
  );

export const removeUsersSavedTracksLimit = 50;

export const checkUsersSavedTracks: WithProvider<
  { trackIds: string[] },
  SpotifyApi.CheckUsersSavedTracksResponse
> = provider => async params =>
  transformResponse(
    await provider.request({
      method: Methods.GET,
      url: 'me/tracks/contains',
      params: {
        ids: params.trackIds.join(','),
      },
    })
  );

export const checkUsersSavedTracksLimit = 50;

export const getSingleAudioFeatures: WithProvider<
  { trackId: string },
  SpotifyApi.AudioFeaturesResponse
> = provider => async params =>
  transformResponse(
    await provider.request({
      method: Methods.GET,
      url: `audio-features/${params.trackId}`,
    })
  );

export const getMultipleAudioFeatures: WithProvider<
  { trackIds: string[] },
  SpotifyApi.MultipleAudioFeaturesResponse
> = provider => async params =>
  transformResponse(
    await provider.request({
      method: Methods.GET,
      url: 'audio-features',
      params: {
        ids: params.trackIds.join(','),
      },
    })
  );

export const getMultipleAudioFeaturesLimit = 100;

export const getAudioAnalysis: WithProvider<
  { trackId: string },
  SpotifyApi.AudioAnalysisResponse
> = provider => async params =>
  transformResponse(
    await provider.request({
      method: Methods.GET,
      url: `audio-analysis/${params.trackId}`,
    })
  );

export const getRecommendations: WithProvider<
  {
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
  },
  SpotifyApi.RecommendationsFromSeedsResponse
> = provider => async params =>
  transformResponse(
    await provider.request({
      method: Methods.GET,
      url: 'recommendations',
      params,
    })
  );
