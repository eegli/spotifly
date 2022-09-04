import { AsyncProvider } from '../../types';
import {
  addToQueue,
  getAvailableDevices,
  getCurrentlyPlayingTrack,
  getPlaybackState,
  getRecentlyPlayedTracks,
  getUsersQueue,
  pausePlayback,
  seekToPosition,
  setPlaybackVolume,
  setRepeatMode,
  skipToNext,
  skipToPrevious,
  startOrResumePlayback,
  togglePlaybackShuffle,
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
    getCurrentlyPlayingTrack: getCurrentlyPlayingTrack(provider).bind(
      null,
      null
    ),
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
    /**
     * Skips to next track in the user’s queue.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/skip-users-playback-to-next-track Skip To Next}
     */
    skipToNext: skipToNext(provider).bind(null, null),
    /**
     * Skips to previous track in the user’s queue.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/skip-users-playback-to-previous-track Skip To Previous}
     */
    skipToPrevious: skipToPrevious(provider).bind(null, null),
    /**
     * Seeks to the given position in the user’s currently playing track.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/seek-to-position-in-currently-playing-track Seek To Position}
     */
    seekToPosition: seekToPosition(provider),
    /**
     * Set the repeat mode for the user's playback. Options are repeat-track, repeat-context, and off
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/set-repeat-mode-on-users-playback Set Repeat Mode}
     */
    setRepeatMode: setRepeatMode(provider),
    /**
     * Set the volume for the user’s current playback device.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/set-volume-for-users-playback Set Playback Volume}
     */
    setPlaybackVolume: setPlaybackVolume(provider),
    /**
     * Toggle shuffle on or off for user’s playback.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/toggle-shuffle-for-users-playback Toggle Playback Shuffle}
     */
    togglePlaybackShuffle: togglePlaybackShuffle(provider),
    /**
     * Get tracks from the current user's recently played tracks. Note: Currently doesn't support podcast episodes.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-recently-played Get Recently Played Tracks}
     */
    getRecentlyPlayedTracks: getRecentlyPlayedTracks(provider).bind(null, null),
    /**
     * Get the list of objects that make up the user's queue.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-queue Get the User's Queue}
     */
    getUsersQueue: getUsersQueue(provider),
    /**
     * Add an item to the end of the user's current playback queue.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/add-to-queue Add Item to Playback Queue}
     */
    addToQueue: addToQueue(provider),
  };
}
