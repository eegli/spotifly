import * as profileUtils from '@spotifly/utils/profile';
import * as cli from '../src/cli';
import { readProfiles } from '../src/profiles';

const consoleLogSpy = jest
  .spyOn(global.console, 'log')
  .mockImplementation(jest.fn);

const profileUtilsSpy = jest.spyOn(profileUtils, 'profilesFromConfig');

beforeEach(() => {
  jest.clearAllMocks();
});

[['--version'], ['-V']].forEach(args => {
  test('command ' + args[0], async () => {
    await cli.run(args);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy.mock.calls[0][0]).toMatch(/\d.\d.\d/g);
  });
});

[['--help'], ['-h']].forEach(args => {
  test('command ' + args[0], async () => {
    await cli.run(args);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy.mock.calls[0][0]).toMatchSnapshot();
  });
});

test('profiles with valid profile', async () => {
  profileUtilsSpy.mockReturnValue({
    success: true,
    value: [['profile1', 'profile2'], 'my-path'],
  });
  const result = readProfiles();
  expect(result).toMatchInlineSnapshot(`
    {
      "success": true,
      "value": "Available profiles:

    * profile1
    * profile2

    Config file: my-path",
    }
  `);
});
test('profiles with no profiles', async () => {
  profileUtilsSpy.mockReturnValue({
    success: true,
    value: [[], '/my/config/path'],
  });
  const result = readProfiles();
  expect(result).toMatchInlineSnapshot(`
    {
      "error": "Found no valid profiles in /my/config/path",
      "success": false,
    }
  `);
});
test('profiles with error', async () => {
  profileUtilsSpy.mockReturnValue({
    success: false,
    error: 'Invalid profile',
  });
  const result = readProfiles();
  expect(result).toMatchInlineSnapshot(`
    {
      "error": "Invalid profile",
      "success": false,
    }
  `);
});
