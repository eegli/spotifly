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
      await Spotifly.Albums.Tracks.getAll(stringId)()
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

describe('Lib type definitions - Tracks', () => {
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
