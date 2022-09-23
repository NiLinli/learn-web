const person = {
  name: 'nixixi'
};

const person2 = {
  name: 'nixixi2'
};

const obj = {};
obj[person] = 'hehe';
obj[person2] = 'haha';

console.log(obj[person]);
console.log(Object.keys(obj)); // '[object Object]'

const map = new Map();
map.set(person, 'hehe'); 
map.set(person2, 'haha'); 
console.log(map.get(person));
console.log(map.keys());
