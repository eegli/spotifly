import { rest } from 'msw';
import { server } from './server';

type PaginatedTestRunArgs<T> = {
  url: string;
  responseItem: T;
  splitToken: string;
  expectedQuery?: Record<string, string>;
};

export function createInfiniteGetRunner<T = any>({
  url,
  responseItem,
  splitToken,
  expectedQuery = {},
}: PaginatedTestRunArgs<T>) {
  server.use(
    rest.get(url, (req, res, ctx) => {
      Object.entries(expectedQuery).forEach(([key, value]) => {
        expect(req.params[key]).toBe(value);
      });
      const length = (req.url.searchParams.get(splitToken) || '').split(
        ','
      ).length;
      return res(
        ctx.json({
          artists: Array.from({ length }).fill(responseItem),
        })
      );
    })
  );
}
