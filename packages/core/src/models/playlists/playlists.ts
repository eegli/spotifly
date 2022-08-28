import { Method, transformResponse } from '../../request';
import { AsyncFnWithProvider, Permutations } from '../../types';

export const getPlaylist: AsyncFnWithProvider<
  SpotifyApi.SinglePlaylistResponse,
  string,
  {
    additional_types: Permutations<'track' | 'episode', ','>;
    fields: string;
    market: string;
  }
> = provider => async (playlistId, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: `playlists/${playlistId}`,
      params,
    })
  );
