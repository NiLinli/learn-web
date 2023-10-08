// Js 中 基础类型都是 immutable
// 而原生 object array 等引用类型不是 immutable
// immutable.js 创建 immutable 的类 object array

const { Map } = require('immutable');

const map1 = Map({ a: 1, b: 2, c: 3 });

const map2 = map1.set('b', 50); // 改变 immutable data 会返回新的 immutable data
console.log(`map1 === map2 is ${map1 === map2}`);
console.log(map1.get('b'), map2.get('b'));

// But
const map3 = map2.set('b', 50);
console.log(`map2 === map3 is ${map2 === map3}`);
