/** @type {import('@jest/types').Config.InitialProjectOptions} */
const common = {
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
};

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  maxWorkers: 1,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  projects: [
    {
      ...common,
      displayName: 'auth-token',
      rootDir: 'packages/auth-token',
      roots: ['<rootDir>/src', '<rootDir>/test'],
    },
    {
      ...common,
      displayName: 'cli',
      rootDir: 'packages/cli',
      roots: ['<rootDir>/src', '<rootDir>/test'],
    },
    {
      ...common,
      displayName: 'core',
      rootDir: 'packages/core',
      roots: ['<rootDir>/src', '<rootDir>/test'],
      collectCoverageFrom: ['<rootDir>/src/**'],
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
    {
      ...common,
      displayName: 'library',
      rootDir: 'packages/library',
      roots: ['<rootDir>/src', '<rootDir>/test'],
    },
    {
      ...common,
      displayName: 'utils',
      rootDir: 'packages/utils',
      roots: ['<rootDir>/src', '<rootDir>/test'],
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

module.exports.__common = common;
