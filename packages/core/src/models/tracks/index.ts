import { AuthProvider } from '../../provider';
import { MultipleTracks, SingleTrack, UsersSaved } from './tracks';

export default function Tracks(provider: AuthProvider) {
  return {
    MultipleTracks: new MultipleTracks(provider),
    SingleTrack: new SingleTrack(provider),
    UsersSaved: new UsersSaved(provider),
  } as const;
}
