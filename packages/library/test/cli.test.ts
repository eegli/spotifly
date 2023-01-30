import { callback, help } from '../src/cli';

jest.mock('../src/handler', () => ({
  libraryHandler: jest.fn(),
}));

describe('Library CLI', () => {
  test('invalid parsing', async () => {
    await expect(callback([])).rejects.toThrow();
    await expect(
      callback(['--token', 'abc', '--type', 'medium'])
    ).rejects.toThrow();
    await expect(
      callback(['--token', 'abc', '--since', '2022-12-121'])
    ).rejects.toThrow();
  });
  test('valid parsing', async () => {
    await expect(callback(['--token', 'abc'])).resolves.not.toThrow();
    await expect(
      callback(['--token', 'abc', '--type', 'full'])
    ).resolves.not.toThrow();
    await expect(
      callback(['--token', 'abc', '--since', '2022-12-12'])
    ).resolves.not.toThrow();
  });
  test('help command', () => {
    expect(help()).toMatchInlineSnapshot(`
      "Command-line usage:

      Required flags
         --token [string]
         A Spotify user access token. Requires at least the scope \\"user-library-read\\"

      Optional flags
         --type [string]
         Output type per track. Either 'full' or 'light'. Default: 'light'

         --genres [boolean]
         Include artist genres for each track. Default: false

         --features [boolean]
         Include audio features for each track. Default: false

         --compact [boolean]
         Output more compact/minified JSON and save disk space. Default: false

         --out-dir [string]
         Custom relative output directory. Default: Current directory

         --since [string]
         Only include tracks added after this date. The date string must be formatted according to the ECMAScript Date Time String Format, e.g.: \\"YYYY-MM-DD\\". Default: All tracks

         --last [number]
         Only include the last n (most recent) tracks. Default: All tracks"
    `);
  });
});
