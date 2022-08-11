import type { DataResponse } from '@spotifly/core';
import { MULTIPLE_ARTISTS } from './res-artists';
import { MULTIPLE_AUDIO_FEATURES } from './res-features';
import { USER_SAVED_TRACKS } from './res-library';

function fakeResponse<T>(data: T): DataResponse<T> {
  return {
    data,
    statusCode: 200,
    headers: {},
  };
}

export const RES_MULTIPLE_ARTISTS = fakeResponse(MULTIPLE_ARTISTS);
export const RES_USER_SAVED_TRACKS = fakeResponse(USER_SAVED_TRACKS);
export const RES_MULTIPLE_AUDIO_FEATURES = fakeResponse(
  MULTIPLE_AUDIO_FEATURES
);
