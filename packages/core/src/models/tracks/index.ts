import * as factory from '../../factory';
import { AsyncProvider } from '../../types';
import {
  checkUsersSavedTracks,
  getAudioAnalysis,
  getAudioFeatures,
  getRecommendations,
  getSeveralAudioFeatures,
  getSeveralTracks,
  getTrack,
  getUsersSavedTracks,
  removeUsersSavedTracks,
  saveTracksForUser,
  SEVERAL_AUDIO_FEATURES_LIMIT,
  SEVERAL_TRACKS_LIMIT,
  USER_SAVED_LIMIT,
} from './tracks';

export default function Tracks(provider: AsyncProvider) {
  return {
    /**
     * Get Spotify catalog information for a single track identified by its unique Spotify ID.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-track Get Track}
     */
    getTrack: getTrack(provider),
    /**
     * Get Spotify catalog information for multiple tracks based on their Spotify IDs.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-several-tracks Get Several Tracks}
     */
    getSeveralTracks: getSeveralTracks(provider),
    /**
     * Get Spotify catalog information for multiple tracks based on their Spotify IDs.
     *
     * This method takes care of chunking the ids and making multiple requests to the Spotify API.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-several-tracks Get Several Tracks}
     */
    getAllTracks: factory.handleLimited(
      getSeveralTracks(provider),
      SEVERAL_TRACKS_LIMIT,
    ),
    /**
     * Get a list of the songs saved in the current Spotify user's 'Your Music' library.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-saved-tracks User's Saved Tracks}
     */
    getUsersSavedTracks: getUsersSavedTracks(provider).bind(null, null),
    /**
     * Get a list of the songs saved in the current Spotify user's 'Your Music' library.
     *
     * This method automatically handles pagination and fetches all items.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-saved-tracks User's Saved Tracks}
     */
    getAllUsersSavedTracks: factory
      .resolveOffsetPaginated(getUsersSavedTracks(provider), USER_SAVED_LIMIT)
      .bind(null, null),
    /**
     * Save one or more tracks to the current user's 'Your Music' library.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/save-tracks-user Save Tracks for Current User}
     */
    saveTracksForUser: saveTracksForUser(provider),
    /**
     * Save one or more tracks to the current user's 'Your Music' library.
     *
     * This method takes care of chunking the ids and making multiple requests to the Spotify API.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/save-tracks-user Save Tracks for Current User}
     */
    saveAllTracksForUser: factory.handleLimited(
      saveTracksForUser(provider),
      USER_SAVED_LIMIT,
    ),
    /**
     * Remove one or more tracks from the current user's 'Your Music' library.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/remove-tracks-user Remove Tracks for Current User}
     */
    removeUsersSavedTracks: removeUsersSavedTracks(provider),
    /**
     * Remove one or more tracks from the current user's 'Your Music' library.
     *
     * This method takes care of chunking the ids and making multiple requests to the Spotify API.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/remove-tracks-user Remove Tracks for Current User}
     */
    removeAllUsersTracksForUser: factory.handleLimited(
      removeUsersSavedTracks(provider),
      USER_SAVED_LIMIT,
    ),
    /**
     * Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/check-users-saved-tracks Check User's Saved Tracks}
     */
    checkUsersSavedTracks: checkUsersSavedTracks(provider),
    /**
     * Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.
     *
     * This method takes care of chunking the ids and making multiple requests to the Spotify API.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/check-users-saved-tracks Check User's Saved Tracks}
     */
    checkAllUsersSavedTracks: factory.handleLimited(
      checkUsersSavedTracks(provider),
      USER_SAVED_LIMIT,
    ),
    /**
     * Get audio feature information for a single track identified by its unique Spotify ID.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-audio-features Get Track's Audio Features}
     */
    getAudioFeatures: getAudioFeatures(provider),
    /**
     * Get audio features for multiple tracks based on their Spotify IDs.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-several-audio-features Get Tracks' Audio Features}
     */
    getSeveralAudioFeatures: getSeveralAudioFeatures(provider),
    /**
     * Get audio features for multiple tracks based on their Spotify IDs.
     *
     * This method takes care of chunking the ids and making multiple requests to the Spotify API.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-several-audio-features Get Tracks' Audio Features}
     */
    getAllAudioFeatures: factory.handleLimited(
      getSeveralAudioFeatures(provider),
      SEVERAL_AUDIO_FEATURES_LIMIT,
    ),
    /**
     * Get a low-level audio analysis for a track in the Spotify catalog. The audio analysis describes the track’s structure and musical content, including rhythm, pitch, and timbre.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-audio-analysis Get Track's Audio Analysis}
     */
    getAudioAnalysis: getAudioAnalysis(provider),
    /**
       * Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.

      For artists and tracks that are very new or obscure there might not be enough data to generate a list of tracks.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-recommendations Get Recommendations}
       */
    getRecommendations: getRecommendations(provider),
  };
}
