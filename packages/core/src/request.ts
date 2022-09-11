import { AxiosError, AxiosResponse } from 'axios';
import type {
  DataResponse,
  SpotifyRegularErrorObject as SpotifyError,
} from './types';

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
  const err = (payload as AxiosError<SpotifyError>).response?.data?.error;
  return typeof err?.message === 'string' && typeof err?.status === 'number';
}
