import { expectType } from 'tsd-lite';
import { initialize } from '../src/index';
import { DataResponse as DR } from '../src/types';

const Spotifly = initialize({ accessToken: '' });

const stringId = 'id';
const stringIds: string[] = [];

describe('Albums', () => {
  test('Album', async () => {
    expectType<DR<SpotifyApi.SingleAlbumResponse>>(
      await Spotifly.Albums.Album.get(stringId)
    );
    expectType<DR<SpotifyApi.MultipleAlbumsResponse>>(
      await Spotifly.Albums.Album.getSeveral(stringIds)
    );
    expectType<DR<SpotifyApi.MultipleAlbumsResponse>[]>(
      await Spotifly.Albums.Album.getAll(stringIds)(
        (data: DR<SpotifyApi.MultipleAlbumsResponse>) => data
      )
    );
  });
  test('NewReleases', async () => {
    expectType<DR<SpotifyApi.ListOfNewReleasesResponse>>(
      await Spotifly.Albums.NewReleases.get()
    );
  });
  test('Tracks', async () => {
    expectType<DR<SpotifyApi.AlbumTracksResponse>>(
      await Spotifly.Albums.Tracks.get(stringId)
    );
    expectType<DR<SpotifyApi.AlbumTracksResponse>[]>(
      await Spotifly.Albums.Tracks.getAll(stringId)(
        (data: DR<SpotifyApi.AlbumTracksResponse>) => data
      )
    );
  });
  test('UsersSaved', async () => {
    expectType<DR<SpotifyApi.UsersSavedAlbumsResponse>>(
      await Spotifly.Albums.UsersSaved.get()
    );
    expectType<DR<SpotifyApi.UsersSavedAlbumsResponse>[]>(
      await Spotifly.Albums.UsersSaved.getAll()(
        (data: DR<SpotifyApi.UsersSavedAlbumsResponse>) => data
      )
    );
    expectType<DR<SpotifyApi.SaveAlbumsForUserResponse>>(
      await Spotifly.Albums.UsersSaved.save(stringIds)
    );
    expectType<DR<SpotifyApi.SaveAlbumsForUserResponse>[]>(
      await Spotifly.Albums.UsersSaved.saveAll(stringIds)(
        (data: DR<SpotifyApi.SaveAlbumsForUserResponse>) => data
      )
    );
    expectType<DR<SpotifyApi.RemoveAlbumsForUserResponse>>(
      await Spotifly.Albums.UsersSaved.remove(stringIds)
    );
    expectType<DR<SpotifyApi.RemoveAlbumsForUserResponse>[]>(
      await Spotifly.Albums.UsersSaved.removeAll(stringIds)(
        (data: DR<SpotifyApi.RemoveAlbumsForUserResponse>) => data
      )
    );
    expectType<DR<SpotifyApi.CheckUserSavedAlbumsResponse>>(
      await Spotifly.Albums.UsersSaved.check(stringIds)
    );
    expectType<DR<SpotifyApi.CheckUserSavedAlbumsResponse>[]>(
      await Spotifly.Albums.UsersSaved.checkAll(stringIds)(
        (data: DR<SpotifyApi.CheckUserSavedAlbumsResponse>) => data
      )
    );
  });
});

describe('Artists', () => {
  test('Artist', async () => {
    expectType<DR<SpotifyApi.SingleArtistResponse>>(
      await Spotifly.Artists.Artist.get(stringId)
    );
    expectType<DR<SpotifyApi.MultipleArtistsResponse>>(
      await Spotifly.Artists.Artist.getSeveral(stringIds)
    );
    expectType<DR<SpotifyApi.MultipleArtistsResponse>[]>(
      await Spotifly.Artists.Artist.getAll(stringIds)(
        (data: DR<SpotifyApi.MultipleArtistsResponse>) => data
      )
    );
  });
  test('Albums', async () => {
    expectType<DR<SpotifyApi.ArtistsAlbumsResponse>>(
      await Spotifly.Artists.Albums.get(stringId)
    );
    expectType<DR<SpotifyApi.ArtistsAlbumsResponse>[]>(
      await Spotifly.Artists.Albums.getAll(stringId)(
        (data: DR<SpotifyApi.ArtistsAlbumsResponse>) => data
      )
    );
  });
  test('TopTracks', async () => {
    expectType<DR<SpotifyApi.ArtistsTopTracksResponse>>(
      await Spotifly.Artists.TopTracks.get(stringId)
    );
  });
  test('RelatedArtists', async () => {
    expectType<DR<SpotifyApi.ArtistsRelatedArtistsResponse>>(
      await Spotifly.Artists.RelatedArtists.get(stringId)
    );
  });
});

