import * as factory from '../../factory';
import { AsyncProvider } from '../../types';
import {
  checkUsersSavedTracks,
  checkUsersSavedTracksLimit,
  getAudioAnalysis,
  getRecommendations,
  getSeveralAudioFeatures,
  getSeveralAudioFeaturesLimit,
  getSeveralTracks,
  getSeveralTracksLimit,
  getSingleAudioFeatures,
  getSingleTrack,
  getUsersSavedTracks,
  getUsersSavedTracksLimit,
  removeUsersSavedTracks,
  removeUsersSavedTracksLimit,
  saveTracksForUser,
  saveTracksForUserLimit,
} from './tracks';

export default function Tracks(provider: AsyncProvider) {
  return {
    Track: {
      /**
       * Get Spotify catalog information for a single track identified by its unique Spotify ID.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-track Get Track}
       */
      get: getSingleTrack(provider),
      /**
       * Get Spotify catalog information for multiple tracks based on their Spotify IDs.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-several-tracks Get Several Tracks}
       */
      getSeveral: getSeveralTracks(provider),
      /**
       * Get Spotify catalog information for multiple tracks based on their Spotify IDs.
       *
       * This method takes care of chunking the ids and making multiple requests to the Spotify API.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-several-tracks Get Several Tracks}
       */
      getAll: factory.forLimited(
        getSeveralTracks(provider),
        getSeveralTracksLimit
      ),
    },
    UsersSaved: {
      /**
       * Get a list of the songs saved in the current Spotify user's 'Your Music' library.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-saved-tracks User's Saved Tracks}
       */
      get: getUsersSavedTracks(provider).bind(null, null),
      /**
       * Get a list of the songs saved in the current Spotify user's 'Your Music' library.
       *
       * This method automatically handles pagination and fetches all items.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-saved-tracks User's Saved Tracks}
       */
      getAll: factory
        .forPaginated(getUsersSavedTracks(provider), getUsersSavedTracksLimit)
        .bind(null, null),
      /**
       * Save one or more tracks to the current user's 'Your Music' library.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/save-tracks-user Save Tracks for Current User}
       */
      save: saveTracksForUser(provider),
      /**
       * Save one or more tracks to the current user's 'Your Music' library.
       *
       * This method takes care of chunking the ids and making multiple requests to the Spotify API.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/save-tracks-user Save Tracks for Current User}
       */
      saveAll: factory.forLimited(
        saveTracksForUser(provider),
        saveTracksForUserLimit
      ),
      /**
       * Remove one or more tracks from the current user's 'Your Music' library.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/remove-tracks-user Remove Tracks for Current User}
       */
      remove: removeUsersSavedTracks(provider),
      /**
       * Remove one or more tracks from the current user's 'Your Music' library.
       *
       * This method takes care of chunking the ids and making multiple requests to the Spotify API.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/remove-tracks-user Remove Tracks for Current User}
       */
      removeAll: factory.forLimited(
        removeUsersSavedTracks(provider),
        removeUsersSavedTracksLimit
      ),
      /**
       * Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/check-users-saved-tracks Check User's Saved Tracks}
       */
      check: checkUsersSavedTracks(provider),
      /**
       * Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.
       *
       * This method takes care of chunking the ids and making multiple requests to the Spotify API.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/check-users-saved-tracks Check User's Saved Tracks}
       */
      checkAll: factory.forLimited(
        checkUsersSavedTracks(provider),
        checkUsersSavedTracksLimit
      ),
    },
    AudioFeatures: {
      /**
       * Get audio feature information for a single track identified by its unique Spotify ID.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-audio-features Get Track's Audio Features}
       */
      get: getSingleAudioFeatures(provider),
      /**
       * Get audio features for multiple tracks based on their Spotify IDs.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-several-audio-features Get Tracks' Audio Features}
       */
      getSeveral: getSeveralAudioFeatures(provider),
      /**
       * Get audio features for multiple tracks based on their Spotify IDs.
       *
       * This method takes care of chunking the ids and making multiple requests to the Spotify API.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-several-audio-features Get Tracks' Audio Features}
       */
      getAll: factory.forLimited(
        getSeveralAudioFeatures(provider),
        getSeveralAudioFeaturesLimit
      ),
    },
    AudioAnalysis: {
      /**
       * Get a low-level audio analysis for a track in the Spotify catalog. The audio analysis describes the track’s structure and musical content, including rhythm, pitch, and timbre.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-audio-analysis Get Track's Audio Analysis}
       */
      get: getAudioAnalysis(provider),
    },
    Recommendations: {
      /**
       * Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.

      For artists and tracks that are very new or obscure there might not be enough data to generate a list of tracks.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-recommendations Get Recommendations}
       */
      get: getRecommendations(provider),
    },
  } as const;
}
