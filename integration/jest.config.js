/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'ts'],
  snapshotFormat: {
    printBasicPrototype: false,
  },
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },

  displayName: {
    name: 'integration',
    color: 'magenta',
  },
  setupFiles: ['dotenv/config'],
};
