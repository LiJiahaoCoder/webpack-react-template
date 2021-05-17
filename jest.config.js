'use strict';

module.exports = {
  setupFilesAfterEnv: ['./__tests__/jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  collectCoverageFrom: ['src/**/*.ts?(x)', '!src/index.tsx', '!src/types/*.ts'],
  testMatch: ['<rootDir>/__tests__/**/*.spec.ts?(x)'],
  coverageProvider: 'v8',
  transform: {
    '^.+\\.(jsx?|tsx?)$': 'babel-jest',
    '^.+\\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
};
