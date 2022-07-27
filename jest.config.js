/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
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

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  maxWorkers: 1,
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
      roots: ['<rootDir>/src'],
      collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    },
  ],
};
