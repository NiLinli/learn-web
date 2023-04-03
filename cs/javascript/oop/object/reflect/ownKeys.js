// own 表示不包含 prototype

const person = {
  name: 'nixixi',
  _salary: 1000000000000000,
  get salary() {
    return this._salary;
  },
  [Symbol('email')]: 'nixixi@nixixi.com'
};

Object.defineProperty(person, 'unenumerableKey', {
  enumerable: false
});

Object.defineProperty(person, { toString: () => 'omg' }, {
  enumerable: true
});

console.log(
  // non-symbol + symbol properties
  Reflect.ownKeys(person),
  // non-symbol properties
  Object.getOwnPropertyNames(person),
  // symbol properties
  Object.getOwnPropertySymbols(person),
  // non-enumerable properties
  Object.keys(person)
);
