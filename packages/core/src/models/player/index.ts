import { AsyncProvider } from '../../types';
import {
  getAvailableDevices,
  getCurrentlyPlayingTrack,
  getPlaybackState,
  pausePlayback,
  startOrResumePlayback,
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
    /**
     * Get the object currently being played on the user's Spotify account.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-the-users-currently-playing-track Get Currently Playing Track}
     */
    getCurrentlyPlayingTrack: getCurrentlyPlayingTrack(provider),
    /**
     * Start a new context or resume current playback on the user's active device.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/start-a-users-playback Start/Resume Playback}
     */
    startOrResumePlayback: startOrResumePlayback(provider).bind(null, null),
    /**
     * Pause playback on the user's account
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/pause-a-users-playback Pause Playback}
     */
    pausePlayback: pausePlayback(provider).bind(null, null),
  };
}
