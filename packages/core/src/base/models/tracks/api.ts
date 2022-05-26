import { ReqIds, ReqLimit } from '../../../query';

export type SavedTrack = SpotifyApi.SavedTrackObject;
export type FullTrack = SpotifyApi.TrackObjectFull;
export type FullArtist = SpotifyApi.ArtistObjectFull;

export type SavedTracksParams = {
  limit?: number;
  offset?: number;
};
export type SavedTracksResponse = SpotifyApi.UsersSavedTracksResponse;
export type SavedTrackObject = SpotifyApi.SavedTrackObject;

export type GetSeveralTracks = ReqIds & Partial<ReqLimit>;

export interface TracksAPI {
  userSavedTracks: {
    get: (params: SavedTracksParams) => Promise<SavedTracksResponse>;
    getAll: () => Promise<SavedTrackObject[]>;
    iter: ({
      chunkSize,
    }: {
      chunkSize?: number;
    }) => AsyncGenerator<SavedTracksResponse>;
  };
}
