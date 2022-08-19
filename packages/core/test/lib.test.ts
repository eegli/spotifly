import axios from 'axios';
import * as Spotify from '../src';
import { DataResponse as DR } from '../src';
import {
  country,
  fakeAxiosResponse,
  limit,
  market,
  offset,
  stringId,
  stringIds,
} from './helpers';

jest.mock('axios');

const mockedAxios = axios as jest.MockedFunction<typeof axios>;
(axios as jest.Mocked<typeof axios>).create.mockReturnValue(mockedAxios);

mockedAxios.mockResolvedValue(fakeAxiosResponse(null));

const Client = Spotify.initialize({
  accessToken: 'token-xyz',
});

const assertReturns: <Return, Func extends Promise<Return> = Promise<Return>>(
  func: Func
) => Promise<Return> = func => func;

type LibTestRunner = {
  name: string;
  tests: {
    name: string;
    fn: () => Promise<unknown>;
  }[];
}[];

const tests: LibTestRunner = [
  {
    name: 'Albums',
    tests: [
      {
        name: 'Album.get',
        fn: () =>
          assertReturns<DR<SpotifyApi.SingleAlbumResponse>>(
            Client.Albums.Album.get(stringId, { market })
          ),
      },
      {
        name: 'Album.getSeveral',
        fn: () =>
          assertReturns<DR<SpotifyApi.MultipleAlbumsResponse>>(
            Client.Albums.Album.getSeveral(stringIds, { market })
          ),
      },
      {
        name: 'NewReleases.get',
        fn: () =>
          assertReturns<DR<SpotifyApi.ListOfNewReleasesResponse>>(
            Client.Albums.NewReleases.get({ country, limit, offset })
          ),
      },
      {
        name: 'Tracks.get',
        fn: () =>
          assertReturns<DR<SpotifyApi.AlbumTracksResponse>>(
            Client.Albums.Tracks.get(stringId, { limit, market, offset })
          ),
      },
      {
        name: 'UsersSaved.check',
        fn: () =>
          assertReturns<DR<SpotifyApi.CheckUserSavedAlbumsResponse>>(
            Client.Albums.UsersSaved.check(stringIds)
          ),
      },
      {
        name: 'UsersSaved.get',
        fn: () =>
          assertReturns<DR<SpotifyApi.UsersSavedAlbumsResponse>>(
            Client.Albums.UsersSaved.get({ limit, offset, market })
          ),
      },
      {
        name: 'UsersSaved.remove',
        fn: () =>
          assertReturns<DR<SpotifyApi.RemoveAlbumsForUserResponse>>(
            Client.Albums.UsersSaved.remove(stringIds)
          ),
      },
      {
        name: 'UsersSaved.save',
        fn: () =>
          assertReturns<DR<SpotifyApi.SaveAlbumsForUserResponse>>(
            Client.Albums.UsersSaved.save(stringIds)
          ),
      },
    ],
  },
  {
    name: 'Artists',
    tests: [
      {
        name: 'Artist.get',
        fn: () =>
          assertReturns<DR<SpotifyApi.SingleArtistResponse>>(
            Client.Artists.Artist.get(stringId)
          ),
      },
      {
        name: 'Artist.getSeveral',
        fn: () =>
          assertReturns<DR<SpotifyApi.MultipleArtistsResponse>>(
            Client.Artists.Artist.getSeveral(stringIds)
          ),
      },
      {
        name: 'Album.get',
        fn: () =>
          assertReturns<DR<SpotifyApi.ArtistsAlbumsResponse>>(
            Client.Artists.Albums.get(stringId, {
              market,
              limit,
              offset,
              include_groups: 'album,appears_on,compilation,single',
            })
          ),
      },
      {
        name: 'TopTracks.get',
        fn: () =>
          assertReturns<DR<SpotifyApi.ArtistsTopTracksResponse>>(
            Client.Artists.TopTracks.get(stringId, {
              market,
            })
          ),
      },
      {
        name: 'RelatedArtists.get',
        fn: () =>
          assertReturns<DR<SpotifyApi.ArtistsRelatedArtistsResponse>>(
            Client.Artists.RelatedArtists.get(stringId)
          ),
      },
    ],
  },
  {
    name: 'Shows',
    tests: [
      {
        name: 'Show.get',
        fn: () =>
          assertReturns<DR<SpotifyApi.SingleShowResponse>>(
            Client.Shows.Show.get(stringId, { market })
          ),
      },
      {
        name: 'Show.getSeveral',
        fn: () =>
          assertReturns<DR<SpotifyApi.MultipleShowsResponse>>(
            Client.Shows.Show.getSeveral(stringIds, { market })
          ),
      },
      {
        name: 'Episodes.get',
        fn: () =>
          assertReturns<DR<SpotifyApi.ShowEpisodesResponse>>(
            Client.Shows.Episodes.get(stringId, { market, offset, limit })
          ),
      },
      {
        name: 'UsersSaved.get',
        fn: () =>
          assertReturns<DR<SpotifyApi.UsersSavedShowsResponse>>(
            Client.Shows.UsersSaved.get({ offset, limit })
          ),
      },
      {
        name: 'UsersSaved.save',
        fn: () =>
          assertReturns<DR<SpotifyApi.VoidResponse>>(
            Client.Shows.UsersSaved.save(stringIds)
          ),
      },
      {
        name: 'UsersSaved.remove',
        fn: () =>
          assertReturns<DR<SpotifyApi.VoidResponse>>(
            Client.Shows.UsersSaved.remove(stringIds, { market })
          ),
      },
      {
        name: 'UsersSaved.check',
        fn: () =>
          assertReturns<DR<SpotifyApi.VoidResponse>>(
            Client.Shows.UsersSaved.check(stringIds)
          ),
      },
    ],
  },
  {
    name: 'Episodes',
    tests: [
      {
        name: 'Episode.get',
        fn: () =>
          assertReturns<DR<SpotifyApi.SingleEpisodeResponse>>(
            Client.Episodes.Episode.get(stringId, { market })
          ),
      },
      {
        name: 'Episode.getSeveral',
        fn: () =>
          assertReturns<DR<SpotifyApi.MultipleEpisodesResponse>>(
            Client.Episodes.Episode.getSeveral(stringIds, { market })
          ),
      },
      {
        name: 'UsersSaved.get',
        fn: () =>
          assertReturns<DR<SpotifyApi.UsersSavedEpisodesResponse>>(
            Client.Episodes.UsersSaved.get({ market })
          ),
      },
      {
        name: 'UsersSaved.save',
        fn: () =>
          assertReturns<DR<SpotifyApi.VoidResponse>>(
            Client.Episodes.UsersSaved.save(stringIds)
          ),
      },
      {
        name: 'UsersSaved.remove',
        fn: () =>
          assertReturns<DR<SpotifyApi.VoidResponse>>(
            Client.Episodes.UsersSaved.remove(stringIds)
          ),
      },
      {
        name: 'UsersSaved.check',
        fn: () =>
          assertReturns<DR<boolean[]>>(
            Client.Episodes.UsersSaved.check(stringIds)
          ),
      },
    ],
  },
];

for (const endpoint of tests) {
  describe(endpoint.name, () => {
    for (const { name, fn } of endpoint.tests) {
      test(name, async () => {
        await fn();
        expect(mockedAxios).toHaveBeenCalled();
        expect(mockedAxios.mock.calls).toMatchSnapshot();
        mockedAxios.mockClear();
      });
    }
  });
}
