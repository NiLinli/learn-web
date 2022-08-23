// Array
console.log(new Array(1, 2, 3), Array(1, 2, 3));

// Empty Array
// 只有 length 属性, 没有任何索引, 所以没有任何 value, 不能遍历
const emptyArr = Array(3);
console.log(
  '2' in emptyArr,
  emptyArr.map((v) => 1)
);

// fill
console.log(Array(3).fill(undefined));

// apply
// apply 中 argsArray 可以是类数组
// 并且会自动将 empty 数组处理为 [undefined, undefined, undefined]
// Array.apply(null, [undefined, undefined, undefined])
console.log(Array.apply(null, Array(3)));
console.log(Array.apply(null, { length: 3 }));

