// 支持 iterable
const obj = {
  a: 'a',
  b: 'b',
  c: 'c'
};

const map = new Map();

map.set('a', 'a');
map.set('b', 'b');
map.set('c', 'c');

// 支持导入 iterable
const map1 = new Map([
  ['name', 'nixixi'],
  ['age', 18]
]);

console.log(map1);


// 支持 forEach 
Object.keys(obj).forEach((v, i) => {
  console.log(obj[v]);
});

map.forEach(v => console.log(v));

// 其他数组方法 间接使用
// ...