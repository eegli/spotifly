import { expectType } from 'tsd-lite';
import { initialize } from '../../src/index';
import { DataResponse as DR } from '../../src/types';

const SPT = initialize({ accessToken: '' });

const stringId = 'id';
const stringIds: string[] = [];

describe('Albums', () => {
  test('Album', async () => {
    expectType<DR<SpotifyApi.SingleAlbumResponse>>(
      await SPT.Albums.Album.get(stringId)
    );
    expectType<DR<SpotifyApi.MultipleAlbumsResponse>>(
      await SPT.Albums.Album.getSeveral(stringIds)
    );
    expectType<DR<SpotifyApi.MultipleAlbumsResponse>[]>(
      await SPT.Albums.Album.getAll(stringIds)(
        (data: DR<SpotifyApi.MultipleAlbumsResponse>) => data
      )
    );
  });
  test('NewReleases', async () => {
    expectType<DR<SpotifyApi.ListOfNewReleasesResponse>>(
      await SPT.Albums.NewReleases.get()
    );
  });
  test('Tracks', async () => {
    expectType<DR<SpotifyApi.AlbumTracksResponse>>(
      await SPT.Albums.Tracks.get(stringId)
    );
    expectType<DR<SpotifyApi.AlbumTracksResponse>[]>(
      await SPT.Albums.Tracks.getAll(stringId)(
        (data: DR<SpotifyApi.AlbumTracksResponse>) => data
      )
    );
  });
  test('UsersSaved', async () => {
    expectType<DR<SpotifyApi.UsersSavedAlbumsResponse>>(
      await SPT.Albums.UsersSaved.get()
    );
    expectType<DR<SpotifyApi.UsersSavedAlbumsResponse>[]>(
      await SPT.Albums.UsersSaved.getAll()(
        (data: DR<SpotifyApi.UsersSavedAlbumsResponse>) => data
      )
    );
    expectType<DR<SpotifyApi.SaveAlbumsForUserResponse>>(
      await SPT.Albums.UsersSaved.save(stringIds)
    );
    expectType<DR<SpotifyApi.SaveAlbumsForUserResponse>[]>(
      await SPT.Albums.UsersSaved.saveAll(stringIds)(
        (data: DR<SpotifyApi.SaveAlbumsForUserResponse>) => data
      )
    );
    expectType<DR<SpotifyApi.RemoveAlbumsForUserResponse>>(
      await SPT.Albums.UsersSaved.remove(stringIds)
    );
    expectType<DR<SpotifyApi.RemoveAlbumsForUserResponse>[]>(
      await SPT.Albums.UsersSaved.removeAll(stringIds)(
        (data: DR<SpotifyApi.RemoveAlbumsForUserResponse>) => data
      )
    );
    expectType<DR<SpotifyApi.CheckUserSavedAlbumsResponse>>(
      await SPT.Albums.UsersSaved.check(stringIds)
    );
    expectType<DR<SpotifyApi.CheckUserSavedAlbumsResponse>[]>(
      await SPT.Albums.UsersSaved.checkAll(stringIds)(
        (data: DR<SpotifyApi.CheckUserSavedAlbumsResponse>) => data
      )
    );
  });
});

describe('Artists', () => {
  test('Artist', async () => {
    expectType<DR<SpotifyApi.SingleArtistResponse>>(
      await SPT.Artists.Artist.get(stringId)
    );
    expectType<DR<SpotifyApi.MultipleArtistsResponse>>(
      await SPT.Artists.Artist.getSeveral(stringIds)
    );
    expectType<DR<SpotifyApi.MultipleArtistsResponse>[]>(
      await SPT.Artists.Artist.getAll(stringIds)(
        (data: DR<SpotifyApi.MultipleArtistsResponse>) => data
      )
    );
  });
  test('Albums', async () => {
    expectType<DR<SpotifyApi.ArtistsAlbumsResponse>>(
      await SPT.Artists.Albums.get(stringId)
    );
    expectType<DR<SpotifyApi.ArtistsAlbumsResponse>[]>(
      await SPT.Artists.Albums.getAll(stringId)(
        (data: DR<SpotifyApi.ArtistsAlbumsResponse>) => data
      )
    );
  });
  test('TopTracks', async () => {
    expectType<DR<SpotifyApi.ArtistsTopTracksResponse>>(
      await SPT.Artists.TopTracks.get(stringId)
    );
  });
  test('RelatedArtists', async () => {
    expectType<DR<SpotifyApi.ArtistsRelatedArtistsResponse>>(
      await SPT.Artists.RelatedArtists.get(stringId)
    );
  });
});

