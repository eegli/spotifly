import * as factory from '../../factory';
import { AuthProvider } from '../../provider';
import {
  checkUsersSavedTracks,
  getMultipleAudioFeatures,
  getMultipleAudioFeaturesLimit,
  getMultipleTracks,
  getMultipleTracksLimit,
  getRecommendations,
  getSingleAudioAnalysis,
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
      get: getSingleAudioAnalysis(provider),
    },
    AudioFeatures: {
      get: getSingleAudioFeatures(provider),
      getMultiple: getMultipleAudioFeatures(provider),
    },
    Recommendations: {
      get: getRecommendations(provider),
    },
    UsersSaved: {
      get: getUsersSavedTracks(provider),
      save: saveTracksForUser(provider),
      remove: removeUsersSavedTracks(provider),
      check: checkUsersSavedTracks(provider),
    },
    extended: {
      allUserSavedTracks: factory.getAllFromPaginated(
        getUsersSavedTracks(provider),
        getUsersSavedTracksLimit
      ),
      allTracks: factory.getAllFromLimited(
        getMultipleTracks(provider),
        'trackIds',
        getMultipleTracksLimit
      ),
      allAudioFeatures: factory.getAllFromLimited(
        getMultipleAudioFeatures(provider),
        'trackIds',
        getMultipleAudioFeaturesLimit
      ),
    },
  } as const;
}
