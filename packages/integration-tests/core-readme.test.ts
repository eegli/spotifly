import * as Spotifly from '@spotifly/core';
import { mockDeep } from 'jest-mock-extended';

const mockSpotify = mockDeep<Spotifly.SpotifyClient>();

type MockResponse =
  Spotifly.DataResponse<SpotifyApi.MultipleAudioFeaturesResponse>;

const mockResponse: MockResponse = {
  data: {
    audio_features: [
      {
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
      },
    ],
  },
  statusCode: 200,
  headers: {},
};

jest.spyOn(Spotifly, 'initialize').mockReturnValue(mockSpotify);

// Mocking an ordinary method
mockSpotify.Tracks.AudioFeatures.getSeveral.mockImplementation(() => {
  return Promise.resolve(mockResponse);
});

// Mocking a convenience method
mockSpotify.Tracks.AudioFeatures.getAll.mockImplementation(() => {
  return cb => {
    if (cb) cb(mockResponse);
    return Promise.resolve([mockResponse]);
  };
});

describe('Test', () => {
  // ...
});

describe('Core readme', () => {
  test('general example', async () => {
    {
      const spotifyClient = Spotifly.initialize({
        clientId: process.env.SPOTIFY_CLIENT_ID || '',
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET || '',
        refreshToken: process.env.SPOTIFY_REFRESH_TOKEN || '',
      });

      console.log(spotifyClient);

      spotifyClient.Tracks.Track.get('10oKSzRcwbZsog2uq2gb4b')
        .then(res => {
          return res.data.artists.map(artist => artist.id);
        })
        .then(artistIds => {
          return spotifyClient.Artists.Artist.getSeveral(artistIds);
        })
        .then(res => {
          console.log(res.data.artists);
        });

      spotifyClient.Tracks.UsersSaved.getAll()()
        .then(res => {
          return res.map(res => res.data.items);
        })
        .then(library => {
          console.log(library);
        });
    }
    {
      const spotifyClient = Spotifly.initialize({
        accessToken: 'abc123',
      });
    }
  });
});
