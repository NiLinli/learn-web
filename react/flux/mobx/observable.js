// observable(value)
// 简历一个可以观察的对象 Object Array Map ...
const { observable } = require('mobx');

const map = observable.map({ name: 'nilinli' });
map.set(1, 1);      // 不推荐直接改变, 应该强制是用 action
map.set('1', '1');

const list = observable([1, 2, 4]);
list[2] = 88;

const person = observable({
  firstName: 'Linli',
  lastName: 'Ni'
});

person.lastName += 'ii';


console.log(map.get(1), map.get('1'));
console.log(list[2], person.firstName + person.lastName);