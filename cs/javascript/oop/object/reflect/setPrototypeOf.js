const person = {
  name: 'nixixi'
};

// 改变对象的 __proto__
Reflect.setPrototypeOf(person, {
  age: 18
});

console.log(person.age);
console.log(person.constructor.prototype === person.__proto__);
console.log(person.__proto__)
