
const reduce = require('./reduce')


function mergeSort(arr, start, end) {
  start = typeof start === 'undefined' ? 0 : start;
  end = typeof end === 'undefined' ? arr.length - 1 : end;

  if (start < end) {
    const middle = parseInt((start + end) / 2);
    mergeSort(arr, start, middle);
    mergeSort(arr, middle + 1, end);

    reduce(arr, start, middle, end);
  }
}

const arr = [1, 7, 8, 2, 3, 9, 1, 4, 3];

mergeSort(arr);

console.log(arr);