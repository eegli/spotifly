import { expectAssignable, expectType } from 'tsd-lite';
import { init } from '../src/index';
import { DataResponse as R } from '../src/request';

const Spotifly = init({ accessToken: '' });

type CurriedParameters<T> = T extends (
  ...args: any[]
) => (...args: infer A) => any
  ? A
  : never;

describe('Lib type definitions', () => {
  test('Artists', async () => {
    expectType<R<SpotifyApi.SingleArtistResponse>>(
      await Spotifly.Artists.Artist.get('')
    );
    expectType<R<SpotifyApi.MultipleArtistsResponse>>(
      await Spotifly.Artists.Artist.getMultiple([''])
    );
    expectAssignable<Parameters<typeof Spotifly.Artists.Artist.getAll>[0]>([]);
    expectAssignable<
      CurriedParameters<typeof Spotifly.Artists.Artist.getAll>[0]
    >((_: R<SpotifyApi.MultipleArtistsResponse>) => null);
  });
  test('Tracks', async () => {
    expectType<R<SpotifyApi.SingleTrackResponse>>(
      await Spotifly.Tracks.Track.get('')
    );

    expectType<R<SpotifyApi.MultipleTracksResponse>>(
      await Spotifly.Tracks.Track.getMultiple([])
    );

    expectType<R<SpotifyApi.UsersSavedTracksResponse>>(
      await Spotifly.Tracks.UsersSaved.get()
    );

    expectType<R<SpotifyApi.UsersSavedTracksResponse>[]>(
      await Spotifly.Tracks.UsersSaved.getAll()()
    );

    expectAssignable<
      CurriedParameters<typeof Spotifly.Tracks.UsersSaved.getAll>[0]
    >((_: R<SpotifyApi.UsersSavedTracksResponse>) => null);

    expectType<R<SpotifyApi.SaveTracksForUserResponse>>(
      await Spotifly.Tracks.UsersSaved.save([])
    );

    expectType<R<SpotifyApi.RemoveUsersSavedTracksResponse>>(
      await Spotifly.Tracks.UsersSaved.remove([])
    );

    expectType<R<SpotifyApi.CheckUsersSavedTracksResponse>>(
      await Spotifly.Tracks.UsersSaved.check([])
    );

    expectType<R<SpotifyApi.AudioFeaturesResponse>>(
      await Spotifly.Tracks.AudioFeatures.get('')
    );

    expectType<R<SpotifyApi.MultipleAudioFeaturesResponse>>(
      await Spotifly.Tracks.AudioFeatures.getMultiple([])
    );

    expectType<R<SpotifyApi.AudioAnalysisResponse>>(
      await Spotifly.Tracks.AudioAnalysis.get('')
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
