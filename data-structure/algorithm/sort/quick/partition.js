

function partition(arr, start, end) {

  const base = arr[start];

  while (start < end) {

    while (start < end && arr[end] >= base) end--;
    // arr[start] = arr[end];
    start < end && (arr[start++] = arr[end]);

    while (start < end && arr[start] < base) start++;
    // arr[end] = arr[start];
    start < end && (arr[end--] = arr[start]);
  }



  arr[start] = base;

  return start;
}

// const arr = [4, 2, 5, 1, 88, 7, 2, 22];
// partition(arr, 0, arr.length - 1)
// console.log(arr);

module.exports = partition;