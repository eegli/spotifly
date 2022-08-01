import { AsyncFnWithProvider, Methods, transformResponse } from '../../request';

export const getSingleTrack: AsyncFnWithProvider<
  SpotifyApi.SingleTrackResponse,
  string,
  { market: string }
> = provider => async (trackId, params) =>
  transformResponse(
    await provider.request({
      method: Methods.GET,
      url: `tracks/${trackId}`,
      params,
    })
  );

export const getSeveralTracks: AsyncFnWithProvider<
  SpotifyApi.MultipleTracksResponse,
  string[],
  { market: string }
> = provider => async (trackIds, params) =>
  transformResponse(
    await provider.request({
      method: Methods.GET,
      url: 'tracks',
      params: {
        ...params,
        ids: trackIds.join(','),
      },
    })
  );

export const getSeveralTracksLimit = 50;

export const getUsersSavedTracks: AsyncFnWithProvider<
  SpotifyApi.UsersSavedTracksResponse,
  unknown,
  { limit: number; market: string; offset: number }
> = provider => async (_, params) =>
  transformResponse(
    await provider.request({
      method: Methods.GET,
      url: 'me/tracks',
      params,
    })
  );

export const getUsersSavedTracksLimit = 50;

export const saveTracksForUser: AsyncFnWithProvider<
  SpotifyApi.SaveTracksForUserResponse,
  string[]
> = provider => async trackIds =>
  transformResponse(
    await provider.request({
      method: Methods.PUT,
      url: 'me/tracks',
      params: {
        ids: trackIds.join(','),
      },
    })
  );

export const saveTracksForUserLimit = 50;

export const removeUsersSavedTracks: AsyncFnWithProvider<
  SpotifyApi.RemoveUsersSavedTracksResponse,
  string[]
> = provider => async trackIds =>
  transformResponse(
    await provider.request({
      method: Methods.DELETE,
      url: 'me/tracks',
      params: {
        ids: trackIds.join(','),
      },
    })
  );

export const removeUsersSavedTracksLimit = 50;

export const checkUsersSavedTracks: AsyncFnWithProvider<
  SpotifyApi.CheckUsersSavedTracksResponse,
  string[]
> = provider => async trackIds =>
  transformResponse(
    await provider.request({
      method: Methods.GET,
      url: 'me/tracks/contains',
      params: {
        ids: trackIds.join(','),
      },
    })
  );

export const checkUsersSavedTracksLimit = 50;

export const getSingleAudioFeatures: AsyncFnWithProvider<
  SpotifyApi.AudioFeaturesResponse,
  string
> = provider => async trackId =>
  transformResponse(
    await provider.request({
      method: Methods.GET,
      url: `audio-features/${trackId}`,
    })
  );

export const getSeveralAudioFeatures: AsyncFnWithProvider<
  SpotifyApi.MultipleAudioFeaturesResponse,
  string[]
> = provider => async trackIds =>
  transformResponse(
    await provider.request({
      method: Methods.GET,
      url: 'audio-features',
      params: {
        ids: trackIds.join(','),
      },
    })
  );

export const getSeveralAudioFeaturesLimit = 100;

export const getAudioAnalysis: AsyncFnWithProvider<
  SpotifyApi.AudioAnalysisResponse,
  string
> = provider => async trackId =>
  transformResponse(
    await provider.request({
      method: Methods.GET,
      url: `audio-analysis/${trackId}`,
    })
  );

export const getRecommendations: AsyncFnWithProvider<
  SpotifyApi.RecommendationsFromSeedsResponse,
  { seed_artists: string; seed_genres: string; seed_tracks: string },
  {
    limit: number;
    market: string;
    max_acousticness: number;
    max_danceability: number;
    max_duration_ms: number;
    max_energy: number;
    max_instrumentalness: number;
    max_key: number;
    max_liveness: number;
    max_loudness: number;
    max_mode: number;
    max_popularity: number;
    max_speechiness: number;
    max_tempo: number;
    max_time_signature: number;
    max_valence: number;
    min_acousticness: number;
    min_danceability: number;
    min_duration_ms: number;
    min_energy: number;
    min_instrumentalness: number;
    min_key: number;
    min_liveness: number;
    min_loudness: number;
    min_mode: number;
    min_popularity: number;
    min_speechiness: number;
    min_tempo: number;
    min_time_signature: number;
    min_valence: number;
    target_acousticness: number;
    target_danceability: number;
    target_duration_ms: number;
    target_energy: number;
    target_instrumentalness: number;
    target_key: number;
    target_liveness: number;
    target_loudness: number;
    target_mode: number;
    target_popularity: number;
    target_speechiness: number;
    target_tempo: number;
    target_time_signature: number;
    target_valence: number;
  }
> = provider => async (seed, params) =>
  transformResponse(
    await provider.request({
      method: Methods.GET,
      url: 'recommendations',
      params: { ...seed, ...params },
    })
  );
