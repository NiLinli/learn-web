const arr = [1, 7, 8, 2, 3, 9, 1, 4, 3];

function partition(arr, start, end) {
  const base = arr[start];

  while (start < end) {
    // 当 start === end 时候就放好了
    while (start < end && base < arr[end]) {
      end--;
    }

    arr[start] = arr[end];


    while(start < end && base >= arr[start]) {
      start++;
    }

    arr[end] = arr[start];
  }

  arr[start] = base;

  return start;
}

// 分治是递归, start end 不一定是 0 到 length - 1
function quickSort(arr, start, end) {
  start = typeof start === 'undefined' ? 0 : start;
  end = typeof end === 'undefined' ? arr.length - 1 : end;

  // 基线条件
  if (start < end) {
    const index = partition(arr, start, end);
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
  }

  return arr;
}

console.log(quickSort(arr));
