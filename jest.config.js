/** @type {import('@jest/types').Config.InitialProjectOptions} */
const common = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'ts'],
  snapshotFormat: {
    printBasicPrototype: false,
  },
};

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  collectCoverageFrom: ['**/src/**/*.{ts,tsx}'],
  coverageReporters: ['text', 'json'],
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
      coveragePathIgnorePatterns: ['<rootDir>'],
    },
  ],
};
