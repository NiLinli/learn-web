const { expect } = require('expect');

const name = 123;
// JestAssertionError: expect(received).toBeFalsy()

try {
  expect(name).toBeFalsy();
} catch (e) {
  console.log('jest expect module: ', e.message);
}
