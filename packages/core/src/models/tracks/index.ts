import { AuthInitOptions } from '../../abstract';
import { getAllFromPaginated } from '../../factory';
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

  return {
    SingleTrack: new GetSingleTrack(authInitOpts),
    MultipleTracks: new GetMultipleTracks(authInitOpts),
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
      allUserSavedTracks: getAllFromPaginated(
        GetUserSaved.get,
        GetUserSaved.limit
      ),
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
