import * as cli from '../src/cli';

jest.mock('@spotifly/auth-token/cli', () => ({
  cli: () => Promise.resolve(true),
}));
jest.mock('@spotifly/library/cli', () => ({
  cli: () => Promise.resolve(true),
}));

const invokeSpy = jest
  .spyOn(cli, 'invoke')
  .mockImplementation(() => Promise.resolve());

const consoleSpy = jest.spyOn(global.console, 'info');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('CLI', () => {
  [
    ['', ''],
    ['', '', '--version'],
    ['', '', '-v'],
    ['', '', '--help'],
    ['', '', '-h'],
  ].forEach(processArgs => {
    test('Help and info command: ' + processArgs[2], async () => {
      process.argv = processArgs;
      const res = await cli.run();
      expect(consoleSpy).toHaveBeenCalledTimes(1);
      expect(consoleSpy.mock.calls[0][0]).toMatch(
        /(Spotifly|@spotifly\/cli) v\d.\d.\d/g
      );
      expect(res).toBeFalsy();
    });
  });
  [
    ['', '', 'auth-token'],
    ['', '', 'auth-token', 'arg'],
    ['', '', 'library'],
    ['', '', 'library', 'arg'],
  ].forEach(processArgs => {
    test('Standard command: ' + processArgs[2], async () => {
      process.argv = processArgs;
      await cli.run();
      expect(consoleSpy).not.toHaveBeenCalled();
      expect(invokeSpy.mock.calls[0]).toMatchSnapshot();
    });
  });
  [
    ['', '', 'x'],
    ['', '', '', 'y'],
  ].forEach(processArgs => {
    test('Ignored command ' + processArgs[2], async () => {
      process.argv = processArgs;
      const res = await cli.run();
      expect(consoleSpy).toHaveBeenCalledTimes(1);
      expect(consoleSpy.mock.calls[0][0]).toMatch(
        /Unknown argument .*[\s\S]Run 'spotifly --help' for available commands/s
      );
      expect(res).toBeFalsy();
    });
  });
});
