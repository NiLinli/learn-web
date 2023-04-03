const person = {
  name: 'nixixi',
  _salary: 1000000000000000,
  get salary() {
    return this._salary;
  },
  [Symbol('email')]: 'nixixi@nixixi.com'
};

console.log(
  Reflect.getOwnPropertyDescriptor(person, 'name'),
  // 除了 null, undefined 其他的会转换成 object
  Object.getOwnPropertyDescriptor(person, 'name'),
  Object.getOwnPropertyDescriptor('nixixi', 'length')
);
