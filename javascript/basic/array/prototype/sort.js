// 修改原数组
let arr = [33, 4, 1111, 10200, 12344, 222];

// 默认行为
// 会把数组里面的 item 当作字符串处理
// 每个依次对比
// 等同
let oldArr = arr.sort((a, b) => {
  if (a.toString() > b.toString()) return 1;
  if (a.toString() < b.toString()) return -1;
  return 0;
});

console.log(arr, oldArr === arr);

// a b 代表的排序算法中不同的指向
// 也就是不同排序中相比较的两个数
// ascend
arr.sort((a, b) => {
  if (a > b) return 1; // 实际算法中取这个条件
  if (a < b) return -1;
  return 0;

  // 等同于
  // return a - b;
});

console.log(arr);

// descend
arr.sort((a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;

  // return b - a;
});
console.log(arr);
