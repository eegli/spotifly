import { expectType } from 'tsd-lite';
import TracksFactory from '../../src/models/tracks';

const Tracks = TracksFactory({ accessToken: '' });

expectType<SpotifyApi.SingleTrackResponse>(
  await Tracks.Single.get({ trackId: '' })
);
expectType<SpotifyApi.UsersSavedTracksResponse>(await Tracks.UsersSaved.get());
expectType<SpotifyApi.UsersSavedTracksResponse[]>(
  await Tracks.UsersSaved.getAll()
);
expectType<SpotifyApi.SaveTracksForUserResponse>(
  await Tracks.UsersSaved.put({ trackIds: [''] })
);
