import * as factory from '../../factory';
import { AuthProvider } from '../../provider';
import {
  checkUsersSavedTracks,
  getAudioAnalysis,
  getMultipleAudioFeatures,
  getMultipleAudioFeaturesLimit,
  getMultipleTracks,
  getMultipleTracksLimit,
  getRecommendations,
  getSingleAudioFeatures,
  getSingleTrack,
  getUsersSavedTracks,
  getUsersSavedTracksLimit,
  removeUsersSavedTracks,
  saveTracksForUser,
} from './tracks';

export default function Tracks(provider: AuthProvider) {
  return {
    Track: {
      get: getSingleTrack(provider),
      getMultiple: getMultipleTracks(provider),
      getAll: (ids: string[]) =>
        factory
          .forLimited(getMultipleTracks(provider), getMultipleTracksLimit)
          .bind(null, ids),
    } as const,
    AudioAnalysis: {
      get: getAudioAnalysis(provider),
    } as const,
    AudioFeatures: {
      get: getSingleAudioFeatures(provider),
      getMultiple: getMultipleAudioFeatures(provider),
      getAll: (ids: string[]) =>
        factory.forLimited(
          getMultipleAudioFeatures(provider).bind(null, ids),
          getMultipleAudioFeaturesLimit
        ),
    } as const,
    Recommendations: {
      get: getRecommendations(provider),
    } as const,
    UsersSaved: {
      get: getUsersSavedTracks(provider).bind(null, null),
      getAll: factory.forPaginated(
        getUsersSavedTracks(provider).bind(null, null),
        getUsersSavedTracksLimit
      ),
      save: saveTracksForUser(provider),
      remove: removeUsersSavedTracks(provider),
      check: checkUsersSavedTracks(provider),
    } as const,
  } as const;
}
