function selectSort(arr) {
  const newArr = [];
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    let minIndex = 0;
    let minValue = arr[minIndex];

    for (let i = minIndex + 1; i < arr.length; i++) {
      const pickValue = arr[i];
      if (pickValue < minValue) {
        minValue = pickValue;
        minIndex = i;
      }
    }

    newArr.push(minValue);
    arr.splice(minIndex, 1);
  }

  return newArr;
}

const arr = [1, 7, 8, 2, 3, 9, 1, 4, 3];

console.log(selectionSort(arr));
