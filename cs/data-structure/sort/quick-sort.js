// O(n2) 转变为 O(nlogn) 与 O(n2) 之间

// 思想
// 分治
// 冒泡

var arr = [1, 7, 8, 2, 9, 4, 3];

function quickSort(arr, left, right) {
  var len = arr.length,
    partitionIndex,
    left = typeof left != 'number' ? 0 : left,
    right = typeof right != 'number' ? len - 1 : right;

  if (left < right) {
    partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}


// 设立基准值
// 把小的放到左边 大的放到右边
// 返回重合位置
function partition(arr, low, high) {
  let base = arr[low];

  while (low < high) {
    // 从右向左
    while (low < high && arr[high] > base) {
      --high;
    }
    arr[low] = arr[high];

    // 从左想有
    while (low < high && arr[low] <= base) {
      ++low;
    }
    arr[high] = arr[low];
  }

  arr[low] = base;
  return low;
}

console.log(quickSort(arr));