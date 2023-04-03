const person = {
  name: 'nixixi',
  _salary: 10000,
  set salary(value) {
    this._salary = value * value;
  },
  get salary() {
    return this._salary;
  },
};

Reflect.set(person, 'salary', 500);

console.log(person.salary);

// setter 中 this 的指向
const receiver = {};
Reflect.set(person, 'salary', 300, receiver);

console.log(person.salary);
console.log(receiver);
