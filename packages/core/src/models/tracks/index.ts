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
    get: getSingleTrack(provider),
    getMultiple: getMultipleTracks(provider),
    AudioAnalysis: {
      get: getAudioAnalysis(provider),
    } as const,
    AudioFeatures: {
      get: getSingleAudioFeatures(provider),
      getMultiple: getMultipleAudioFeatures(provider),
    } as const,
    Recommendations: {
      get: getRecommendations(provider),
    } as const,
    UsersSaved: {
      get: getUsersSavedTracks(provider),
      save: saveTracksForUser(provider),
      remove: removeUsersSavedTracks(provider),
      check: checkUsersSavedTracks(provider),
    } as const,
    extended: {
      getAllUserSavedTracks: factory.getAllFromPaginated(
        getUsersSavedTracks(provider),
        getUsersSavedTracksLimit
      ),
      getAllTracks: factory.getAllFromLimited(
        getMultipleTracks(provider),
        'trackIds',
        getMultipleTracksLimit
      ),
      getAllAudioFeatures: factory.getAllFromLimited(
        getMultipleAudioFeatures(provider),
        'trackIds',
        getMultipleAudioFeaturesLimit
      ),
    } as const,
  } as const;
}
