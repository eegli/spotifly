import { rest } from 'msw';
import { MultipleArtistsResponse } from '../base';
import { ArtistObjectFull } from './payloads';

export const handlers = [
  rest.get('https://api.spotify.com/v1/artists', (req, res, ctx) => {
    const idCount = (req.url.searchParams.get('ids') || '').split(',').length;
    return res(
      ctx.json({
        artists: Array.from({ length: idCount }).fill(ArtistObjectFull),
      } as MultipleArtistsResponse)
    );
  }),
];
