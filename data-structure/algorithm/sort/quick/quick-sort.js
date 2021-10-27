const partition = require('./partition');

function quickSort(arr, start, end) {
  start = typeof start === 'undefined' ? 0 : start;
  end = typeof end === 'undefined' ? (arr.length - 1) : end;

  if (start < end) {
    const base = partition(arr, start, end);

    quickSort(arr, start, base - 1);
    quickSort(arr, base + 1, end);
  }
}

const arr = [1, 7, 8, 2, 3, 9, 1, 4, 3];
quickSort(arr);
console.log(arr);
