class Person {

  constructor(name) {
    this.name = name;
  }

  sayHello(words) {
    console.log(this.name + ' ' + words);
  }
}

const person = new Person('nixixi');

Person.prototype.sayHello.apply({ name: 'nilinli' }, ['sayHello']);

Reflect.apply(Person.prototype.sayHello, { name: 'nilinli' }, ['sayHello']);
