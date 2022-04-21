const assert = require('assert');
const expect = require('expect');

function assert1(condition, message) {
  console.assert(condition, message);
}

function assert2(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const name = 1;

// Error
// assert(typeof name === 'string', 'name is string type');

// Assertion failed: name is string type
// assert1(typeof name === 'string', 'name is string type');

// Error
// assert2(typeof name === 'string', 'name is string type')

// JestAssertionError: expect(received).toBeFalsy()
expect(name).toBeFalsy();