const { List } = require('immutable');
const assert = require('assert');

// List like Array
// length -> size
// push set unshift splice: return new List

const list1 = List([1, 2]);

const list2 = list1.push(3, 4, 5);

assert.strictEqual(list1.size, 2);
assert.strictEqual(list2.size, 5);

const list3 = list1.unshift(0);
assert.strictEqual(list3.size, 3);

const list4 = list1.concat(list2, list3);
assert.strictEqual(list4.get(0), 1);
