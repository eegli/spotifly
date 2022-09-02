import { Method, transformResponse } from '../../request';
import {
  AdditionalTypes,
  AsyncFnWithProvider,
  ContextUri,
  DeviceId,
  Market,
  Position,
  Uris,
} from '../../types';

export const getPlaybackState: AsyncFnWithProvider<
  SpotifyApi.CurrentlyPlayingResponse,
  unknown,
  AdditionalTypes & Market
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
  { play: boolean }
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
  SpotifyApi.CurrentlyPlayingResponse,
  unknown,
  AdditionalTypes & Market
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
  ContextUri & Uris & { offset: Record<string, unknown> } & Position
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
  number,
  { device_id: string }
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
