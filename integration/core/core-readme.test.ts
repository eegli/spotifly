import * as Spotifly from '@spotifly/core';

type DataResponse<T> = Spotifly.DataResponse<T>;

const spotifyClient = Spotifly.initialize({
  clientId: process.env.SPOTIFY_CLIENT_ID || '',
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET || '',
  refreshToken: process.env.SPOTIFY_REFRESH_TOKEN || '',
});

describe('Core readme', () => {
  test('general example', async () => {
    {
      Spotifly.initialize({
        accessToken: 'abc123',
      });
    }

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
  test('convenience methods 1', async () => {
    const allTracks = await spotifyClient.Tracks.getAllUsersSavedTracks()(
      async response => {
        // DataResponse<SpotifyApi.UsersSavedTracksResponse>
        console.log(`fetched ${response.data.items.length} items!`);
      }
    ).then(allResponses => {
      return allResponses.map(({ data }) => data.items).flat();
    });

    expect(allTracks.length).toBeGreaterThanOrEqual(60);
  });
  test('convenience methods 2', async () => {
    const allTracks: DataResponse<SpotifyApi.UsersSavedTracksResponse>[] =
      await spotifyClient.Tracks.getAllUsersSavedTracks()();

    const someTracks: DataResponse<SpotifyApi.UsersSavedTracksResponse> =
      await spotifyClient.Tracks.getUsersSavedTracks();
  });
});
