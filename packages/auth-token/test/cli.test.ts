import { help } from '../src/cli';

describe('Library CLI', () => {
  test('help command', () => {
    expect(help()).toMatchInlineSnapshot(`
      "Command-line usage:

      token <refresh|access>

      Required flags
         --client-id [string]
         The client id of your Spotify application

         --client-secret [string]
         The client secret of your Spotify application

      Optional flags
         -p, --port [number]
         Port for the localhost redirect URL. Default: 3000

         --no-emit [boolean]
         When set to true, does not save the token to the file system. Default: false

         -o, --out-dir [string]
         Custom relative output directory. Default: Current directory

         -f, --file-name [string]
         Custom name for the output JSON file. Default: \\"spotify-token\\"

         -s, --scopes [string]
         Spotify authorization scopes. Multiple scopes need to be separated by a space. Default: \\"user-read-email\\""
    `);
  });
});
