function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

function foo() {
  // some implemention
}

module.exports = {
  forEach,
  foo
};
