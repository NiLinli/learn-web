const arr = [1, 7, 8, 2, 3, 9, 1, 4, 3];

// 缩小增量排序
// 最糟糕情形 O(n^2)
function shellSort(arr) {

  // 流行但是不好的 step 选择
  let step = parseInt(arr.length / 2);
  while (step > 0) {
    
    // 正常每一步往后走, 返回插入是 step 步骤往回插入
    for (let i = step; i < arr.length; i++) {
      let temp = arr[i];
      let j = i;

      while (j - step >= 0 && temp <= arr[j - step]) {
        arr[j] = arr[j - step];
        j = j - step;
      }

      arr[j] = temp;
    }

    step = parseInt(step / 2);
  }

  return arr;
}

console.log(shellSort(arr));
