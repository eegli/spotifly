import { AxiosResponse } from 'axios';
import { MULTIPLE_ARTISTS } from './res-artists';
import { MULTIPLE_AUDIO_FEATURES } from './res-features';
import { USER_SAVED_TRACKS } from './res-library';

function fakeAxiosRes<T>(data: T): AxiosResponse<T> {
  return {
    data,
    status: 200,
    statusText: 'OK',
    headers: {},
    config: {},
  };
}

export const RES_MULTIPLE_ARTISTS = fakeAxiosRes(MULTIPLE_ARTISTS);
export const RES_USER_SAVED_TRACKS = fakeAxiosRes(USER_SAVED_TRACKS);
export const RES_MULTIPLE_AUDIO_FEATURES = fakeAxiosRes(
  MULTIPLE_AUDIO_FEATURES
);
