

function reduce(arr, start, middle, end) {

  let start1 = start;
  let end1 = middle;

  let start2 = middle + 1;
  let end2 = end;

  const temp = [];
  let k = 0;

  while (start1 <= end1 && start2 <= end2) {
    temp[k++] = arr[start1] <= arr[start2] ? arr[start1++] : arr[start2++];
  }

  while (start1 <= end1) {
    temp[k++] = arr[start1++];
  }

  while (start2 <= end2) {
    temp[k++] = arr[start2++];
  }

  temp.forEach((v, i) => {
    arr[start + i] = v;
  });

}

module.exports = reduce;