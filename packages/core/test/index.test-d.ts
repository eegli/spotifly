import { expectType } from 'tsd';
import { AuthProvider, init } from './index';

type P<T> = Promise<T>;

const Core = init(new AuthProvider({ accessToken: '' }));

expectType<P<SpotifyApi.SingleTrackResponse>>(
  Core.Tracks.SingleTrack.get({ trackId: '123' })
);
expectType<P<SpotifyApi.UsersSavedTracksResponse>>(
  Core.Tracks.UsersSaved.get()
);
expectType<P<SpotifyApi.UsersSavedTracksResponse[]>>(
  Core.Tracks.UsersSaved.all()
);
