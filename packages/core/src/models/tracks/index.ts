import { AuthInitOptions } from '../../abstract';
import * as factory from '../../factory';
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
  const MultipleTracks = new GetMultipleTracks(authInitOpts);
  const MultipleFeatures = new GetMultipleAudioFeatures(authInitOpts);

  return {
    SingleTrack: new GetSingleTrack(authInitOpts),
    MultipleTracks,
    Analysis: new GetAudioAnalysis(authInitOpts),
    Features: {
      get: new GetAudioFeatures(authInitOpts).get,
      getMultiple: MultipleFeatures.get,
    },
    Recommendations: new GetRecommendations(authInitOpts),
    UsersSaved: {
      get: GetUserSaved.get,
      save: new SaveTracksForUser(authInitOpts).put,
      remove: new RemoveUsersSavedTracks(authInitOpts).delete,
      check: new CheckUsersSavedTracks(authInitOpts).get,
    },
    extended: {
      allUserSavedTracks: factory.getAllFromPaginated(
        GetUserSaved.get,
        GetUserSaved.limit
      ),
      allTracks: factory.getAllFromLimited(
        MultipleTracks.get,
        'trackIds',
        MultipleTracks.limit
      ),
      allFeatures: factory.getAllFromLimited(
        MultipleFeatures.get,
        'trackIds',
        MultipleFeatures.limit
      ),
    },
  } as const;
}
