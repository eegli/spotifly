import * as Spotifly from '@spotifly/core';

describe('Core readme', () => {
  test('general example', async () => {
    {
      Spotifly.initialize({
        accessToken: 'abc123',
      });
    }
    const spotifyClient = Spotifly.initialize({
      clientId: process.env.SPOTIFY_CLIENT_ID || '',
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET || '',
      refreshToken: process.env.SPOTIFY_REFRESH_TOKEN || '',
    });

    // Deriving the genres of a track via its artists
    await spotifyClient.Tracks.getTrack('5nHc8CmiPllMzHbJhhx3KS')
      .then(res => {
        return res.data.artists.map(artist => artist.id);
      })
      .then(artistIds => {
        return spotifyClient.Artists.getSeveralArtists(artistIds);
      })
      .then(res => {
        const genres = res.data.artists.map(artist => artist.genres).flat();
        console.log(genres); // [ 'livetronica', 'munich electronic' ]
      });

    // Getting all of a user's saved tracks
    await spotifyClient.Tracks.getAllUsersSavedTracks()()
      .then(res => {
        return res.map(res => res.data.items).flat();
      })
      .then(library => {
        console.log(library.length); // 70
      });

    // Searching for an item
    await spotifyClient.Search.search({ query: 'eminem', type: 'album' }).then(
      res => {
        console.log(res.data.albums?.items[0]?.name); // 'The Eminem Show'
      }
    );
  });
});
