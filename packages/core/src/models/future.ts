import { AxiosRequestConfig } from 'axios';
import { transformResponse } from '../request';
import { AsyncProvider } from '../types';

export default function futureRequest(provider: AsyncProvider) {
  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    request: async <Response = any, Data = any>(
      config: AxiosRequestConfig<Data>
    ) => transformResponse(await provider.request<Response>(config)),
  };
}