describe('Episodes', () => {
  test('Episode', async () => {
    expectType<DR<SpotifyApi.SingleEpisodeResponse>>(
      await Spotifly.Episodes.Episode.get(stringId)
    );
    expectType<DR<SpotifyApi.MultipleEpisodesResponse>>(
      await Spotifly.Episodes.Episode.getSeveral(stringIds)
    );
    expectType<DR<SpotifyApi.MultipleEpisodesResponse>[]>(
      await Spotifly.Episodes.Episode.getAll(stringIds)(
        (data: DR<SpotifyApi.MultipleEpisodesResponse>) => data
      )
    );
  });
  test('UsersSaved', async () => {
    expectType<DR<SpotifyApi.UsersSavedEpisodesResponse>>(
      await Spotifly.Episodes.UsersSaved.get()
    );
    expectType<DR<SpotifyApi.UsersSavedEpisodesResponse>[]>(
      await Spotifly.Episodes.UsersSaved.getAll()(
        (data: DR<SpotifyApi.UsersSavedEpisodesResponse>) => data
      )
    );
    expectType<DR<SpotifyApi.VoidResponse>>(
      await Spotifly.Episodes.UsersSaved.save(stringIds)
    );
    expectType<DR<SpotifyApi.VoidResponse>[]>(
      await Spotifly.Episodes.UsersSaved.saveAll(stringIds)(
        (data: DR<SpotifyApi.VoidResponse>) => data
      )
    );
    expectType<DR<SpotifyApi.VoidResponse>>(
      await Spotifly.Episodes.UsersSaved.remove(stringIds)
    );
    expectType<DR<SpotifyApi.VoidResponse>[]>(
      await Spotifly.Episodes.UsersSaved.removeAll(stringIds)(
        (data: DR<SpotifyApi.VoidResponse>) => data
      )
    );
    expectType<DR<boolean[]>>(
      await Spotifly.Episodes.UsersSaved.check(stringIds)
    );
    expectType<DR<boolean[]>[]>(
      await Spotifly.Episodes.UsersSaved.checkAll(stringIds)(
        (data: DR<boolean[]>) => data
      )
    );
  });
});

describe('Search', () => {
  test('forItem', async () => {
    expectType<DR<SpotifyApi.SearchResponse>>(
      await Spotifly.Search.forItem({ query: stringId, type: 'episode' })
    );
  });
});

describe('Tracks', () => {
  test('Track', async () => {
    expectType<DR<SpotifyApi.SingleTrackResponse>>(
      await Spotifly.Tracks.Track.get(stringId)
    );
    expectType<DR<SpotifyApi.MultipleTracksResponse>>(
      await Spotifly.Tracks.Track.getSeveral(stringIds)
    );
    expectType<DR<SpotifyApi.MultipleTracksResponse>[]>(
      await Spotifly.Tracks.Track.getAll(stringIds)(
        (data: DR<SpotifyApi.MultipleTracksResponse>) => data
      )
    );
  });
  test('AudioAnalysis', async () => {
    expectType<DR<SpotifyApi.AudioAnalysisResponse>>(
      await Spotifly.Tracks.AudioAnalysis.get(stringId)
    );
  });
  test('AudioFeatures', async () => {
    expectType<DR<SpotifyApi.AudioFeaturesResponse>>(
      await Spotifly.Tracks.AudioFeatures.get(stringId)
    );
    expectType<DR<SpotifyApi.MultipleAudioFeaturesResponse>>(
      await Spotifly.Tracks.AudioFeatures.getSeveral(stringIds)
    );
    expectType<DR<SpotifyApi.MultipleAudioFeaturesResponse>[]>(
      await Spotifly.Tracks.AudioFeatures.getAll(stringIds)(
        (data: DR<SpotifyApi.MultipleAudioFeaturesResponse>) => data
      )
    );
  });
  test('Recommendations', async () => {
    expectType<DR<SpotifyApi.RecommendationsFromSeedsResponse>>(
      await Spotifly.Tracks.Recommendations.get({
        seed_artists: stringId,
        seed_genres: stringId,
        seed_tracks: stringId,
      })
    );
  });
  test('UsersSaved', async () => {
    expectType<DR<SpotifyApi.UsersSavedTracksResponse>>(
      await Spotifly.Tracks.UsersSaved.get()
    );
    expectType<DR<SpotifyApi.UsersSavedTracksResponse>[]>(
      await Spotifly.Tracks.UsersSaved.getAll()(
        (data: DR<SpotifyApi.UsersSavedTracksResponse>) => data
      )
    );
    expectType<DR<SpotifyApi.SaveTracksForUserResponse>>(
      await Spotifly.Tracks.UsersSaved.save(stringIds)
    );
    expectType<DR<SpotifyApi.SaveTracksForUserResponse>[]>(
      await Spotifly.Tracks.UsersSaved.saveAll(stringIds)(
        (data: DR<SpotifyApi.SaveTracksForUserResponse>) => data
      )
    );
    expectType<DR<SpotifyApi.RemoveUsersSavedTracksResponse>>(
      await Spotifly.Tracks.UsersSaved.remove(stringIds)
    );
    expectType<DR<SpotifyApi.RemoveUsersSavedTracksResponse>[]>(
      await Spotifly.Tracks.UsersSaved.removeAll(stringIds)(
        (data: DR<SpotifyApi.RemoveUsersSavedTracksResponse>) => data
      )
    );
    expectType<DR<SpotifyApi.CheckUsersSavedTracksResponse>>(
      await Spotifly.Tracks.UsersSaved.check(stringIds)
    );
    expectType<DR<SpotifyApi.CheckUsersSavedTracksResponse>[]>(
      await Spotifly.Tracks.UsersSaved.checkAll(stringIds)(
        (data: DR<SpotifyApi.CheckUsersSavedTracksResponse>) => data
      )
    );
  });
});

