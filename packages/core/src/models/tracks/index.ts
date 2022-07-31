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
      extended: {
        getAll(ids: string[]) {
          return factory
            .forLimited(getMultipleTracks(provider), getMultipleTracksLimit)
            .bind(null, ids);
        },
      } as const,
    } as const,
    AudioAnalysis: {
      get: getAudioAnalysis(provider),
    } as const,
    AudioFeatures: {
      get: getSingleAudioFeatures(provider),
      getMultiple: getMultipleAudioFeatures(provider),
      extended: {
        getAll(ids: string[]) {
          return factory.forLimited(
            getMultipleAudioFeatures(provider).bind(null, ids),
            getMultipleAudioFeaturesLimit
          );
        },
      } as const,
    } as const,
    Recommendations: {
      get: getRecommendations(provider),
    } as const,
    UsersSaved: {
      get: getUsersSavedTracks(provider).bind(null, null),
      save: saveTracksForUser(provider),
      remove: removeUsersSavedTracks(provider),
      check: checkUsersSavedTracks(provider),
      extended: {
        getAll: factory.forPaginated(
          getUsersSavedTracks(provider).bind(null, null),
          getUsersSavedTracksLimit
        ),
      } as const,
    } as const,
  } as const;
}
