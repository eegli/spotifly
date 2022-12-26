import { help, parse } from '../src/config';

describe('Library CLI', () => {
  test('invalid parsing', async () => {
    await expect(parse([])).rejects.toThrow();
    await expect(
      parse({ token: 'abc', since: '2022-12-121' })
    ).rejects.toThrow();
  });
  test('valid parsing', async () => {
    await expect(parse({ token: 'abc' })).resolves.toMatchSnapshot();
    await expect(
      parse({ token: 'abc', since: '2022-12-12' })
    ).resolves.not.toThrow();
  });
  test('help command', () => {
    expect(help()).toMatchInlineSnapshot(`
      "Usage

      Required
         --token [string]
         A Spotify user access token. Requires at least the scope \\"user-library-read\\"

      Optional
         --type [string]
         Output type per track. Either 'full' or 'light'. Default: 'light'

         --genres [boolean]
         Include artist genres for each track. Default: false

         --features [boolean]
         Include audio features for each track. Default: false

         --since [string]
         Only include tracks added after this date. The date string must be formatted according to the ECMAScript Date Time String Format, e.g.: \\"YYYY-MM-DD\\". Default: All tracks

         --last [number]
         Only include the last n (most recent) tracks. Default: All tracks

         --compact [boolean]
         Output more compact/minified JSON and save disk space. Default: false

         --outDir [string]
         Custom relative output directory. Default: Current directory"
    `);
  });
});
