import { QueryParams, TypeFromV2 } from '../../query';

export type TrackObjectFull = SpotifyApi.TrackObjectFull;
export type UsersSavedTracksResponse = SpotifyApi.UsersSavedTracksResponse;
export type SavedTrackObject = SpotifyApi.SavedTrackObject;

export type ParamsSavedTracks = TypeFromV2<
  QueryParams,
  null,
  'limit' | 'offset'
>;

export interface TracksAPI {
  tracks(...ids: string[]): {
    get: () => Promise<TrackObjectFull[]>;
    getAll: () => Promise<TrackObjectFull[][]>;
    iter: (chunkSize: number) => AsyncGenerator<TrackObjectFull[]>;
  };
  userSavedTracks: {
    get: (params: ParamsSavedTracks) => Promise<UsersSavedTracksResponse>;
    getAll: () => Promise<SavedTrackObject[]>;
    iter: (chunkSize: number) => AsyncGenerator<UsersSavedTracksResponse>;
  };
}