describe('Users', () => {
  test('OwnProfile', async () => {
    expectType<DR<SpotifyApi.UserProfileResponse>>(
      await Spotifly.Users.OwnProfile.get()
    );
  });
  test('Profile', async () => {
    expectType<DR<SpotifyApi.UserProfileResponse>>(
      await Spotifly.Users.Profile.get(stringId)
    );
  });
  test('CheckFollows', async () => {
    expectType<DR<SpotifyApi.UserFollowsUsersOrArtistsResponse>[]>(
      await Spotifly.Users.CheckFollows.allArtists(stringIds)()
    );
    expectType<DR<SpotifyApi.UserFollowsUsersOrArtistsResponse>>(
      await Spotifly.Users.CheckFollows.artists(stringIds)
    );
    expectType<DR<SpotifyApi.UserFollowsUsersOrArtistsResponse>[]>(
      await Spotifly.Users.CheckFollows.allUsers(stringIds)()
    );
    expectType<DR<SpotifyApi.UserFollowsUsersOrArtistsResponse>>(
      await Spotifly.Users.CheckFollows.users(stringIds)
    );
    expectType<DR<SpotifyApi.UsersFollowPlaylistResponse>>(
      await Spotifly.Users.CheckFollows.playlist({
        playlistId: stringId,
        userIds: stringIds,
      })
    );
  });
  test('Follow', async () => {
    expectType<DR<SpotifyApi.FollowArtistsOrUsersResponse>[]>(
      await Spotifly.Users.Follow.allArtists(stringIds)()
    );
    expectType<DR<SpotifyApi.FollowArtistsOrUsersResponse>>(
      await Spotifly.Users.Follow.artists(stringIds)
    );
    expectType<DR<SpotifyApi.FollowArtistsOrUsersResponse>[]>(
      await Spotifly.Users.Follow.allUsers(stringIds)()
    );
    expectType<DR<SpotifyApi.FollowArtistsOrUsersResponse>>(
      await Spotifly.Users.Follow.users(stringIds)
    );
    expectType<DR<SpotifyApi.FollowPlaylistResponse>>(
      await Spotifly.Users.Follow.playlist(stringId)
    );
  });
  test('Unfollow', async () => {
    expectType<DR<SpotifyApi.UnfollowArtistsOrUsersResponse>[]>(
      await Spotifly.Users.Unfollow.allArtists(stringIds)()
    );
    expectType<DR<SpotifyApi.UnfollowArtistsOrUsersResponse>>(
      await Spotifly.Users.Unfollow.artists(stringIds)
    );
    expectType<DR<SpotifyApi.UnfollowArtistsOrUsersResponse>[]>(
      await Spotifly.Users.Unfollow.allUsers(stringIds)()
    );
    expectType<DR<SpotifyApi.UnfollowArtistsOrUsersResponse>>(
      await Spotifly.Users.Unfollow.users(stringIds)
    );
    expectType<DR<SpotifyApi.UnfollowPlaylistResponse>>(
      await Spotifly.Users.Unfollow.playlist(stringId)
    );
  });
  test('FollowedArtists', async () => {
    expectType<DR<SpotifyApi.UsersFollowedArtistsResponse>>(
      await Spotifly.Users.FollowedArtists.get()
    );
  });
  test('TopArtists', async () => {
    expectType<DR<SpotifyApi.UsersTopArtistsResponse>>(
      await Spotifly.Users.TopArtists.get()
    );
    expectType<DR<SpotifyApi.UsersTopArtistsResponse>[]>(
      await Spotifly.Users.TopArtists.getAll()()
    );
  });
  test('TopTracks', async () => {
    expectType<DR<SpotifyApi.UsersTopTracksResponse>>(
      await Spotifly.Users.TopTracks.get()
    );
    expectType<DR<SpotifyApi.UsersTopTracksResponse>[]>(
      await Spotifly.Users.TopTracks.getAll()()
    );
  });
});
