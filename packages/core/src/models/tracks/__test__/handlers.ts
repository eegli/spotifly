import { rest } from 'msw';
import { TrackObjectFull } from './payloads';

export const handlers = [
  rest.get('https://api.spotify.com/v1/tracks', (req, res, ctx) => {
    const idCount = (req.url.searchParams.get('ids') || '').split(',').length;

    return res(
      ctx.json({
        tracks: Array.from({ length: idCount }).fill(TrackObjectFull),
      })
    );
  }),
  rest.get('https://api.spotify.com/v1/me/tracks', (req, res, ctx) => {
    return req.passthrough();
  }),
];
