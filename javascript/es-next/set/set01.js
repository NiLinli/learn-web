// 新建 Set 
const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

console.log(s);

for (let i of s) {
  console.log(i);
}

// iterable 对象
const s2 = new Set([1, 2, 3, 4, 5, 5, 6, 6, 7, 77, 7, 77, 7]);
console.log(s2);

// Set -> Array
// 数组去重
const arr = [1, 2, 2, 2, 22, 3, 4, 5, 5, 5, 5, 6, 6, 7];

console.log([...new Set(arr)]);
console.log(Array.from(new Set(arr)));