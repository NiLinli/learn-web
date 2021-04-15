const arr = [1, 7, 8, 2, 3, 9, 1, 4, 3];

function mergeSort(arr, start, end) {
  start = typeof start === 'undefined' ? 0 : start;
  end = typeof end === 'undefined' ? arr.length - 1 : end;

  if (start < end) {
    const mid = parseInt((start + end) / 2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);

    mergeArr(arr, start, mid, end);
  }
}

function mergeArr(arr, start, mid, end) {
  const temp = [];

  let i1 = start;
  let i2 = mid + 1;
  let k = 0;

  while (i1 <= mid && i2 <= end) {
    temp[k] = arr[i1] <= arr[i2] ? arr[i1++] : arr[i2++];  
    k++;
  }
  

  while (i1 <= mid) {
    temp[k] = arr[i1++];
    k++;
  } 

  while (i2 <= end) {
    temp[k] = arr[i2++];
    k++;
  }

  for (let i = 0; i < k; i++) {
    arr[start + i] = temp[i];
  }
}


mergeSort(arr)
console.log(arr)