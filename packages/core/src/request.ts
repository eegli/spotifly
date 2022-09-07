import { AxiosError, AxiosResponse } from 'axios';
import type { DataResponse, SpotifyError } from './types';

export enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export function transformResponse<T>(res: AxiosResponse<T>): DataResponse<T> {
  return {
    data: res.data,
    headers: res.headers,
    statusCode: res.status,
  };
}

export function isError(payload: unknown): payload is AxiosError<SpotifyError> {
  return (
    (payload as AxiosError<SpotifyError>).response?.data?.error?.message !==
    undefined
  );
}
