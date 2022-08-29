import axios from 'axios';
import * as Spotify from '../src';
import { DataResponse as DR } from '../src';
import {
  country,
  fakeAxiosResponse,
  fields,
  limit,
  locale,
  market,
  offset,
  stringId,
  stringIds,
  timestamp,
  uris,
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
  {
    name: 'Tracks',
    tests: [
      {
        name: 'Track.get',
        fn: () =>
          assertReturns<DR<SpotifyApi.SingleTrackResponse>>(
            Client.Tracks.Track.get(stringId, { market })
          ),
      },
      {
        name: 'Track.getSeveral',
        fn: () =>
          assertReturns<DR<SpotifyApi.MultipleTracksResponse>>(
            Client.Tracks.Track.getSeveral(stringIds, { market })
          ),
      },
      {
        name: 'UsersSaved.get',
        fn: () =>
          assertReturns<DR<SpotifyApi.UsersSavedTracksResponse>>(
            Client.Tracks.UsersSaved.get({ market, limit, offset })
          ),
      },
      {
        name: 'UsersSaved.save',
        fn: () =>
          assertReturns<DR<SpotifyApi.SaveTracksForUserResponse>>(
            Client.Tracks.UsersSaved.save(stringIds)
          ),
      },
      {
        name: 'UsersSaved.remove',
        fn: () =>
          assertReturns<DR<SpotifyApi.RemoveUsersSavedTracksResponse>>(
            Client.Tracks.UsersSaved.remove(stringIds)
          ),
      },
      {
        name: 'UsersSaved.check',
        fn: () =>
          assertReturns<DR<SpotifyApi.CheckUsersSavedTracksResponse>>(
            Client.Tracks.UsersSaved.check(stringIds)
          ),
      },
      {
        name: 'AudioFeatures.getSeveral',
        fn: () =>
          assertReturns<DR<SpotifyApi.MultipleAudioFeaturesResponse>>(
            Client.Tracks.AudioFeatures.getSeveral(stringIds)
          ),
      },
      {
        name: 'AudioFeatures.get',
        fn: () =>
          assertReturns<DR<SpotifyApi.AudioFeaturesResponse>>(
            Client.Tracks.AudioFeatures.get(stringId)
          ),
      },
      {
        name: 'AudioAnalysis.get',
        fn: () =>
          assertReturns<DR<SpotifyApi.AudioAnalysisResponse>>(
            Client.Tracks.AudioAnalysis.get(stringId)
          ),
      },
      {
        name: 'Recommendations.get',
        fn: () =>
          assertReturns<DR<SpotifyApi.RecommendationsFromSeedsResponse>>(
            Client.Tracks.Recommendations.get({
              seed_artists: '',
              seed_genres: '',
              seed_tracks: '',
            })
          ),
      },
    ],
  },
  {
    name: 'Search',
    tests: [
      {
        name: 'Search.get',
        fn: () =>
          assertReturns<DR<SpotifyApi.SearchResponse>>(
            Client.Search.forItem({
              query: 'x',
              type: 'track,album,artist,episode',
            })
          ),
      },
    ],
  },
  {
    name: 'Users',
    tests: [
      {
        name: 'OwnProfile.get',
        fn: () =>
          assertReturns<DR<SpotifyApi.UserProfileResponse>>(
            Client.Users.OwnProfile.get()
          ),
      },
      {
        name: 'Profile.get',
        fn: () =>
          assertReturns<DR<SpotifyApi.UserProfileResponse>>(
            Client.Users.Profile.get(stringId)
          ),
      },
      {
        name: 'TopArtists.get',
        fn: () =>
          assertReturns<DR<SpotifyApi.UsersTopArtistsResponse>>(
            Client.Users.TopArtists.get({
              limit,
              offset,
              time_range: 'long_term ',
            })
          ),
      },
      {
        name: 'TopTracks.get',
        fn: () =>
          assertReturns<DR<SpotifyApi.UsersTopTracksResponse>>(
            Client.Users.TopTracks.get({
              limit,
              offset,
              time_range: 'long_term ',
            })
          ),
      },
      {
        name: 'FollowedArtists.get',
        fn: () =>
          assertReturns<DR<SpotifyApi.UsersFollowedArtistsResponse>>(
            Client.Users.FollowedArtists.get({ limit, after: stringId })
          ),
      },
      {
        name: 'Follow.artists',
        fn: () =>
          assertReturns<DR<SpotifyApi.FollowArtistsOrUsersResponse>>(
            Client.Users.Follow.artists(stringIds)
          ),
      },
      {
        name: 'Follow.users',
        fn: () =>
          assertReturns<DR<SpotifyApi.FollowArtistsOrUsersResponse>>(
            Client.Users.Follow.users(stringIds)
          ),
      },
      {
        name: 'Follow.playlist',
        fn: () =>
          assertReturns<DR<SpotifyApi.FollowPlaylistResponse>>(
            Client.Users.Follow.playlist(stringId, { public: true })
          ),
      },
      {
        name: 'Unfollow.artists',
        fn: () =>
          assertReturns<DR<SpotifyApi.UnfollowArtistsOrUsersResponse>>(
            Client.Users.Unfollow.artists(stringIds)
          ),
      },
      {
        name: 'Unfollow.users',
        fn: () =>
          assertReturns<DR<SpotifyApi.UnfollowArtistsOrUsersResponse>>(
            Client.Users.Unfollow.users(stringIds)
          ),
      },
      {
        name: 'Unfollow.playlist',
        fn: () =>
          assertReturns<DR<SpotifyApi.UnfollowPlaylistResponse>>(
            Client.Users.Unfollow.playlist(stringId)
          ),
      },
      {
        name: 'CheckFollows.artists',
        fn: () =>
          assertReturns<DR<SpotifyApi.UserFollowsUsersOrArtistsResponse>>(
            Client.Users.CheckFollows.artists(stringIds)
          ),
      },
      {
        name: 'CheckFollows.users',
        fn: () =>
          assertReturns<DR<SpotifyApi.UserFollowsUsersOrArtistsResponse>>(
            Client.Users.CheckFollows.users(stringIds)
          ),
      },
      {
        name: 'CheckFollows.playlist',
        fn: () =>
          assertReturns<DR<SpotifyApi.UsersFollowPlaylistResponse>>(
            Client.Users.CheckFollows.playlist({
              playlistId: stringId,
              userIds: stringIds,
            })
          ),
      },
    ],
  },
  {
    name: 'Categories',
    tests: [
      {
        name: 'Category.get',
        fn: () =>
          assertReturns<DR<SpotifyApi.SingleCategoryResponse>>(
            Client.Categories.Category.get(stringId, {
              country: 'CH',
              locale: 'de_DE',
            })
          ),
      },
      {
        name: 'Category.get',
        fn: () =>
          assertReturns<DR<SpotifyApi.MultipleCategoriesResponse>>(
            Client.Categories.Category.getSeveral({
              country: 'CH',
              locale: 'de_DE',
            })
          ),
      },
    ],
  },
  {
    name: 'Playlists',
    tests: [
      {
        name: 'getPlaylist',
        fn: () =>
          assertReturns<DR<SpotifyApi.SinglePlaylistResponse>>(
            Client.Playlists.getPlaylist(stringId, {
              additional_types: 'track,episode',
              fields,
              market,
            })
          ),
      },
      {
        name: 'Playlist.change',
        fn: () =>
          assertReturns<DR<SpotifyApi.ChangePlaylistDetailsResponse>>(
            Client.Playlists.changePlaylist(stringId, {
              name: 'new playlist',
              public: false,
              collaborative: true,
              description: 'new description',
            })
          ),
      },
      {
        name: 'getPlaylistItems',
        fn: () =>
          assertReturns<DR<SpotifyApi.PlaylistTrackResponse>>(
            Client.Playlists.getPlaylistItems(stringId, {
              additional_types: 'track,episode',
              fields,
              market,
            })
          ),
      },
      {
        name: 'addPlaylistItems',
        fn: () =>
          assertReturns<DR<SpotifyApi.AddTracksToPlaylistResponse>>(
            Client.Playlists.addPlaylistItems(
              { playlistId: stringId, uris },
              { position: 0 }
            )
          ),
      },
      {
        name: 'reorderPlaylistItems',
        fn: () =>
          assertReturns<DR<SpotifyApi.ReorderPlaylistTracksResponse>>(
            Client.Playlists.reorderPlaylistItems({
              playlistId: stringId,
              range_start: 0,
              range_length: 1,
              insert_before: 1,
              snapshot_id: 'snapshot_id',
            })
          ),
      },
      {
        name: 'replacePlaylistItems',
        fn: () =>
          assertReturns<DR<SpotifyApi.ReorderPlaylistTracksResponse>>(
            Client.Playlists.replacePlaylistItems({
              playlistId: stringId,
              uris,
            })
          ),
      },
      {
        name: 'replacePlaylistItems',
        fn: () =>
          assertReturns<DR<SpotifyApi.CategoryPlaylistsResponse>>(
            Client.Playlists.getCategoryPlaylists(stringId, {
              country,
              limit,
              offset,
            })
          ),
      },
      {
        name: 'createPlaylist',
        fn: () =>
          assertReturns<DR<SpotifyApi.CreatePlaylistResponse>>(
            Client.Playlists.createPlaylist(
              { userId: stringId, name: stringId },
              {
                public: false,
                collaborative: true,
                description: 'new description',
              }
            )
          ),
      },
      {
        name: 'getFeaturedPlaylists',
        fn: () =>
          assertReturns<DR<SpotifyApi.ListOfFeaturedPlaylistsResponse>>(
            Client.Playlists.getFeaturedPlaylists({
              country,
              limit,
              locale,
              offset,
              timestamp,
            })
          ),
      },
      {
        name: 'getCategoryPlaylists',
        fn: () =>
          assertReturns<DR<SpotifyApi.CategoryPlaylistsResponse>>(
            Client.Playlists.getCategoryPlaylists(stringId, {
              country,
              limit,
              offset,
            })
          ),
      },
      {
        name: 'getPlaylistCoverImage',
        fn: () =>
          assertReturns<DR<SpotifyApi.ImageObject[]>>(
            Client.Playlists.getPlaylistCoverImage(stringId)
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
