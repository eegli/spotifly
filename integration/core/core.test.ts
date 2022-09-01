import * as Spotify from '@spotifly/core';

const spotifyClient = Spotify.initialize({
  clientId: process.env.SPOTIFY_CLIENT_ID || '',
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET || '',
  refreshToken: process.env.SPOTIFY_REFRESH_TOKEN || '',
});

const trackIds = (length: number) =>
  Array.from({ length }, () => '0mWXMQ8hrrAJfxN7LG2Wsk');

const trackId = trackIds(1)[0];
const trackIds50 = trackIds(50);
const trackIds51 = trackIds(51);

describe('Core', () => {
  test('Tracks', async () => {
    {
      const res = await spotifyClient.Tracks.getSingleTrack(trackId);
      expect(res.data.id).toEqual(trackId);
    }
    {
      const res = await spotifyClient.Tracks.getSeveralTracks(trackIds50);
      expect(res.data.tracks.map(t => t.id)).toEqual(trackIds50);
    }
    {
      const res = await spotifyClient.Tracks.getAllTracks(trackIds51)();
      expect(res.flatMap(({ data }) => data.tracks.map(t => t.id))).toEqual(
        trackIds51
      );
    }
  });
});
