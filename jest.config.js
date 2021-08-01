module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx,js,jsx}',
    '!<rootDir>/src/state/context/**/{repository,index}.{js,ts}',
    '!**/*.d.ts'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/bootstrap.tsx',
    '<rootDir>/src/index.ts',
    '<rootDir>/src/pages/index.ts',
    '<rootDir>/src/App.tsx',
    '<rootDir>/src/fileMock.js',
    '<rootDir>/src/router.tsx',
    '<rootDir>/src/state/store.js',
    '<rootDir>/src/state/utils/',
  ],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/src/jest-setup.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(js|jsx)$': 'babel-jest',
    '.+\\.(ts|tsx)$': 'ts-jest',
    '\\.svg$': 'svg-jest'
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '.+\\.(jpg|jpeg|png|eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/src/fileMock.js',
    '.+\\.scss$': 'identity-obj-proxy'
  }
}