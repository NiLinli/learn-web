class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello(words) {
    console.log(this.name + ' ' + words);
  }
}

const person = Reflect.construct(Person, ['nixixi']);

console.log(person);


// 用 Person 创建对象, 但是 prototype 指向 Object
const person2 = Reflect.construct(Person, ['nixixi'], Object);

console.log(person2);