const arr = [1, 2, 3, 4, 5, 5, 6, 6, 7, 77, 7, 77, 7];

const s = new Set(arr);

// iterable 对象
for (let i of s) {
  console.log(i);
}

// Set -> Array 数组去重
const arr2 = [...s];

const arr3 = Array.from(s);

console.log(arr2, arr3);
