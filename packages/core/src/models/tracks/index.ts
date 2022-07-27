import { AuthInitOptions } from '../../abstract';
import {
  GetSeveralTracks,
  GetSingleTrack,
  GetUsersSavedTracks,
  PutUserSavedTracks,
} from './tracks';

export default function Tracks(authInitOpts: AuthInitOptions) {
  return {
    Single: new GetSingleTrack(authInitOpts),
    Several: new GetSeveralTracks(authInitOpts),
    UsersSaved: Object.assign(
      {},
      new GetUsersSavedTracks(authInitOpts),
      new PutUserSavedTracks(authInitOpts)
    ),
  } as const;
}

export const Models = {
  GetSeveralTracks,
  GetSingleTrack,
  GetUsersSavedTracks,
  PutUserSavedTracks,
};
