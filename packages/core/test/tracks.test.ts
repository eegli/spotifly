import { Tracks } from '../src/';

afterEach(() => {
  jest.clearAllMocks();
});

const token =
  'BQDkk4J8UWbK3Ik9zOvIYvylcIMgiQgG6k0niv9nUvJnfCstK9U5TlGPwgyzbcj5MksG34IdcIV1-KVVmoa_5en-bYX4zgxkCJ9KLqViueWUfem5NwbLAbPt9EJqCLemJSy4Xx6e7b_KjC8XBC5GuoKF5-pNo-1a-XbrsNgKtPr7DpW5-l2MWbkQWbBJpdV93uShRLe8uiVCJ3apXVgUQHhiGESlcz-qvF2GCahiClkdBLlYTOHbTyLx97Npi-9b8M_E4qqEl_z1hUGYPjpj_wtIg6AjGVwDi8QYjx_q8JKZ7QE';

describe('Tracks', () => {
  test('userSavedTracks', async () => {
    const tracks1 = new Tracks({
      accessToken: token,
    });

    for await (const x of tracks1.userSavedTracks.iter({ chunkSize: 3 })) {
      console.log(x.items.map(x => x.added_at));
    }

    const res = await tracks1.userSavedTracks.getAll();
    console.log(res.map(x => x.added_at));

    const tracks2 = new Tracks({
      accessToken: token,
    });

    const r1 = await tracks1.getSeveralTracks(
      '4y8xXLG9O3Rbl6e1KaNRTG',
      '5r2kpjTJlJouxpESA1xEEY'
    );

    const r2 = await tracks2.getSeveralTracks(
      '4y8xXLG9O3Rbl6e1KaNRTG',
      '5r2kpjTJlJouxpESA1xEEY'
    );

    expect(r1.map(r => r.id)).toMatchInlineSnapshot(`
      [
        "4y8xXLG9O3Rbl6e1KaNRTG",
        "5r2kpjTJlJouxpESA1xEEY",
      ]
    `);

    expect(r2.map(r => r.id)).toMatchInlineSnapshot(`
      [
        "4y8xXLG9O3Rbl6e1KaNRTG",
        "5r2kpjTJlJouxpESA1xEEY",
      ]
    `);
  });
});
