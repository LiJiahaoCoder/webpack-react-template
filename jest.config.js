'use strict';

module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./__tests__/jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  collectCoverageFrom: ['src/**/*.ts?(x)', '!src/index.tsx', '!src/types/*.ts'],
  testMatch: ['<rootDir>/__tests__/**/*.(spec|test).ts?(x)'],
  coverageProvider: 'v8',
  transform: {
    '^.+\\.(js|ts)x?$': 'babel-jest',
    '^.+\\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '^.+\\.less$': 'identity-obj-proxy',
  },
};
