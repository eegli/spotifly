import {
  credentialsFromConfig,
  helpers,
  profilesFromConfig,
} from '../src/profile';

jest.mock('fs');
jest.mock('os');
jest.mock('path');

const config = String.raw`
[default]
spt_client_id=d123
spt_client_secret=d456
spt_refresh_token=drtp

[corrupted]
spt_client_id=t123
spt_client_secret=t456
`;

const readConfigSpy = jest
  .spyOn(helpers, 'readConfigWithPath')
  .mockReturnValue([config, 'dir']);

describe('profile', () => {
  test('config profiles full', () => {
    expect(profilesFromConfig()).toMatchInlineSnapshot(`
      [
        [
          "default",
        ],
        "dir",
      ]
    `);
  });

  test('credentials from config full', () => {
    expect(credentialsFromConfig('default')).toMatchInlineSnapshot(`
        {
          "clientId": "d123",
          "clientSecret": "d456",
          "refreshToken": "drtp",
        }
      `);
  });

  test('config not found', () => {
    readConfigSpy.mockReturnValueOnce(null);
    expect(profilesFromConfig()).toBe('Config file not found');
    readConfigSpy.mockReturnValueOnce(null);
    expect(credentialsFromConfig('default')).toBe('Config file not found');
  });

  test('credentials from config invalid', () => {
    expect(credentialsFromConfig('unknown')).toBe(
      'Profile "unknown" does not exist or is missing credentials'
    );
    expect(credentialsFromConfig('corrupted')).toBe(
      'Profile "corrupted" does not exist or is missing credentials'
    );
  });
});
