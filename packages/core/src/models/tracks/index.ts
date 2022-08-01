import * as factory from '../../factory';
import { AuthProvider } from '../../provider';
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

export default function Tracks(provider: AuthProvider) {
  return {
    Track: {
      get: getSingleTrack(provider),
      getSeveral: getSeveralTracks(provider),
      getAll: factory.forLimited(
        getSeveralTracks(provider),
        getSeveralTracksLimit
      ),
    } as const,
    AudioAnalysis: {
      get: getAudioAnalysis(provider),
    } as const,
    AudioFeatures: {
      get: getSingleAudioFeatures(provider),
      getSeveral: getSeveralAudioFeatures(provider),
      getAll: factory.forLimited(
        getSeveralAudioFeatures(provider),
        getSeveralAudioFeaturesLimit
      ),
    } as const,
    Recommendations: {
      get: getRecommendations(provider),
    } as const,
    UsersSaved: {
      get: getUsersSavedTracks(provider).bind(null, null),
      getAll: factory
        .forPaginated(getUsersSavedTracks(provider), getUsersSavedTracksLimit)
        .bind(null, null),
      save: saveTracksForUser(provider),
      saveAll: factory.forLimited(
        saveTracksForUser(provider),
        saveTracksForUserLimit
      ),
      remove: removeUsersSavedTracks(provider),
      removeAll: factory.forLimited(
        removeUsersSavedTracks(provider),
        removeUsersSavedTracksLimit
      ),
      check: checkUsersSavedTracks(provider),
      checkAll: factory.forLimited(
        checkUsersSavedTracks(provider),
        checkUsersSavedTracksLimit
      ),
    } as const,
  } as const;
}
