import * as Spotifly from '@spotifly/core';

describe.skip('Core readme', () => {
  test('general example', async () => {
    {
      const spotifyClient = Spotifly.initialize({
        clientId: process.env.SPOTIFY_CLIENT_ID || '',
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET || '',
        refreshToken: process.env.SPOTIFY_REFRESH_TOKEN || '',
      });

      await spotifyClient.Tracks.Track.get('10oKSzRcwbZsog2uq2gb4b')
        .then(res => {
          return res.data.artists.map(artist => artist.id);
        })
        .then(artistIds => {
          return spotifyClient.Artists.Artist.getSeveral(artistIds);
        })
        .then(res => {
          console.log(res.data.artists);
        });

      await spotifyClient.Tracks.UsersSaved.getAll()()
        .then(res => {
          return res.map(res => res.data.items);
        })
        .then(library => {
          console.log(library);
        });

      await spotifyClient.Search.forItem('eminem').then(res => {
        console.log(res.data);
      });
    }
    {
      const spotifyClient = Spotifly.initialize({
        accessToken: 'abc123',
      });
    }
  });
});
