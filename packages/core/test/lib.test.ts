import axios from 'axios';
import type { DataResponse as DR } from '../src';
import * as Spotify from '../src';
import type { VoidResponse } from '../src/models/params';
import {
  additional_types,
  country,
  fakeAxiosResponse,
  fields,
  include_groups,
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
  func: Func,
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
        name: 'getAlbum',
        fn: () =>
          assertReturns<DR<SpotifyApi.SingleAlbumResponse>>(
            Client.Albums.getAlbum(stringId, { market }),
          ),
      },
      {
        name: 'getSeveralAlbums',
        fn: () =>
          assertReturns<DR<SpotifyApi.MultipleAlbumsResponse>>(
            Client.Albums.getSeveralAlbums(stringIds, { market }),
          ),
      },
      {
        name: 'getAlbumTracks',
        fn: () =>
          assertReturns<DR<SpotifyApi.AlbumTracksResponse>>(
            Client.Albums.getAlbumTracks(stringId, { limit, market, offset }),
          ),
      },
      {
        name: 'getUsersSavedAlbums',
        fn: () =>
          assertReturns<DR<SpotifyApi.UsersSavedAlbumsResponse>>(
            Client.Albums.getUsersSavedAlbums({ limit, offset, market }),
          ),
      },
      {
        name: 'saveAlbumsForUser',
        fn: () =>
          assertReturns<DR<SpotifyApi.SaveAlbumsForUserResponse>>(
            Client.Albums.saveAlbumsForUser(stringIds),
          ),
      },
      {
        name: 'removeUsersSavedAlbums',
        fn: () =>
          assertReturns<DR<SpotifyApi.RemoveAlbumsForUserResponse>>(
            Client.Albums.removeUsersSavedAlbums(stringIds),
          ),
      },
      {
        name: 'checkUsersSavedAlbums',
        fn: () =>
          assertReturns<DR<SpotifyApi.CheckUserSavedAlbumsResponse>>(
            Client.Albums.checkUsersSavedAlbums(stringIds),
          ),
      },
      {
        name: 'getNewAlbumReleases',
        fn: () =>
          assertReturns<DR<SpotifyApi.ListOfNewReleasesResponse>>(
            Client.Albums.getNewAlbumReleases({ country, limit, offset }),
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
            Client.Artists.getArtist(stringId),
          ),
      },
      {
        name: 'getSeveralArtists',
        fn: () =>
          assertReturns<DR<SpotifyApi.MultipleArtistsResponse>>(
            Client.Artists.getSeveralArtists(stringIds),
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
              include_groups,
            }),
          ),
      },
      {
        name: 'getArtistsTopTracks',
        fn: () =>
          assertReturns<DR<SpotifyApi.ArtistsTopTracksResponse>>(
            Client.Artists.getArtistsTopTracks(stringId, {
              market,
            }),
          ),
      },
      {
        name: 'getArtistsRelatedArtists',
        fn: () =>
          assertReturns<DR<SpotifyApi.ArtistsRelatedArtistsResponse>>(
            Client.Artists.getArtistsRelatedArtists(stringId),
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
            Client.Shows.getShow(stringId, { market }),
          ),
      },
      {
        name: 'getSeveralShows',
        fn: () =>
          assertReturns<DR<SpotifyApi.MultipleShowsResponse>>(
            Client.Shows.getSeveralShows(stringIds, { market }),
          ),
      },
      {
        name: 'getShowEpisodes',
        fn: () =>
          assertReturns<DR<SpotifyApi.ShowEpisodesResponse>>(
            Client.Shows.getShowEpisodes(stringId, { market, offset, limit }),
          ),
      },
      {
        name: 'getUsersSavedShows',
        fn: () =>
          assertReturns<DR<SpotifyApi.UsersSavedShowsResponse>>(
            Client.Shows.getUsersSavedShows({ offset, limit }),
          ),
      },
      {
        name: 'saveShowsForUser',
        fn: () =>
          assertReturns<DR<SpotifyApi.SaveShowsForUserResponse>>(
            Client.Shows.saveShowsForUser(stringIds),
          ),
      },
      {
        name: 'removeUsersSavedShows',
        fn: () =>
          assertReturns<DR<SpotifyApi.RemoveShowsForUserResponse>>(
            Client.Shows.removeUsersSavedShows(stringIds, { market }),
          ),
      },
      {
        name: 'checkUsersSavedShows',
        fn: () =>
          assertReturns<DR<SpotifyApi.CheckUserSavedShowsResponse>>(
            Client.Shows.checkUsersSavedShows(stringIds),
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
            Client.Episodes.getEpisode(stringId, { market }),
          ),
      },
      {
        name: 'getSeveralEpisodes',
        fn: () =>
          assertReturns<DR<SpotifyApi.MultipleEpisodesResponse>>(
            Client.Episodes.getSeveralEpisodes(stringIds, { market }),
          ),
      },
      {
        name: 'getUsersSavedEpisodes',
        fn: () =>
          assertReturns<DR<SpotifyApi.UsersSavedEpisodesResponse>>(
            Client.Episodes.beta.getUsersSavedEpisodes({
              market,
              limit,
              offset,
            }),
          ),
      },
      {
        name: 'saveEpisodesForUser',
        fn: () =>
          assertReturns<DR<SpotifyApi.SaveEpisodesForUserResponse>>(
            Client.Episodes.beta.saveEpisodesForUser(stringIds),
          ),
      },
      {
        name: 'removeUsersSavedEpisodes',
        fn: () =>
          assertReturns<DR<SpotifyApi.RemoveEpisodesForUserResponse>>(
            Client.Episodes.beta.removeUsersSavedEpisodes(stringIds),
          ),
      },
      {
        name: 'checkUsersSavedEpisodes',
        fn: () =>
          assertReturns<DR<SpotifyApi.CheckUserSavedEpisodesResponse>>(
            Client.Episodes.beta.checkUsersSavedEpisodes(stringIds),
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
            Client.Tracks.getTrack(stringId, { market }),
          ),
      },
      {
        name: 'getSeveralTracks',
        fn: () =>
          assertReturns<DR<SpotifyApi.MultipleTracksResponse>>(
            Client.Tracks.getSeveralTracks(stringIds, { market }),
          ),
      },
      {
        name: 'getUsersSavedTracks',
        fn: () =>
          assertReturns<DR<SpotifyApi.UsersSavedTracksResponse>>(
            Client.Tracks.getUsersSavedTracks({ market, limit, offset }),
          ),
      },
      {
        name: 'saveTracksForUser',
        fn: () =>
          assertReturns<DR<SpotifyApi.SaveTracksForUserResponse>>(
            Client.Tracks.saveTracksForUser(stringIds),
          ),
      },
      {
        name: 'removeUsersSavedTracks',
        fn: () =>
          assertReturns<DR<SpotifyApi.RemoveUsersSavedTracksResponse>>(
            Client.Tracks.removeUsersSavedTracks(stringIds),
          ),
      },
      {
        name: 'checkUsersSavedTracks',
        fn: () =>
          assertReturns<DR<SpotifyApi.CheckUsersSavedTracksResponse>>(
            Client.Tracks.checkUsersSavedTracks(stringIds),
          ),
      },
      {
        name: 'getSeveralAudioFeatures',
        fn: () =>
          assertReturns<DR<SpotifyApi.MultipleAudioFeaturesResponse>>(
            Client.Tracks.getSeveralAudioFeatures(stringIds),
          ),
      },
      {
        name: 'getAudioFeatures',
        fn: () =>
          assertReturns<DR<SpotifyApi.AudioFeaturesResponse>>(
            Client.Tracks.getAudioFeatures(stringId),
          ),
      },
      {
        name: 'getAudioAnalysis',
        fn: () =>
          assertReturns<DR<SpotifyApi.AudioAnalysisResponse>>(
            Client.Tracks.getAudioAnalysis(stringId),
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
            }),
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
            }),
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
            Client.Users.getCurrentUsersProfile(),
          ),
      },
      {
        name: 'getUsersTopArtists',
        fn: () =>
          assertReturns<DR<SpotifyApi.UsersTopArtistsResponse>>(
            Client.Users.getUsersTopArtists({
              limit,
              offset,
              time_range: 'long_term',
            }),
          ),
      },
      {
        name: 'getUsersTopTracks',
        fn: () =>
          assertReturns<DR<SpotifyApi.UsersTopTracksResponse>>(
            Client.Users.getUsersTopTracks({
              limit,
              offset,
              time_range: 'long_term',
            }),
          ),
      },
      {
        name: 'getUsersProfile',
        fn: () =>
          assertReturns<DR<SpotifyApi.UserProfileResponse>>(
            Client.Users.getUsersProfile(stringId),
          ),
      },
      {
        name: 'followPlaylist',
        fn: () =>
          assertReturns<DR<SpotifyApi.FollowPlaylistResponse>>(
            Client.Users.followPlaylist(stringId, { public: true }),
          ),
      },
      {
        name: 'unfollowPlaylist',
        fn: () =>
          assertReturns<DR<SpotifyApi.UnfollowPlaylistResponse>>(
            Client.Users.unfollowPlaylist(stringId),
          ),
      },
      {
        name: 'getUsersFollowedArtists',
        fn: () =>
          assertReturns<DR<SpotifyApi.UsersFollowedArtistsResponse>>(
            Client.Users.getUsersFollowedArtists({ limit, after: stringId }),
          ),
      },
      {
        name: 'followArtists',
        fn: () =>
          assertReturns<DR<SpotifyApi.FollowArtistsOrUsersResponse>>(
            Client.Users.followArtists(stringIds),
          ),
      },
      {
        name: 'followUsers',
        fn: () =>
          assertReturns<DR<SpotifyApi.FollowArtistsOrUsersResponse>>(
            Client.Users.followUsers(stringIds),
          ),
      },

      {
        name: 'unfollowArtists',
        fn: () =>
          assertReturns<DR<SpotifyApi.UnfollowArtistsOrUsersResponse>>(
            Client.Users.unfollowArtists(stringIds),
          ),
      },
      {
        name: 'unfollowUsers',
        fn: () =>
          assertReturns<DR<SpotifyApi.UnfollowArtistsOrUsersResponse>>(
            Client.Users.unfollowUsers(stringIds),
          ),
      },

      {
        name: 'checkFollowsArtists',
        fn: () =>
          assertReturns<DR<SpotifyApi.UserFollowsUsersOrArtistsResponse>>(
            Client.Users.checkFollowsArtists(stringIds),
          ),
      },
      {
        name: 'checkFollowsUsers',
        fn: () =>
          assertReturns<DR<SpotifyApi.UserFollowsUsersOrArtistsResponse>>(
            Client.Users.checkFollowsUsers(stringIds),
          ),
      },
      {
        name: 'checkUsersFollowPlaylist',
        fn: () =>
          assertReturns<DR<SpotifyApi.UsersFollowPlaylistResponse>>(
            Client.Users.checkUsersFollowPlaylist(stringId, stringIds),
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
              additional_types,
              fields,
              market,
            }),
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
            }),
          ),
      },
      {
        name: 'getPlaylistItems',
        fn: () =>
          assertReturns<DR<SpotifyApi.PlaylistTrackResponse>>(
            Client.Playlists.getPlaylistItems(stringId, {
              additional_types,
              fields,
              market,
              limit,
              offset,
            }),
          ),
      },
      {
        name: 'addPlaylistItems',
        fn: () =>
          assertReturns<DR<SpotifyApi.AddTracksToPlaylistResponse>>(
            Client.Playlists.addPlaylistItems(stringId, uris, { position: 0 }),
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
            }),
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
              },
            ),
          ),
      },
      {
        name: 'getCurrentUsersPlaylists',
        fn: () =>
          assertReturns<DR<SpotifyApi.ListOfUsersPlaylistsResponse>>(
            Client.Playlists.getCurrentUsersPlaylists({
              limit,
              offset,
            }),
          ),
      },
      {
        name: 'getUsersPlaylists',
        fn: () =>
          assertReturns<DR<SpotifyApi.ListOfUsersPlaylistsResponse>>(
            Client.Playlists.getUsersPlaylists(stringId, {
              limit,
              offset,
            }),
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
            }),
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
            }),
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
            }),
          ),
      },
      {
        name: 'getPlaylistCoverImage',
        fn: () =>
          assertReturns<DR<SpotifyApi.PlaylistCoverImageResponse>>(
            Client.Playlists.getPlaylistCoverImage(stringId),
          ),
      },
      {
        name: 'uploadCustomPlaylistCoverImage',
        fn: () =>
          assertReturns<DR<SpotifyApi.UploadCustomPlaylistCoverImageResponse>>(
            Client.Playlists.uploadCustomPlaylistCoverImage(
              stringId,
              'data:image/jpeg;base64,/9j/AAAAAAAAAAAAP/sABFEdW',
            ),
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
            }),
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
            }),
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
            Client.Genres.getAvailableGenreSeeds(),
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
            Client.Player.getPlaybackState({ additional_types, market }),
          ),
      },
      {
        name: 'transferPlayback',
        fn: () =>
          assertReturns<DR<VoidResponse>>(
            Client.Player.transferPlayback([stringId], { play: true }),
          ),
      },
      {
        name: 'getAvailableDevices',
        fn: () =>
          assertReturns<DR<SpotifyApi.UserDevicesResponse>>(
            Client.Player.getAvailableDevices(),
          ),
      },
      {
        name: 'getCurrentlyPlayingTrack',
        fn: () =>
          assertReturns<DR<SpotifyApi.CurrentPlaybackResponse>>(
            Client.Player.getCurrentlyPlayingTrack({
              additional_types,
              market,
            }),
          ),
      },
      {
        name: 'startOrResumePlayback',
        fn: () =>
          assertReturns<DR<VoidResponse>>(
            Client.Player.startOrResumePlayback({
              device_id: stringId,
              context_uri: stringId,
              offset: {},
              position_ms: 1,
              uris,
            }),
          ),
      },
      {
        name: 'pausePlayback',
        fn: () =>
          assertReturns<DR<VoidResponse>>(
            Client.Player.pausePlayback({ device_id: stringId }),
          ),
      },
      {
        name: 'skipToNext',
        fn: () =>
          assertReturns<DR<VoidResponse>>(
            Client.Player.skipToNext({ device_id: stringId }),
          ),
      },
      {
        name: 'skipToPrevious',
        fn: () =>
          assertReturns<DR<VoidResponse>>(
            Client.Player.skipToPrevious({ device_id: stringId }),
          ),
      },
      {
        name: 'seekToPosition',
        fn: () =>
          assertReturns<DR<VoidResponse>>(
            Client.Player.seekToPosition(123, { device_id: stringId }),
          ),
      },
      {
        name: 'setRepeatMode',
        fn: () =>
          assertReturns<DR<VoidResponse>>(
            Client.Player.setRepeatMode('off', { device_id: stringId }),
          ),
      },
      {
        name: 'setPlaybackVolume',
        fn: () =>
          assertReturns<DR<VoidResponse>>(
            Client.Player.setPlaybackVolume(60, { device_id: stringId }),
          ),
      },
      {
        name: 'togglePlaybackShuffle',
        fn: () =>
          assertReturns<DR<VoidResponse>>(
            Client.Player.togglePlaybackShuffle(true, { device_id: stringId }),
          ),
      },
      {
        name: 'getRecentlyPlayedTracks',
        fn: () =>
          assertReturns<DR<SpotifyApi.UsersRecentlyPlayedTracksResponse>>(
            Client.Player.getRecentlyPlayedTracks({
              limit: 1,
              after: 1,
              before: 1,
            }),
          ),
      },
      {
        name: 'getUsersQueue',
        fn: () =>
          assertReturns<DR<SpotifyApi.UsersQueueResponse>>(
            Client.Player.getUsersQueue(),
          ),
      },
      {
        name: 'addToQueue',
        fn: () =>
          assertReturns<DR<SpotifyApi.AddToQueueResponse>>(
            Client.Player.addToQueue(stringId, { device_id: stringId }),
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
          assertReturns<DR<SpotifyApi.AvailableMarketsResponse>>(
            Client.Markets.getAvailableMarkets(),
          ),
      },
    ],
  },
  {
    name: 'Future',
    tests: [
      {
        name: 'freestyle request',
        fn: () =>
          assertReturns<DR<string[]>>(
            Client.future.request<string[]>({
              url: 'https://example.com',
              headers: {
                'Content-Type': 'application/json',
              },
              method: 'POST',
            }),
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
