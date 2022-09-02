import * as Spotifly from '@spotifly/core';
import { mockDeep } from 'jest-mock-extended';

const audioFeatures: SpotifyApi.AudioFeaturesObject = {
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
};

type MockResponse =
  Spotifly.DataResponse<SpotifyApi.MultipleAudioFeaturesResponse>;

const mockResponse = (length: number): MockResponse => {
  return {
    data: {
      audio_features: Array.from({ length }, () => audioFeatures),
    },
    statusCode: 200,
    headers: {},
  };
};

const mockSpotify = mockDeep<Spotifly.SpotifyClient>();

// Return a mocked client whenever the client is initialized
jest.spyOn(Spotifly, 'initialize').mockReturnValue(mockSpotify);

// Mocking an ordinary method
mockSpotify.Tracks.getSeveralAudioFeatures.mockImplementation(ids => {
  return Promise.resolve(mockResponse(ids.length));
});

// Mocking a convenience method
mockSpotify.Tracks.getAllAudioFeatures.mockImplementation(ids => {
  return cb => {
    if (cb) cb(mockResponse(ids.length));
    return Promise.resolve([mockResponse(ids.length)]);
  };
});

test('my function', async () => {
  // Your code
  function getData() {
    const client = Spotifly.initialize({ accessToken: 'abc123' });
    return client.Tracks.getSeveralAudioFeatures(['2takc7B', '6hsak']);
  }
  // Assert anything!
  const res = await getData();
  expect(res.data.audio_features).toHaveLength(2);
});
