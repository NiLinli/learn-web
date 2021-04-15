var arr = [1, 7, 8, 2, 9, 4, 3];

// 每次的最后一个元素不参加冒泡 length - 1 次循环

// 外层循环记录循环次数
for (let i = 0; i < arr.length - 1; i++) {

  // 里面循环记录循环范围 0, length - i - 1
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] < arr[j + 1]) {
      const temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr);