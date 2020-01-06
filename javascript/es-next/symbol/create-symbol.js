// 基本类型 不能用 new Symbol
let firstName = Symbol('first name'),
  lastName = Symbol();

let person = {};

person[firstName] = 'linli';

person[lastName] = 'ni';

console.log('first name' in person); // false
console.log(person[firstName]); // 'linli'
console.log(firstName); // Symbol(first name)   --> 调用 toString
console.log(typeof firstName === 'symbol');