/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  ...require('../jest.config').__common,
  displayName: {
    name: 'integration',
    color: 'magenta',
  },
  setupFiles: ['dotenv/config'],
};
