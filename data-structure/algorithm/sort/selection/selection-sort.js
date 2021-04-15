function selectionSort(arr) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    let minIndex = i;

    for (let j = minIndex; j < arr.length; j++) {
      const pickValue = arr[j];
      if (pickValue < arr[minIndex]) {
        minIndex = j;
      }
    }

    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
}

const arr = [1, 7, 8, 2, 3, 9, 1, 4, 3];

console.log(selectionSort(arr));
