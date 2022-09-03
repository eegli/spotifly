import { AxiosRequestConfig } from 'axios';
import { transformResponse } from '../request';
import { AsyncProvider } from '../types';

/** Generic convenience method that allows freestyle requests which include an access token. Can be used to call new Spotify endpoints that are not yet supported by this library. */
export default function futureRequest(provider: AsyncProvider) {
  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    request: async <Response = any, Data = any>(
      config: AxiosRequestConfig<Data>
    ) => transformResponse(await provider.request<Response>(config)),
  };
}
