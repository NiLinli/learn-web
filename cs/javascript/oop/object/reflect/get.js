const person = {
  name: 'nixixi',
  _salary: 1000000000000000,
  get salary() {
    return this._salary;
  },
};

console.log(
  person.salary,
  Reflect.get(person, 'salary'),
  // receiver 可以覆盖 getter 中的 this 指向
  Reflect.get(person, 'salary', {
    _salary: 2000000,
  })
);

// TypeError: Reflect.get called on non-object
// Reflect.get('hello', 'length');
// Reflect.get(null, 'prop');