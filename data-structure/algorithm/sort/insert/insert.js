// O(n^2)
// 将一个数字拿出来插入已经排好序的数组部分
// 第一个 0 视为有序的部分
// 所以从 1 -> N - 1 部分拿数字出来去插入

function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // for (let j = i; j > 0 && arr[j] <= arr[j - 1]; j--) {
    // let temp = arr[j];
    // arr[j] = arr[j - 1];
    // arr[j - 1] = temp;
    // }

    let temp = arr[i];
    let j = i;

    while (j > 0 && temp <= arr[j - 1]) {
      arr[j] = arr[j - 1];
      j--;
    }

    arr[j] = temp;
  }

  return arr;
}

const arr = [1, 7, 8, 2, 3, 9, 1, 4, 3];

console.log(insertSort(arr));
