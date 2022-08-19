import axios from 'axios';
import * as Spotify from '../src';
import { DataResponse as DR } from '../src';
import {
  country,
  fakeAxiosResponse,
  limit,
  market,
  offset,
  pagingResponse,
  stringId,
  stringIds,
} from './helpers';

jest.mock('axios');

const mockedAxios = axios as jest.MockedFunction<typeof axios>;
(axios as jest.Mocked<typeof axios>).create.mockReturnValue(mockedAxios);

const pagingResponseOnce = () => {
  mockedAxios.mockResolvedValueOnce(fakeAxiosResponse(pagingResponse));
  mockedAxios.mockResolvedValueOnce(
    fakeAxiosResponse({
      ...pagingResponse,
      next: null,
    })
  );
};

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
    setup?: (...args: any[]) => unknown;
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
        name: 'Album.getAll',
        fn: () =>
          assertReturns<DR<SpotifyApi.MultipleAlbumsResponse>[]>(
            Client.Albums.Album.getAll(stringIds, { market })(
              (data: DR<SpotifyApi.MultipleAlbumsResponse>) => data
            )
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
        name: 'Tracks.getAll',
        fn: () =>
          assertReturns<DR<SpotifyApi.AlbumTracksResponse>[]>(
            Client.Albums.Tracks.getAll(stringId, { market })(
              (data: DR<SpotifyApi.AlbumTracksResponse>) => data
            )
          ),
        setup: pagingResponseOnce,
      },
      {
        name: 'UsersSaved.check',
        fn: () =>
          assertReturns<DR<SpotifyApi.CheckUserSavedAlbumsResponse>>(
            Client.Albums.UsersSaved.check(stringIds)
          ),
      },
      {
        name: 'UsersSaved.checkAll',
        fn: () =>
          assertReturns<DR<SpotifyApi.CheckUserSavedAlbumsResponse>[]>(
            Client.Albums.UsersSaved.checkAll(stringIds)(
              (data: DR<SpotifyApi.CheckUserSavedAlbumsResponse>) => data
            )
          ),
        setup: pagingResponseOnce,
      },
      {
        name: 'UsersSaved.get',
        fn: () =>
          assertReturns<DR<SpotifyApi.UsersSavedAlbumsResponse>>(
            Client.Albums.UsersSaved.get({ limit, offset, market })
          ),
      },
      {
        name: 'UsersSaved.getAll',
        fn: () =>
          assertReturns<DR<SpotifyApi.UsersSavedAlbumsResponse>[]>(
            Client.Albums.UsersSaved.getAll({ market })(
              (data: DR<SpotifyApi.UsersSavedAlbumsResponse>) => data
            )
          ),
        setup: pagingResponseOnce,
      },
      {
        name: 'UsersSaved.remove',
        fn: () =>
          assertReturns<DR<SpotifyApi.RemoveAlbumsForUserResponse>>(
            Client.Albums.UsersSaved.remove(stringIds)
          ),
      },
      {
        name: 'UsersSaved.removeAll',
        fn: () =>
          assertReturns<DR<SpotifyApi.RemoveAlbumsForUserResponse>[]>(
            Client.Albums.UsersSaved.removeAll(stringIds)(
              (data: DR<SpotifyApi.RemoveAlbumsForUserResponse>) => data
            )
          ),
      },
      {
        name: 'UsersSaved.save',
        fn: () =>
          assertReturns<DR<SpotifyApi.SaveAlbumsForUserResponse>>(
            Client.Albums.UsersSaved.save(stringIds)
          ),
      },
      {
        name: 'UsersSaved.saveAll',
        fn: () =>
          assertReturns<DR<SpotifyApi.SaveAlbumsForUserResponse>[]>(
            Client.Albums.UsersSaved.saveAll(stringIds)(
              (data: DR<SpotifyApi.SaveAlbumsForUserResponse>) => data
            )
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
        name: 'Artist.getAll',
        fn: () =>
          assertReturns<DR<SpotifyApi.MultipleArtistsResponse>[]>(
            Client.Artists.Artist.getAll(stringIds)(
              (data: DR<SpotifyApi.MultipleArtistsResponse>) => data
            )
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
        name: 'Album.getAll',
        fn: () =>
          assertReturns<DR<SpotifyApi.ArtistsAlbumsResponse>[]>(
            Client.Artists.Albums.getAll(stringId, {
              market,
              include_groups: 'album',
            })((data: DR<SpotifyApi.ArtistsAlbumsResponse>) => data)
          ),
        setup: pagingResponseOnce,
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
];

for (const endpoint of tests) {
  describe(endpoint.name, () => {
    for (const { name, fn, setup } of endpoint.tests) {
      test(name, async () => {
        if (setup) await setup();
        await fn();
        expect(mockedAxios).toHaveBeenCalled();
        expect(mockedAxios.mock.calls).toMatchSnapshot();
        mockedAxios.mockClear();
      });
    }
  });
}
