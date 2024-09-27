module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/test/config/importJestDOM.ts'],
    transform: {
      '\\.ts$': 'ts-jest',
    },
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/__mocks__/fileMock.js',
      '\\.(css|less)$': 'identity-obj-proxy',
    },
  }

//   module.exports = {
//     preset: 'ts-jest',  // Use ts-jest to transpile TypeScript files
//     testEnvironment: 'jsdom',  // Simulate browser-like environment for React
//     moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],  // Recognize file extensions
//     transform: {
//       '^.+\\.tsx?$': 'ts-jest',  // Use ts-jest to handle TypeScript files
//     },
//     setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],  // Setup for Jest DOM matchers
//     testPathIgnorePatterns: ['/node_modules/', '/dist/'],  // Ignore test files in certain directories
//   };