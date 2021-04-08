function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const base = arr[0],
    lessArr = [],
    moreArr = [];

  for (let i = 1; i < arr.length; i++) {
    const pickValue = arr[i];
    pickValue >= base ? moreArr.push(pickValue) : lessArr.push(pickValue);
  }

  return [...quickSort(lessArr), base, ...quickSort(moreArr)];
}

const arr = [1, 7, 8, 2, 3, 9, 1, 4, 3];

console.log(quickSort(arr));
