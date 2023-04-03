class Person {}


const person = new Person();

console.log(
  Reflect.getPrototypeOf(person) === Person.prototype,
  Reflect.getPrototypeOf({}) === Object.prototype,
  // // 除了 null, undefined 其他的会转换成 object
  Object.getPrototypeOf(person) === Person.prototype,
  Object.getPrototypeOf({}) === Object.prototype,
  Object.getPrototypeOf('string') === String.prototype
);
