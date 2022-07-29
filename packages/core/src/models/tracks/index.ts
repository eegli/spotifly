import { AuthInitOptions } from '../../abstract';
import * as factory from '../../factory';
import { merge } from '../../utils';
import {
  CheckUsersSavedTracks,
  GetAudioAnalysis,
  GetAudioFeatures,
  GetMultipleAudioFeatures,
  GetMultipleTracks,
  GetRecommendations,
  GetSingleTrack,
  GetUsersSavedTracks,
  RemoveUsersSavedTracks,
  SaveTracksForUser,
} from './tracks';

export default function Tracks(authInitOpts: AuthInitOptions) {
  const GetUserSaved = new GetUsersSavedTracks(authInitOpts);
  const GetMultiple = new GetMultipleTracks(authInitOpts);

  return {
    SingleTrack: new GetSingleTrack(authInitOpts),
    MultipleTracks: GetMultiple,
    Analysis: new GetAudioAnalysis(authInitOpts),
    Features: {
      get: new GetAudioFeatures(authInitOpts).get,
      getMultiple: new GetMultipleAudioFeatures(authInitOpts).get,
    },
    Recommendations: new GetRecommendations(authInitOpts),
    UsersSaved: merge(GetUserSaved, {
      save: new SaveTracksForUser(authInitOpts).put,
      remove: new RemoveUsersSavedTracks(authInitOpts).delete,
      check: new CheckUsersSavedTracks(authInitOpts).get,
    }),
    extended: {
      allUserSavedTracks: factory.getAllFromPaginated(
        GetUserSaved.get,
        GetUserSaved.limit
      ),
      allTracks: factory.getAllFromLimited(
        GetMultiple.get,
        'trackIds',
        GetMultiple.limit
      ),
      allFeatures: null,
    },
  } as const;
}

export const TrackModels = {
  CheckUsersSavedTracks,
  GetAudioAnalysis,
  GetAudioFeatures,
  GetMultipleAudioFeatures,
  GetMultipleTracks,
  GetRecommendations,
  GetSingleTrack,
  GetUsersSavedTracks,
  RemoveUsersSavedTracks,
  SaveTracksForUser,
};
