// Array 与 Set 方法

// forEach Set 有
const s = new Set(['ni', 'lin', 'li']);
s.forEach((v, i) => console.log(v, i));


// map filter 间接用于 Set
const newS = new Set([...s].map(v => v + '_new'));
console.log(newS);


const s1 = new Set([1, 2, 3, 4, 5]);
const s2 = new Set([3, 4, 5, 6, 7]);

// 交集
console.log(new Set([...s1].filter((v) => s2.has(v))));

// 并集
console.log(new Set([...s1, ...s2]));

// 差集
console.log(new Set([...s1].filter((v) => !s2.has(v))));