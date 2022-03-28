import { cli } from '../src/cli';

jest.mock('@spotifly/auth-token/cli', () => ({
  cli: () => Promise.resolve(true),
}));
jest.mock('@spotifly/library/cli', () => ({
  cli: () => Promise.resolve(true),
}));

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
      const res = await cli();
      expect(consoleSpy).toHaveBeenCalledTimes(1);
      expect(consoleSpy.mock.calls[0][0]).toMatch(
        /(Spotifly|@spotifly\/cli) v\d.\d.\d/g
      );
      expect(res).toBeFalsy();
    });
  });
  [
    ['', '', 'auth-token', 'arg'],
    ['', '', 'library', 'arg'],
  ].forEach(processArgs => {
    test('Standard command: ' + processArgs[2], async () => {
      process.argv = processArgs;
      const res = await cli();
      expect(consoleSpy).not.toHaveBeenCalled();
      expect(res).toBeTruthy();
      expect(process.argv).toHaveLength(3);
    });
  });
  [['', '', Math.random().toString(36).slice(2)]].forEach(processArgs => {
    test('Ignored command ' + processArgs[2], async () => {
      process.argv = processArgs;
      const res = await cli();
      expect(consoleSpy).toHaveBeenCalledTimes(1);
      expect(consoleSpy.mock.calls[0][0]).toMatch(
        /Unknown command. Run 'spotifly --help' for available commands/
      );
      expect(res).toBeFalsy();
    });
  });
});
