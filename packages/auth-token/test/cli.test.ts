import { help } from '../src/config';

describe('Library CLI', () => {
  test('help command', () => {
    expect(help('CLI Usage')).toMatchInlineSnapshot(`
      "CLI Usage

      Required flags
         --clientId [string]
         The client id of your Spotify application

         --clientSecret [string]
         The client secret of your Spotify application

      Optional flags
         -s, --scopes [string]
         Spotify authorization scopes. Multiple scopes need to be separated by a space. Default: \\"user-read-email\\"

         -p, --port [number]
         Port for the localhost redirect URL. Default: 3000

         -o, --outDir [string]
         Custom relative output directory. Default: Current directory

         -f, --fileName [string]
         Custom name for the output JSON file. Default: \\"spotify-token\\"

         --noEmit [boolean]
         When set to true, does not save the token to the file system. Default: false"
    `);
  });
});