describe('Episodes', () => {
  test('Episode', async () => {
    expectType<DR<SpotifyApi.SingleEpisodeResponse>>(
      await SPT.Episodes.Episode.get(stringId)
    );
    expectType<DR<SpotifyApi.MultipleEpisodesResponse>>(
      await SPT.Episodes.Episode.getSeveral(stringIds)
    );
    expectType<DR<SpotifyApi.MultipleEpisodesResponse>[]>(
      await SPT.Episodes.Episode.getAll(stringIds)(
        (data: DR<SpotifyApi.MultipleEpisodesResponse>) => data
      )
    );
  });
  test('UsersSaved', async () => {
    expectType<DR<SpotifyApi.UsersSavedEpisodesResponse>>(
      await SPT.Episodes.UsersSaved.get()
    );
    expectType<DR<SpotifyApi.UsersSavedEpisodesResponse>[]>(
      await SPT.Episodes.UsersSaved.getAll()(
        (data: DR<SpotifyApi.UsersSavedEpisodesResponse>) => data
      )
    );
    expectType<DR<SpotifyApi.VoidResponse>>(
      await SPT.Episodes.UsersSaved.save(stringIds)
    );
    expectType<DR<SpotifyApi.VoidResponse>[]>(
      await SPT.Episodes.UsersSaved.saveAll(stringIds)(
        (data: DR<SpotifyApi.VoidResponse>) => data
      )
    );
    expectType<DR<SpotifyApi.VoidResponse>>(
      await SPT.Episodes.UsersSaved.remove(stringIds)
    );
    expectType<DR<SpotifyApi.VoidResponse>[]>(
      await SPT.Episodes.UsersSaved.removeAll(stringIds)(
        (data: DR<SpotifyApi.VoidResponse>) => data
      )
    );
    expectType<DR<boolean[]>>(await SPT.Episodes.UsersSaved.check(stringIds));
    expectType<DR<boolean[]>[]>(
      await SPT.Episodes.UsersSaved.checkAll(stringIds)(
        (data: DR<boolean[]>) => data
      )
    );
  });
});

describe('Search', () => {
  test('forItem', async () => {
    expectType<DR<SpotifyApi.SearchResponse>>(
      await SPT.Search.forItem({ query: stringId, type: 'episode' })
    );
  });
});

describe('Tracks', () => {
  test('Track', async () => {
    expectType<DR<SpotifyApi.SingleTrackResponse>>(
      await SPT.Tracks.Track.get(stringId)
    );
    expectType<DR<SpotifyApi.MultipleTracksResponse>>(
      await SPT.Tracks.Track.getSeveral(stringIds)
    );
    expectType<DR<SpotifyApi.MultipleTracksResponse>[]>(
      await SPT.Tracks.Track.getAll(stringIds)(
        (data: DR<SpotifyApi.MultipleTracksResponse>) => data
      )
    );
  });
  test('AudioAnalysis', async () => {
    expectType<DR<SpotifyApi.AudioAnalysisResponse>>(
      await SPT.Tracks.AudioAnalysis.get(stringId)
    );
  });
  test('AudioFeatures', async () => {
    expectType<DR<SpotifyApi.AudioFeaturesResponse>>(
      await SPT.Tracks.AudioFeatures.get(stringId)
    );
    expectType<DR<SpotifyApi.MultipleAudioFeaturesResponse>>(
      await SPT.Tracks.AudioFeatures.getSeveral(stringIds)
    );
    expectType<DR<SpotifyApi.MultipleAudioFeaturesResponse>[]>(
      await SPT.Tracks.AudioFeatures.getAll(stringIds)(
        (data: DR<SpotifyApi.MultipleAudioFeaturesResponse>) => data
      )
    );
  });
  test('Recommendations', async () => {
    expectType<DR<SpotifyApi.RecommendationsFromSeedsResponse>>(
      await SPT.Tracks.Recommendations.get({
        seed_artists: stringId,
        seed_genres: stringId,
        seed_tracks: stringId,
      })
    );
  });
  test('UsersSaved', async () => {
    expectType<DR<SpotifyApi.UsersSavedTracksResponse>>(
      await SPT.Tracks.UsersSaved.get()
    );
    expectType<DR<SpotifyApi.UsersSavedTracksResponse>[]>(
      await SPT.Tracks.UsersSaved.getAll()(
        (data: DR<SpotifyApi.UsersSavedTracksResponse>) => data
      )
    );
    expectType<DR<SpotifyApi.SaveTracksForUserResponse>>(
      await SPT.Tracks.UsersSaved.save(stringIds)
    );
    expectType<DR<SpotifyApi.SaveTracksForUserResponse>[]>(
      await SPT.Tracks.UsersSaved.saveAll(stringIds)(
        (data: DR<SpotifyApi.SaveTracksForUserResponse>) => data
      )
    );
    expectType<DR<SpotifyApi.RemoveUsersSavedTracksResponse>>(
      await SPT.Tracks.UsersSaved.remove(stringIds)
    );
    expectType<DR<SpotifyApi.RemoveUsersSavedTracksResponse>[]>(
      await SPT.Tracks.UsersSaved.removeAll(stringIds)(
        (data: DR<SpotifyApi.RemoveUsersSavedTracksResponse>) => data
      )
    );
    expectType<DR<SpotifyApi.CheckUsersSavedTracksResponse>>(
      await SPT.Tracks.UsersSaved.check(stringIds)
    );
    expectType<DR<SpotifyApi.CheckUsersSavedTracksResponse>[]>(
      await SPT.Tracks.UsersSaved.checkAll(stringIds)(
        (data: DR<SpotifyApi.CheckUsersSavedTracksResponse>) => data
      )
    );
  });
});

