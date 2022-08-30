import { AsyncProvider } from '../../types';
import {
  getAvailableDevices,
  getPlaybackState,
  transferPlayback,
} from './player';

export default function Player(provider: AsyncProvider) {
  return {
    /**
     * Get information about the user’s current playback state, including track or episode, progress, and active device.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-information-about-the-users-current-playback Get Playback State}
     */
    getPlaybackState: getPlaybackState(provider).bind(null, null),
    /**
     * Transfer playback to a new device and determine if it should start playing.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/transfer-a-users-playback Transfer Playback}
     */
    transferPlayback: transferPlayback(provider),
    /**
     * Get information about a user’s available devices.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-a-users-available-devices Get Available Devices}
     */
    getAvailableDevices: getAvailableDevices(provider),
  };
}
