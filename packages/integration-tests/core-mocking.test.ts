import * as Spotifly from '@spotifly/core';
import { mockDeep } from 'jest-mock-extended';

const mockSpotify = mockDeep<Spotifly.SpotifyClient>();

type MockResponse =
  Spotifly.DataResponse<SpotifyApi.MultipleAudioFeaturesResponse>;

const mockResponse = (length: number): MockResponse => {
  return {
    data: {
      audio_features: Array.from({ length }, () => ({
        acousticness: 0.00242,
        analysis_url: 'https://api.spotify.com/v1/audio-analysis/2takc7B',
        danceability: 0.585,
        duration_ms: 237040,
        energy: 0.842,
        id: '2takc7B',
        instrumentalness: 0.00686,
        key: 9,
        liveness: 0.0866,
        loudness: -5.883,
        mode: 0,
        speechiness: 0.0556,
        tempo: 118.211,
        time_signature: 4,
        track_href: 'https://api.spotify.com/v1/tracks/2takc7B',
        type: 'audio_features',
        uri: 'spotify:track:2takc7B',
        valence: 0.428,
      })),
    },
    statusCode: 200,
    headers: {},
  };
};

jest.spyOn(Spotifly, 'initialize').mockReturnValue(mockSpotify);

// Mocking an ordinary method
mockSpotify.Tracks.AudioFeatures.getSeveral.mockImplementation(ids => {
  return Promise.resolve(mockResponse(ids.length));
});

// Mocking a convenience method
mockSpotify.Tracks.AudioFeatures.getAll.mockImplementation(ids => {
  return cb => {
    if (cb) cb(mockResponse(ids.length));
    return Promise.resolve([mockResponse(ids.length)]);
  };
});

describe('Test', () => {
  function getData() {
    const client = Spotifly.initialize({ accessToken: 'abc123' });
    return client.Tracks.AudioFeatures.getSeveral(['2takc7B', '6hsak']);
  }
  test('get data', async () => {
    const res = await getData();
    expect(res.data.audio_features).toHaveLength(2);
  });
});
