// Map 中 key 是有顺序的
const obj = {};
const map = new Map();

obj.b = 'b';
map.set('b', 'b');

obj.a = 'a';
map.set('a', 'a');

obj['2'] = '2';
map.set('2', '2');

obj['1'] = '1';
map.set('1', '1');

map.set('1', 'new 1');    // 覆盖上面的值

console.log(obj);
console.log(map);
console.log(Object.keys(obj));
console.log(map.keys());