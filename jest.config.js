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
      displayName: 'docs',
      rootDir: 'docs',
      roots: ['<rootDir>/src'],
      collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    },
  ],
};
