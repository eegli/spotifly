import { AuthInitOptions } from '../../abstract';
import { merge } from '../../utils';
import {
  GetSeveralTracks,
  GetSingleTrack,
  GetUsersSavedTracks,
  PutUserSavedTracks,
  RemoveUserSavedTracks,
} from './tracks';

export default function Tracks(authInitOpts: AuthInitOptions) {
  return {
    Single: new GetSingleTrack(authInitOpts),
    Several: new GetSeveralTracks(authInitOpts),
    UsersSaved: merge(
      new GetUsersSavedTracks(authInitOpts),
      new PutUserSavedTracks(authInitOpts),
      new RemoveUserSavedTracks(authInitOpts)
    ),
  } as const;
}

export const TrackModels = {
  GetSeveralTracks,
  GetSingleTrack,
  GetUsersSavedTracks,
  PutUserSavedTracks,
  RemoveUserSavedTracks,
};
