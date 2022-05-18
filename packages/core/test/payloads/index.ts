import { AxiosResponse } from 'axios';
import UserSavedTracks1 from './user_saved_tracks_1.json';
import UserSavedTracks2 from './user_saved_tracks_2.json';

function fakeAxiosResponse<T>(payload: T): AxiosResponse<T> {
  return {
    status: 200,
    statusText: 'ok',
    headers: {},
    config: {},
    data: payload,
  };
}

export default {
  userSavedTracks1: fakeAxiosResponse(
    UserSavedTracks1 as SpotifyApi.UsersSavedTracksResponse
  ),
  userSavedTracks2: fakeAxiosResponse(
    UserSavedTracks2 as SpotifyApi.UsersSavedTracksResponse
  ),
};
