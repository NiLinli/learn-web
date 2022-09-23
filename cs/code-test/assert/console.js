function assert(condition, message) {
  console.assert(condition, message);
}

const name = 123;

try {
  assert(typeof name === 'string', 'name is string type');
} catch (e) {
  // 不会 throw Error
  console.log('console module: ', e.message);
}
