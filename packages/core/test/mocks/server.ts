import { rest } from 'msw';
import { setupServer } from 'msw/node';

export const server = setupServer(
  ...[
    rest.post('https://accounts.spotify.com/api/token', req => {
      return req.passthrough();
    }),
    rest.get('https://api.spotify.com/v1/artists*', req => {
      return req.passthrough();
    }),
  ]
);
