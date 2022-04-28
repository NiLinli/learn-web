const assert = require('assert');

function assertCustom(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const name = 123;

// Error
try {
  assert(typeof name === 'string', 'name is string type');
} catch (e) {
  console.log('assert module: ', e.message);
}

try {
  assertCustom(typeof name === 'string', 'name is string type');
} catch (e) {
  console.log('assert module', e.message);
}
