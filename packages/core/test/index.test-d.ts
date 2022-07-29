import { expectAssignable, expectType } from 'tsd-lite';
import { init } from '../src/index';
import { DataResponse as R } from '../src/request';

const Spotifly = init({ accessToken: '' });

describe('Lib type definitions', () => {
  test('Artists', async () => {
    expectType<R<SpotifyApi.SingleArtistResponse>>(
      await Spotifly.Artists.get({ artistId: '' })
    );
    expectType<R<SpotifyApi.MultipleArtistsResponse>>(
      await Spotifly.Artists.getMultiple({ artistIds: [] })
    );
    expectAssignable<
      Parameters<typeof Spotifly.Artists.extended.getAllArtists>[0]
    >({ artistIds: [] });
    expectAssignable<
      Parameters<typeof Spotifly.Artists.extended.getAllArtists>[1]
    >((_: R<SpotifyApi.MultipleArtistsResponse>) => null);
  });
  test('Tracks', async () => {
    expectType<R<SpotifyApi.SingleTrackResponse>>(
      await Spotifly.Tracks.get({ trackId: '' })
    );

    expectType<R<SpotifyApi.MultipleTracksResponse>>(
      await Spotifly.Tracks.getMultiple({ trackIds: [] })
    );

    expectType<R<SpotifyApi.UsersSavedTracksResponse>>(
      await Spotifly.Tracks.UsersSaved.get()
    );

    expectType<R<SpotifyApi.UsersSavedTracksResponse>[]>(
      await Spotifly.Tracks.extended.getAllUserSavedTracks()
    );

    expectAssignable<
      Parameters<typeof Spotifly.Tracks.extended.getAllUserSavedTracks>[0]
    >((_: R<SpotifyApi.UsersSavedTracksResponse>) => null);

    expectType<R<SpotifyApi.SaveTracksForUserResponse>>(
      await Spotifly.Tracks.UsersSaved.save({ trackIds: [''] })
    );

    expectType<R<SpotifyApi.RemoveUsersSavedTracksResponse>>(
      await Spotifly.Tracks.UsersSaved.remove({ trackIds: [''] })
    );

    expectType<R<SpotifyApi.CheckUsersSavedTracksResponse>>(
      await Spotifly.Tracks.UsersSaved.check({ trackIds: [''] })
    );

    expectType<R<SpotifyApi.AudioFeaturesResponse>>(
      await Spotifly.Tracks.AudioFeatures.get({ trackId: '' })
    );

    expectType<R<SpotifyApi.MultipleAudioFeaturesResponse>>(
      await Spotifly.Tracks.AudioFeatures.getMultiple({ trackIds: [''] })
    );

    expectType<R<SpotifyApi.AudioAnalysisResponse>>(
      await Spotifly.Tracks.AudioAnalysis.get({ trackId: '' })
    );

    expectType<R<SpotifyApi.RecommendationsFromSeedsResponse>>(
      await Spotifly.Tracks.Recommendations.get({
        seed_artists: '',
        seed_genres: '',
        seed_tracks: '',
      })
    );
  });
});
