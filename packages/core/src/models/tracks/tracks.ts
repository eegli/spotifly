import { Method, transformResponse } from '../../request';
import type { AsyncFnWithProvider } from '../../types';
import type { Params, TrackId } from '../params';

export const getTrack: AsyncFnWithProvider<
  SpotifyApi.SingleTrackResponse,
  TrackId,
  Pick<Params, 'market'>
> = provider => async (trackId, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: `tracks/${trackId}`,
      params,
    }),
  );

export const getSeveralTracks: AsyncFnWithProvider<
  SpotifyApi.MultipleTracksResponse,
  TrackId[],
  Pick<Params, 'market'>
> = provider => async (trackIds, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'tracks',
      params: {
        ...params,
        ids: trackIds.join(','),
      },
    }),
  );

export const SEVERAL_TRACKS_LIMIT = 50;

export const USER_SAVED_LIMIT = 50;

export const getUsersSavedTracks: AsyncFnWithProvider<
  SpotifyApi.UsersSavedTracksResponse,
  unknown,
  Pick<Params, 'market' | 'limit' | 'offset'>
> = provider => async (_, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'me/tracks',
      params,
    }),
  );

export const saveTracksForUser: AsyncFnWithProvider<
  SpotifyApi.SaveTracksForUserResponse,
  TrackId[]
> = provider => async trackIds =>
  transformResponse(
    await provider.request({
      method: Method.PUT,
      url: 'me/tracks',
      params: {
        ids: trackIds.join(','),
      },
    }),
  );

export const removeUsersSavedTracks: AsyncFnWithProvider<
  SpotifyApi.RemoveUsersSavedTracksResponse,
  TrackId[]
> = provider => async trackIds =>
  transformResponse(
    await provider.request({
      method: Method.DELETE,
      url: 'me/tracks',
      params: {
        ids: trackIds.join(','),
      },
    }),
  );

export const checkUsersSavedTracks: AsyncFnWithProvider<
  SpotifyApi.CheckUsersSavedTracksResponse,
  TrackId[]
> = provider => async trackIds =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'me/tracks/contains',
      params: {
        ids: trackIds.join(','),
      },
    }),
  );

export const getAudioFeatures: AsyncFnWithProvider<
  SpotifyApi.AudioFeaturesResponse,
  TrackId
> = provider => async trackId =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: `audio-features/${trackId}`,
    }),
  );

export const getSeveralAudioFeatures: AsyncFnWithProvider<
  SpotifyApi.MultipleAudioFeaturesResponse,
  TrackId[]
> = provider => async trackIds =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'audio-features',
      params: {
        ids: trackIds.join(','),
      },
    }),
  );

export const SEVERAL_AUDIO_FEATURES_LIMIT = 100;

export const getAudioAnalysis: AsyncFnWithProvider<
  SpotifyApi.AudioAnalysisResponse,
  TrackId
> = provider => async trackId =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: `audio-analysis/${trackId}`,
    }),
  );

export const getRecommendations: AsyncFnWithProvider<
  SpotifyApi.RecommendationsFromSeedsResponse,
  {
    seed_artists: string[];
    seed_genres: string[];
    seed_tracks: string[];
  },
  Pick<Params, 'market' | 'limit'> & {
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
> =
  provider =>
  async ({ seed_artists, seed_genres, seed_tracks }, params) =>
    transformResponse(
      await provider.request({
        method: Method.GET,
        url: 'recommendations',
        params: {
          seed_artists: seed_artists.join(','),
          seed_genres: seed_genres.join(','),
          seed_tracks: seed_tracks.join(','),
          ...params,
        },
      }),
    );
