/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  ...require('./jest.config').__common,
  /*   displayName: {
    name: 'integration',
    color: 'magenta',
  }, */
  rootDir: 'packages/integration-tests',
  setupFiles: ['dotenv/config'],
};
