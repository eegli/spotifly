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
  profileUtilsSpy.mockReturnValue([['profile1', 'profile2'], 'my-path']);
  const result = readProfiles();
  expect(result).toMatchInlineSnapshot(`
    [
      "Available profiles:

    * profile1
    * profile2

    Config file: my-path",
      null,
    ]
  `);
});
test('profiles with no profiles', async () => {
  profileUtilsSpy.mockReturnValue([[], 'path']);
  const result = readProfiles();
  expect(result).toMatchInlineSnapshot(`
    [
      null,
      "No profiles found, does your config file exist?",
    ]
  `);
});
