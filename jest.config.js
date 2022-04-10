/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const common = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'ts'],
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
      displayName: 'cli',
      rootDir: 'packages/cli',
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
      displayName: 'auth-token',
      rootDir: 'packages/auth-token',
      roots: ['<rootDir>/src', '<rootDir>/test'],
      collectCoverageFrom: [
        '<rootDir>/src/**/*.ts',
        '!<rootDir>/src/request.ts',
      ],
    },
    {
      ...common,
      displayName: 'library',
      rootDir: 'packages/library',
      roots: ['<rootDir>/src/', '<rootDir>/test/'],
      collectCoverageFrom: ['src/**'],
    },
    {
      ...common,
      displayName: 'docs',
      rootDir: 'docs',
    },
  ],
};
