import axios, { AxiosError, AxiosResponse } from 'axios';
import { DataResponse } from './types';

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

type SpotifyError = {
  error: {
    status: number;
    message: string;
  };
};

export function isError(payload: unknown): payload is AxiosError<SpotifyError> {
  return (
    axios.isAxiosError(payload) &&
    (payload as AxiosError<SpotifyError>).response?.data.error.message !==
      undefined
  );
}
