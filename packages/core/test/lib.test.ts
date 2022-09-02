import axios from 'axios';

import * as Spotify from '../src';
import { DataResponse as DR } from '../src';
import { BooleanResponse } from '../src/types';
import {
  additional_types,
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
        name: 'getArtist',
        fn: () =>
          assertReturns<DR<SpotifyApi.SingleArtistResponse>>(
            Client.Artists.getArtist(stringId)
          ),
      },
      {
        name: 'getSeveralArtists',
        fn: () =>
          assertReturns<DR<SpotifyApi.MultipleArtistsResponse>>(
            Client.Artists.getSeveralArtists(stringIds)
          ),
      },
      {
        name: 'getArtistsAlbums',
        fn: () =>
          assertReturns<DR<SpotifyApi.ArtistsAlbumsResponse>>(
            Client.Artists.getArtistsAlbums(stringId, {
              market,
              limit,
              offset,
              include_groups: ['album', 'appears_on', 'compilation'],
            })
          ),
      },
      {
        name: 'getArtistsTopTracks',
        fn: () =>
          assertReturns<DR<SpotifyApi.ArtistsTopTracksResponse>>(
            Client.Artists.getArtistsTopTracks(stringId, {
              market,
            })
          ),
      },
      {
        name: 'getArtistsRelatedArtists',
        fn: () =>
          assertReturns<DR<SpotifyApi.ArtistsRelatedArtistsResponse>>(
            Client.Artists.getArtistsRelatedArtists(stringId)
          ),
      },
    ],
  },
  {
    name: 'Shows',
    tests: [
      {
        name: 'getShow',
        fn: () =>
          assertReturns<DR<SpotifyApi.SingleShowResponse>>(
            Client.Shows.getShow(stringId, { market })
          ),
      },
      {
        name: 'getSeveralShows',
        fn: () =>
          assertReturns<DR<SpotifyApi.MultipleShowsResponse>>(
            Client.Shows.getSeveralShows(stringIds, { market })
          ),
      },
      {
        name: 'getShowEpisodes',
        fn: () =>
          assertReturns<DR<SpotifyApi.ShowEpisodesResponse>>(
            Client.Shows.getShowEpisodes(stringId, { market, offset, limit })
          ),
      },
      {
        name: 'getUsersSavedShows',
        fn: () =>
          assertReturns<DR<SpotifyApi.UsersSavedShowsResponse>>(
            Client.Shows.getUsersSavedShows({ offset, limit })
          ),
      },
      {
        name: 'saveShowsForUser',
        fn: () =>
          assertReturns<DR<SpotifyApi.VoidResponse>>(
            Client.Shows.saveShowsForUser(stringIds)
          ),
      },
      {
        name: 'removeUsersSavedShows',
        fn: () =>
          assertReturns<DR<SpotifyApi.VoidResponse>>(
            Client.Shows.removeUsersSavedShows(stringIds, { market })
          ),
      },
      {
        name: 'checkUsersSavedShows',
        fn: () =>
          assertReturns<DR<BooleanResponse>>(
            Client.Shows.checkUsersSavedShows(stringIds)
          ),
      },
    ],
  },
  {
    name: 'Episodes',
    tests: [
      {
        name: 'getEpisode',
        fn: () =>
          assertReturns<DR<SpotifyApi.SingleEpisodeResponse>>(
            Client.Episodes.getEpisode(stringId, { market })
          ),
      },
      {
        name: 'getSeveralEpisodes',
        fn: () =>
          assertReturns<DR<SpotifyApi.MultipleEpisodesResponse>>(
            Client.Episodes.getSeveralEpisodes(stringIds, { market })
          ),
      },
      {
        name: 'getUsersSavedEpisodes',
        fn: () =>
          assertReturns<DR<SpotifyApi.UsersSavedEpisodesResponse>>(
            Client.Episodes.getUsersSavedEpisodes({ market, limit, offset })
          ),
      },
      {
        name: 'saveEpisodesForUser',
        fn: () =>
          assertReturns<DR<SpotifyApi.VoidResponse>>(
            Client.Episodes.saveEpisodesForUser(stringIds)
          ),
      },
      {
        name: 'removeUsersSavedEpisodes',
        fn: () =>
          assertReturns<DR<SpotifyApi.VoidResponse>>(
            Client.Episodes.removeUsersSavedEpisodes(stringIds)
          ),
      },
      {
        name: 'checkUsersSavedEpisodes',
        fn: () =>
          assertReturns<DR<boolean[]>>(
            Client.Episodes.checkUsersSavedEpisodes(stringIds)
          ),
      },
    ],
  },
  {
    name: 'Tracks',
    tests: [
      {
        name: 'getTrack',
        fn: () =>
          assertReturns<DR<SpotifyApi.SingleTrackResponse>>(
            Client.Tracks.getTrack(stringId, { market })
          ),
      },
      {
        name: 'getSeveralTracks',
        fn: () =>
          assertReturns<DR<SpotifyApi.MultipleTracksResponse>>(
            Client.Tracks.getSeveralTracks(stringIds, { market })
          ),
      },
      {
        name: 'getUsersSavedTracks',
        fn: () =>
          assertReturns<DR<SpotifyApi.UsersSavedTracksResponse>>(
            Client.Tracks.getUsersSavedTracks({ market, limit, offset })
          ),
      },
      {
        name: 'saveTracksForUser',
        fn: () =>
          assertReturns<DR<SpotifyApi.SaveTracksForUserResponse>>(
            Client.Tracks.saveTracksForUser(stringIds)
          ),
      },
      {
        name: 'removeUsersSavedTracks',
        fn: () =>
          assertReturns<DR<SpotifyApi.RemoveUsersSavedTracksResponse>>(
            Client.Tracks.removeUsersSavedTracks(stringIds)
          ),
      },
      {
        name: 'checkUsersSavedTracks',
        fn: () =>
          assertReturns<DR<SpotifyApi.CheckUsersSavedTracksResponse>>(
            Client.Tracks.checkUsersSavedTracks(stringIds)
          ),
      },
      {
        name: 'getSeveralAudioFeatures',
        fn: () =>
          assertReturns<DR<SpotifyApi.MultipleAudioFeaturesResponse>>(
            Client.Tracks.getSeveralAudioFeatures(stringIds)
          ),
      },
      {
        name: 'getAudioFeatures',
        fn: () =>
          assertReturns<DR<SpotifyApi.AudioFeaturesResponse>>(
            Client.Tracks.getAudioFeatures(stringId)
          ),
      },
      {
        name: 'getAudioAnalysis',
        fn: () =>
          assertReturns<DR<SpotifyApi.AudioAnalysisResponse>>(
            Client.Tracks.getAudioAnalysis(stringId)
          ),
      },
      {
        name: 'getRecommendations',
        fn: () =>
          assertReturns<DR<SpotifyApi.RecommendationsFromSeedsResponse>>(
            Client.Tracks.getRecommendations({
              seed_artists: [stringId, stringId],
              seed_genres: [stringId],
              seed_tracks: [stringId],
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
            Client.Search.search({
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
        name: 'getCurrentUsersProfile',
        fn: () =>
          assertReturns<DR<SpotifyApi.UserProfileResponse>>(
            Client.Users.getCurrentUsersProfile()
          ),
      },
      {
        name: 'getUsersTopArtists',
        fn: () =>
          assertReturns<DR<SpotifyApi.UsersTopArtistsResponse>>(
            Client.Users.getUsersTopArtists({
              limit,
              offset,
              time_range: 'long_term ',
            })
          ),
      },
      {
        name: 'getUsersTopTracks',
        fn: () =>
          assertReturns<DR<SpotifyApi.UsersTopTracksResponse>>(
            Client.Users.getUsersTopTracks({
              limit,
              offset,
              time_range: 'long_term ',
            })
          ),
      },
      {
        name: 'getUsersProfile',
        fn: () =>
          assertReturns<DR<SpotifyApi.UserProfileResponse>>(
            Client.Users.getUsersProfile(stringId)
          ),
      },
      {
        name: 'followPlaylist',
        fn: () =>
          assertReturns<DR<SpotifyApi.FollowPlaylistResponse>>(
            Client.Users.followPlaylist(stringId, { public: true })
          ),
      },
      {
        name: 'unfollowPlaylist',
        fn: () =>
          assertReturns<DR<SpotifyApi.UnfollowPlaylistResponse>>(
            Client.Users.unfollowPlaylist(stringId)
          ),
      },
      {
        name: 'getUsersFollowedArtists',
        fn: () =>
          assertReturns<DR<SpotifyApi.UsersFollowedArtistsResponse>>(
            Client.Users.getUsersFollowedArtists({ limit, after: stringId })
          ),
      },
      {
        name: 'followArtists',
        fn: () =>
          assertReturns<DR<SpotifyApi.FollowArtistsOrUsersResponse>>(
            Client.Users.followArtists(stringIds)
          ),
      },
      {
        name: 'followUsers',
        fn: () =>
          assertReturns<DR<SpotifyApi.FollowArtistsOrUsersResponse>>(
            Client.Users.followUsers(stringIds)
          ),
      },

      {
        name: 'unfollowArtists',
        fn: () =>
          assertReturns<DR<SpotifyApi.UnfollowArtistsOrUsersResponse>>(
            Client.Users.unfollowArtists(stringIds)
          ),
      },
      {
        name: 'unfollowUsers',
        fn: () =>
          assertReturns<DR<SpotifyApi.UnfollowArtistsOrUsersResponse>>(
            Client.Users.unfollowUsers(stringIds)
          ),
      },

      {
        name: 'checkFollowsArtists',
        fn: () =>
          assertReturns<DR<SpotifyApi.UserFollowsUsersOrArtistsResponse>>(
            Client.Users.checkFollowsArtists(stringIds)
          ),
      },
      {
        name: 'checkFollowsUsers',
        fn: () =>
          assertReturns<DR<SpotifyApi.UserFollowsUsersOrArtistsResponse>>(
            Client.Users.checkFollowsUsers(stringIds)
          ),
      },
      {
        name: 'checkUsersFollowPlaylist',
        fn: () =>
          assertReturns<DR<SpotifyApi.UsersFollowPlaylistResponse>>(
            Client.Users.checkUsersFollowPlaylist(stringId, stringIds)
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
        name: 'changePlaylist',
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
              limit,
              offset,
            })
          ),
      },
      {
        name: 'addPlaylistItems',
        fn: () =>
          assertReturns<DR<SpotifyApi.AddTracksToPlaylistResponse>>(
            Client.Playlists.addPlaylistItems(stringId, uris, { position: 0 })
          ),
      },
      {
        name: 'reorderPlaylistItems',
        fn: () =>
          assertReturns<DR<SpotifyApi.ReorderPlaylistTracksResponse>>(
            Client.Playlists.reorderPlaylistItems(stringId, {
              range_start: 1,
              range_length: 1,
              insert_before: 1,
              snapshot_id: 'snapshot_id',
            })
          ),
      },
      {
        name: 'removePlaylistItems',
        fn: () =>
          assertReturns<DR<SpotifyApi.RemoveTracksFromPlaylistResponse>>(
            Client.Playlists.removePlaylistItems(
              stringId,
              [{ uri: 'spt:track:1' }],
              {
                snapshot_id: stringId,
              }
            )
          ),
      },
      {
        name: 'getCurrentUsersPlaylists',
        fn: () =>
          assertReturns<DR<SpotifyApi.ListOfUsersPlaylistsResponse>>(
            Client.Playlists.getCurrentUsersPlaylists({
              limit,
              offset,
            })
          ),
      },
      {
        name: 'getUsersPlaylists',
        fn: () =>
          assertReturns<DR<SpotifyApi.ListOfUsersPlaylistsResponse>>(
            Client.Playlists.getUsersPlaylists(stringId, {
              limit,
              offset,
            })
          ),
      },
      {
        name: 'createPlaylist',
        fn: () =>
          assertReturns<DR<SpotifyApi.CreatePlaylistResponse>>(
            Client.Playlists.createPlaylist(stringId, 'playlist', {
              public: false,
              collaborative: true,
              description: 'new description',
            })
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
  {
    name: 'Categories',
    tests: [
      {
        name: 'getCategory',
        fn: () =>
          assertReturns<DR<SpotifyApi.SingleCategoryResponse>>(
            Client.Categories.getCategory(stringId, {
              country: 'CH',
              locale: 'de_DE',
            })
          ),
      },
      {
        name: 'getSeveralCategories',
        fn: () =>
          assertReturns<DR<SpotifyApi.MultipleCategoriesResponse>>(
            Client.Categories.getSeveralCategories({
              country: 'CH',
              locale: 'de_DE',
              limit,
              offset,
            })
          ),
      },
    ],
  },
  {
    name: 'Genres',
    tests: [
      {
        name: 'getAvailableGenreSeeds',
        fn: () =>
          assertReturns<DR<{ genres: string[] }>>(
            Client.Genres.getAvailableGenreSeeds()
          ),
      },
    ],
  },
  {
    name: 'Player',
    tests: [
      {
        name: 'getPlaybackState',
        fn: () =>
          assertReturns<DR<SpotifyApi.CurrentlyPlayingResponse>>(
            Client.Player.getPlaybackState({ additional_types, market })
          ),
      },
      {
        name: 'transferPlayback',
        fn: () =>
          assertReturns<DR<SpotifyApi.VoidResponse>>(
            Client.Player.transferPlayback([stringId], { play: true })
          ),
      },
      {
        name: 'getAvailableDevices',
        fn: () =>
          assertReturns<DR<SpotifyApi.UserDevicesResponse>>(
            Client.Player.getAvailableDevices()
          ),
      },
    ],
  },
  {
    name: 'Markets',
    tests: [
      {
        name: 'getAvailableMarkets',
        fn: () =>
          assertReturns<DR<{ markets: string[] }>>(
            Client.Markets.getAvailableMarkets()
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
