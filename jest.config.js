/** @type {import('@jest/types').Config.InitialProjectOptions} */
const common = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'ts'],
  maxWorkers: 1,
  snapshotFormat: {
    printBasicPrototype: false,
  },
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  projects: [
    {
      ...common,
      displayName: 'auth-token',
      rootDir: 'packages/auth-token',
      roots: ['<rootDir>/src', '<rootDir>/test'],
      collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    },
    {
      ...common,
      displayName: 'cli',
      rootDir: 'packages/cli',
      roots: ['<rootDir>/src', '<rootDir>/test'],
      collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    },
    {
      ...common,
      displayName: 'core',
      rootDir: 'packages/core',
      roots: ['<rootDir>/src', '<rootDir>/test'],
      collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    },
    {
      displayName: {
        name: 'core-types',
        color: 'cyan',
      },
      rootDir: 'packages/core',
      roots: ['<rootDir>/test'],
      testMatch: ['**/*.test-d.ts'],
      runner: 'jest-runner-tsd',
    },
    /*  {
      ...common,
      displayName: {
        name: 'integration',
        color: 'magenta',
      },
      rootDir: 'packages/integration-tests',
      setupFiles: ['dotenv/config'],
    }, */
    {
      ...common,
      displayName: 'library',
      rootDir: 'packages/library',
      roots: ['<rootDir>/src', '<rootDir>/test'],
      collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    },
    {
      ...common,
      displayName: 'utils',
      rootDir: 'packages/utils',
      roots: ['<rootDir>/src', '<rootDir>/test'],
      collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    },
    {
      ...common,
      displayName: 'website',
      rootDir: 'website',
      moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
      collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
    },
  ],
};
