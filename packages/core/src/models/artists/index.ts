import { AuthInitOptions } from '../../abstract';
import * as factory from '../../factory';
import { GetMultipleArtists, GetSingleArtist } from './artists';

export default function Artists(authInitOpts: AuthInitOptions) {
  const MultipleArtists = new GetMultipleArtists(authInitOpts);
  return {
    SingleArtist: new GetSingleArtist(authInitOpts),
    MultipleArtists,
    extended: {
      allArtists: factory.getAllFromLimited(
        MultipleArtists.get,
        'artistIds',
        MultipleArtists.limit
      ),
    },
  } as const;
}
