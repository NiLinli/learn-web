const { Map } = require('immutable');

const map1 = Map({ a: 1, b: 2, c: 3, d: 4 });
const map2 = Map({ c: 10, a: 20, t: 30 });
const obj = { d: 100, o: 200, g: 300 };

const map3 = map1.merge(map1, map2, obj);

console.log(map3);

const { a } = map3.toJS();

console.log(a);
