import { Method, transformResponse } from '../../request';
import {
  AsyncFnWithProvider,
  DeviceId,
  Params,
  PositionMS,
  Uri,
  VolumePercent,
} from '../../types';

export const getPlaybackState: AsyncFnWithProvider<
  SpotifyApi.CurrentlyPlayingResponse,
  unknown,
  Pick<Params, 'additional_types' | 'market'>
> = provider => async (_, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'me/player',
      params,
    })
  );

export const transferPlayback: AsyncFnWithProvider<
  SpotifyApi.VoidResponse,
  [DeviceId],
  Pick<Params, 'play'>
> = provider => async (device_ids, data) =>
  transformResponse(
    await provider.request({
      method: Method.PUT,
      url: 'me/player',
      data: { ...data, device_ids },
    })
  );

export const getAvailableDevices: AsyncFnWithProvider<
  SpotifyApi.UserDevicesResponse
> = provider => async () =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'me/player/devices',
    })
  );

export const getCurrentlyPlayingTrack: AsyncFnWithProvider<
  SpotifyApi.CurrentPlaybackResponse,
  unknown,
  Pick<Params, 'additional_types' | 'market'>
> = provider => async (_, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'me/player/currently-playing',
      params,
    })
  );

export const startOrResumePlayback: AsyncFnWithProvider<
  SpotifyApi.VoidResponse,
  unknown,
  DeviceId,
  Pick<Params, 'context_uri' | 'uris' | 'position_ms'> & {
    offset: Record<string, unknown>;
  }
> = provider => async (_, device_id, data) =>
  transformResponse(
    await provider.request({
      method: Method.PUT,
      url: 'me/player/play',
      params: {
        device_id,
      },
      data,
    })
  );

const playback: (
  url: string,
  method?: Method
) => AsyncFnWithProvider<SpotifyApi.VoidResponse, DeviceId> =
  (url, method = Method.POST) =>
  provider =>
  async device_id =>
    transformResponse(
      await provider.request({
        method,
        url,
        params: {
          device_id,
        },
      })
    );

export const pausePlayback = playback('me/player/pause', Method.PUT);
export const skipToNext = playback('me/player/next');
export const skipToPrevious = playback('me/player/previous');

export const seekToPosition: AsyncFnWithProvider<
  SpotifyApi.VoidResponse,
  PositionMS,
  Pick<Params, 'device_id'>
> = provider => async (position_ms, params) =>
  transformResponse(
    await provider.request({
      method: Method.PUT,
      url: 'me/player/seek',
      params: {
        ...params,
        position_ms,
      },
    })
  );

export const setRepeatMode: AsyncFnWithProvider<
  SpotifyApi.VoidResponse,
  string, // TODO fix: 'track' | 'context' | 'off'
  Pick<Params, 'device_id'>
> = provider => async (state, params) =>
  transformResponse(
    await provider.request({
      method: Method.PUT,
      url: 'me/player/repeat',
      params: {
        ...params,
        state,
      },
    })
  );

export const setPlaybackVolume: AsyncFnWithProvider<
  SpotifyApi.VoidResponse,
  VolumePercent,
  Pick<Params, 'device_id'>
> = provider => async (volume_percent, params) =>
  transformResponse(
    await provider.request({
      method: Method.PUT,
      url: 'me/player/volume',
      params: {
        ...params,
        volume_percent,
      },
    })
  );

export const togglePlaybackShuffle: AsyncFnWithProvider<
  SpotifyApi.VoidResponse,
  Pick<Params, 'state'>,
  Pick<Params, 'device_id'>
> = provider => async (state, deviceId) =>
  transformResponse(
    await provider.request({
      method: Method.PUT,
      url: 'me/player/shuffle',
      params: {
        ...state,
        ...deviceId,
      },
    })
  );

export const getRecentlyPlayedTracks: AsyncFnWithProvider<
  SpotifyApi.UsersRecentlyPlayedTracksResponse,
  unknown,
  Pick<Params, 'limit'> & { after: number; before: number }
> = provider => async (_, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'me/player/recently-played',
      params,
    })
  );

export const getUsersQueue: AsyncFnWithProvider<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any // TODO
> = provider => async () =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'me/player/queue',
    })
  );

export const addToQueue: AsyncFnWithProvider<
  SpotifyApi.AddToQueueResponse,
  Uri,
  Pick<Params, 'device_id'>
> = provider => async (uri, params) =>
  transformResponse(
    await provider.request({
      method: Method.POST,
      url: 'me/player/queue',
      params: {
        ...params,
        uri,
      },
    })
  );
