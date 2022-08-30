import { Method, transformResponse } from '../../request';
import {
  AdditionalTypes,
  AsyncFnWithProvider,
  DeviceId,
  Market,
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
  SpotifyApi.UserDevicesResponse,
  unknown
> = provider => async () =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'me/player/devices',
    })
  );
