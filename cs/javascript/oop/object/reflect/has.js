const person = {
  name: 'nixixi',
  _salary: 1000000000000000,
  get salary() {
    return this._salary;
  },
};

console.log(
  'toString' in person,
  Reflect.has(person, 'toString'),
  // not prototype
  person.hasOwnProperty('toString')
);

