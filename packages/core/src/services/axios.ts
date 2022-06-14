import axios from 'axios';

export const reqInterceptor: Parameters<typeof axios.interceptors.request.use> =
  [
    // Do something before request is sent
    config => config,
    // Do something with request error
    // Apparently, the error handler is used if the interceptor throws:
    // https://github.com/axios/axios/issues/2509
    error => Promise.reject(error),
  ];

export const resInterceptor: Parameters<
  typeof axios.interceptors.response.use
> = [
  response => response,
  async error => {
    if (error.response && error.response.status === 401) {
      // TODO
      console.log(error);
    }
    return Promise.reject(error);
  },
];
