var arr = [1, 7, 8, 2, 9, 4, 3];

// 每次从 0 开始冒出一个最大或者最小的数
// 范围 [0, length - 1 - i]

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] < arr[j + 1]) {
      const temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr);