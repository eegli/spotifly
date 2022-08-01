import { expectAssignable, expectType } from 'tsd-lite';
import { init } from '../src/index';
import { DataResponse as R } from '../src/request';

const Spotifly = init({ accessToken: 'stringId' });

type CurriedParameters<T> = T extends (
  ...args: any[]
) => (...args: infer A) => unknown
  ? A
  : never;

const stringId: string = 'id';
const stringIds: string[] = [];

describe('Lib type definitions - Artists', () => {
  test('Artist', async () => {
    expectType<R<SpotifyApi.SingleArtistResponse>>(
      await Spotifly.Artists.Artist.get(stringId)
    );
    expectType<R<SpotifyApi.MultipleArtistsResponse>>(
      await Spotifly.Artists.Artist.getSeveral(stringIds)
    );
    expectAssignable<Parameters<typeof Spotifly.Artists.Artist.getAll>[0]>(
      stringIds
    );
    expectAssignable<
      CurriedParameters<typeof Spotifly.Artists.Artist.getAll>[0]
    >((data: R<SpotifyApi.MultipleArtistsResponse>) => data);
  });
  test('Albums', async () => {
    expectType<R<SpotifyApi.ArtistsAlbumsResponse>>(
      await Spotifly.Artists.Albums.get(stringId)
    );
    expectType<R<SpotifyApi.ArtistsAlbumsResponse>[]>(
      await Spotifly.Artists.Albums.getAll(stringId)()
    );
  });
  test('TopTracks', async () => {
    expectType<R<SpotifyApi.ArtistsTopTracksResponse>>(
      await Spotifly.Artists.TopTracks.get(stringId)
    );
  });
  test('RelatedArtists', async () => {
    expectType<R<SpotifyApi.ArtistsRelatedArtistsResponse>>(
      await Spotifly.Artists.RelatedArtists.get(stringId)
    );
  });
});

describe('Lib type definitions - Tracks', () => {
  test('Track', async () => {
    expectType<R<SpotifyApi.SingleTrackResponse>>(
      await Spotifly.Tracks.Track.get(stringId)
    );
    expectType<R<SpotifyApi.MultipleTracksResponse>>(
      await Spotifly.Tracks.Track.getSeveral(stringIds)
    );
    expectType<R<SpotifyApi.MultipleTracksResponse>[]>(
      await Spotifly.Tracks.Track.getAll(stringIds)()
    );
  });
  test('AudioAnalysis', async () => {
    expectType<R<SpotifyApi.AudioAnalysisResponse>>(
      await Spotifly.Tracks.AudioAnalysis.get(stringId)
    );
  });
  test('AudioFeatures', async () => {
    expectType<R<SpotifyApi.AudioFeaturesResponse>>(
      await Spotifly.Tracks.AudioFeatures.get(stringId)
    );
    expectType<R<SpotifyApi.MultipleAudioFeaturesResponse>>(
      await Spotifly.Tracks.AudioFeatures.getSeveral(stringIds)
    );
    expectType<R<SpotifyApi.MultipleAudioFeaturesResponse>[]>(
      await Spotifly.Tracks.AudioFeatures.getAll(stringIds)()
    );
  });
  test('Recommendations', async () => {
    expectType<R<SpotifyApi.RecommendationsFromSeedsResponse>>(
      await Spotifly.Tracks.Recommendations.get({
        seed_artists: stringId,
        seed_genres: stringId,
        seed_tracks: stringId,
      })
    );
  });
  test('UsersSaved', async () => {
    expectType<R<SpotifyApi.UsersSavedTracksResponse>>(
      await Spotifly.Tracks.UsersSaved.get()
    );
    expectType<R<SpotifyApi.UsersSavedTracksResponse>[]>(
      await Spotifly.Tracks.UsersSaved.getAll()()
    );
    expectAssignable<
      CurriedParameters<typeof Spotifly.Tracks.UsersSaved.getAll>[0]
    >((data: R<SpotifyApi.UsersSavedTracksResponse>) => data);
    expectType<R<SpotifyApi.SaveTracksForUserResponse>>(
      await Spotifly.Tracks.UsersSaved.save(stringIds)
    );
    expectType<R<SpotifyApi.SaveTracksForUserResponse>[]>(
      await Spotifly.Tracks.UsersSaved.saveAll(stringIds)()
    );
    expectType<R<SpotifyApi.RemoveUsersSavedTracksResponse>>(
      await Spotifly.Tracks.UsersSaved.remove(stringIds)
    );
    expectType<R<SpotifyApi.RemoveUsersSavedTracksResponse>[]>(
      await Spotifly.Tracks.UsersSaved.removeAll(stringIds)()
    );
    expectType<R<SpotifyApi.CheckUsersSavedTracksResponse>>(
      await Spotifly.Tracks.UsersSaved.check(stringIds)
    );
    expectType<R<SpotifyApi.CheckUsersSavedTracksResponse>[]>(
      await Spotifly.Tracks.UsersSaved.checkAll(stringIds)()
    );
  });
});
