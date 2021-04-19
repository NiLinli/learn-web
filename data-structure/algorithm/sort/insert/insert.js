// O(n^2)
// 将一个数字拿出来插入已经排好序的数组部分
// 第一个 0 视为有序的部分
// 所以从 1 -> N - 1 部分拿数字出来去插入

function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i;

    while (j - 1 >= 0 && temp <= arr[j - 1]) {
      arr[j] = arr[j - 1];
      j--;
    }

    arr[j] = temp;
  }

  return arr;
}

const arr = [1, 7, 8, 2, 3, 9, 1, 4, 3];

console.log(insertSort(arr));

// js sort 类 V8 实现()
// For short (length <= 22) arrays, insertion sort is used for efficiency.

Array.prototype.sort100 = function (compareFn) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i;

    // temp <= arr[j - 1]

      while (j - 1 >= 0 && compareFn(arr[j - 1], temp) > 0) {
      arr[j] = arr[j - 1];
      j--;
    }

    arr[j] = temp;
  }

  return arr;
};

const arr2 = [1, 7, 8, 2, 3, 9, 1, 4, 3];
const arr3 = [1, 7, 8, 2, 3, 9, 1, 4, 3];
console.log(arr2.sort((a, b) => a - b));
console.log(arr3.sort100((a, b) => a - b));
