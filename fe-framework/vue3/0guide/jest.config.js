module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  // 如果没有指定扩展, jest 会从下列扩展找
  moduleFileExtensions: ['js', 'vue'],
  coverageDirectory: './coverage',
  // collectCoverageFrom: ['**/src/**/*.js', '!**/src/__tests__/**'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/@vue/vue3-jest',
  },
  // snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  // testPathIgnorePatterns: [
  //   '<rootDir>/node_modules',
  //   '<rootDir>/src/__tests__/components',
  //   '<rootDir>/src/__tests__/directives',
  // ],
}