describe('Users', () => {
  test('OwnProfile', async () => {
    expectType<DR<SpotifyApi.UserProfileResponse>>(
      await SPT.Users.OwnProfile.get()
    );
  });
  test('Profile', async () => {
    expectType<DR<SpotifyApi.UserProfileResponse>>(
      await SPT.Users.Profile.get(stringId)
    );
  });
  test('CheckFollows', async () => {
    expectType<DR<SpotifyApi.UserFollowsUsersOrArtistsResponse>[]>(
      await SPT.Users.CheckFollows.allArtists(stringIds)()
    );
    expectType<DR<SpotifyApi.UserFollowsUsersOrArtistsResponse>>(
      await SPT.Users.CheckFollows.artists(stringIds)
    );
    expectType<DR<SpotifyApi.UserFollowsUsersOrArtistsResponse>[]>(
      await SPT.Users.CheckFollows.allUsers(stringIds)()
    );
    expectType<DR<SpotifyApi.UserFollowsUsersOrArtistsResponse>>(
      await SPT.Users.CheckFollows.users(stringIds)
    );
    expectType<DR<SpotifyApi.UsersFollowPlaylistResponse>>(
      await SPT.Users.CheckFollows.playlist({
        playlistId: stringId,
        userIds: stringIds,
      })
    );
  });
  test('Follow', async () => {
    expectType<DR<SpotifyApi.FollowArtistsOrUsersResponse>[]>(
      await SPT.Users.Follow.allArtists(stringIds)()
    );
    expectType<DR<SpotifyApi.FollowArtistsOrUsersResponse>>(
      await SPT.Users.Follow.artists(stringIds)
    );
    expectType<DR<SpotifyApi.FollowArtistsOrUsersResponse>[]>(
      await SPT.Users.Follow.allUsers(stringIds)()
    );
    expectType<DR<SpotifyApi.FollowArtistsOrUsersResponse>>(
      await SPT.Users.Follow.users(stringIds)
    );
    expectType<DR<SpotifyApi.FollowPlaylistResponse>>(
      await SPT.Users.Follow.playlist(stringId)
    );
  });
  test('Unfollow', async () => {
    expectType<DR<SpotifyApi.UnfollowArtistsOrUsersResponse>[]>(
      await SPT.Users.Unfollow.allArtists(stringIds)()
    );
    expectType<DR<SpotifyApi.UnfollowArtistsOrUsersResponse>>(
      await SPT.Users.Unfollow.artists(stringIds)
    );
    expectType<DR<SpotifyApi.UnfollowArtistsOrUsersResponse>[]>(
      await SPT.Users.Unfollow.allUsers(stringIds)()
    );
    expectType<DR<SpotifyApi.UnfollowArtistsOrUsersResponse>>(
      await SPT.Users.Unfollow.users(stringIds)
    );
    expectType<DR<SpotifyApi.UnfollowPlaylistResponse>>(
      await SPT.Users.Unfollow.playlist(stringId)
    );
  });
  test('FollowedArtists', async () => {
    expectType<DR<SpotifyApi.UsersFollowedArtistsResponse>>(
      await SPT.Users.FollowedArtists.get()
    );
  });
  test('TopArtists', async () => {
    expectType<DR<SpotifyApi.UsersTopArtistsResponse>>(
      await SPT.Users.TopArtists.get()
    );
    expectType<DR<SpotifyApi.UsersTopArtistsResponse>[]>(
      await SPT.Users.TopArtists.getAll()()
    );
  });
  test('TopTracks', async () => {
    expectType<DR<SpotifyApi.UsersTopTracksResponse>>(
      await SPT.Users.TopTracks.get()
    );
    expectType<DR<SpotifyApi.UsersTopTracksResponse>[]>(
      await SPT.Users.TopTracks.getAll()()
    );
  });
});
