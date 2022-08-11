import type { DataResponse } from '@spotifly/core';
import * as Spotifly from '@spotifly/core';
import { mockDeep } from 'jest-mock-extended';

const mockSpotify = mockDeep<Spotifly.SpotifyClient>();

const mockResponse: DataResponse<SpotifyApi.CheckUsersSavedTracksResponse> = {
  data: [true, true, false],
  statusCode: 200,
  headers: {},
};

jest.spyOn(Spotifly, 'initialize').mockReturnValue(mockSpotify);

// Mocking an ordinary method
mockSpotify.Tracks.UsersSaved.check.mockImplementation(() => {
  return Promise.resolve(mockResponse);
});

// Mocking a convenience method
mockSpotify.Tracks.UsersSaved.checkAll.mockImplementation(() => {
  return cb => {
    if (cb) cb(mockResponse);
    return Promise.resolve([mockResponse]);
  };
});

describe('Test', () => {
  // ...
});
