import { expectAssignable, expectType } from 'tsd-lite';
import { DataResponse as R } from '../../src/abstract';
import TracksFactory from '../../src/models/tracks';

const Tracks = TracksFactory({ accessToken: '' });

expectType<R<SpotifyApi.SingleTrackResponse>>(
  await Tracks.SingleTrack.get({ trackId: '' })
);

expectType<R<SpotifyApi.MultipleTracksResponse>>(
  await Tracks.MultipleTracks.get({ trackIds: [] })
);

expectType<R<SpotifyApi.UsersSavedTracksResponse>>(
  await Tracks.UsersSaved.get()
);

declare function cb(resp: R<SpotifyApi.UsersSavedTracksResponse>): unknown;
expectType<R<SpotifyApi.UsersSavedTracksResponse>[]>(
  await Tracks.extended.allUserSavedTracks()
);
expectAssignable<
  Readonly<Parameters<typeof Tracks.extended.allUserSavedTracks>>
>([cb] as const);

expectType<R<SpotifyApi.SaveTracksForUserResponse>>(
  await Tracks.UsersSaved.save({ trackIds: [''] })
);

expectType<R<SpotifyApi.RemoveUsersSavedTracksResponse>>(
  await Tracks.UsersSaved.remove({ trackIds: [''] })
);

expectType<R<SpotifyApi.CheckUsersSavedTracksResponse>>(
  await Tracks.UsersSaved.check({ trackIds: [''] })
);

expectType<R<SpotifyApi.AudioFeaturesResponse>>(
  await Tracks.Features.get({ trackId: '' })
);

expectType<R<SpotifyApi.MultipleAudioFeaturesResponse>>(
  await Tracks.Features.getMultiple({ trackIds: [''] })
);

expectType<R<SpotifyApi.AudioAnalysisResponse>>(
  await Tracks.Analysis.get({ trackId: '' })
);

expectType<R<SpotifyApi.RecommendationsFromSeedsResponse>>(
  await Tracks.Recommendations.get({
    seed_artists: '',
    seed_genres: '',
    seed_tracks: '',
  })
);
