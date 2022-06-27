import { AuthProvider } from '../request';

type Endpoint = {
  impl: (provider: AuthProvider) => (...args: any[]) => Promise<any>;
  staticQueryParams?: Record<string, string | number>;
};

export const config: Record<string, Record<string, Endpoint>> = {
  artists: {
    several: {
      staticQueryParams: { limit: 50 },
      impl: provider => async (ids: string[]) => {
        const { data } =
          await provider.request<SpotifyApi.MultipleArtistsResponse>({
            method: 'get',
            url: 'artists',
            params: {
              ids: ids.join(','),
              ...config.artists.several.staticQueryParams,
            },
          });
        return data.artists;
      },
    },
  },
} as const;

const p = new AuthProvider({ accessToken: '' });

config.artists.several
  .impl(p)('1', '2', '3')
  .then(r => r);
