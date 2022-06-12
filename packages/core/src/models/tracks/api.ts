import { QueryParams, TypeFromV2 } from '../../query';

export type TrackObjectFull = SpotifyApi.TrackObjectFull;

export type SavedTrackObject = SpotifyApi.SavedTrackObject;

export type ParamsSavedTracks = TypeFromV2<
  QueryParams,
  null,
  'limit' | 'offset'
>;
