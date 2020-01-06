let arr1 = ['a', 'b'],
    arr2 = ['c', 'd'],
    arr3;

arr3 = [1, 2, ...arr2, 4, 5, ...arr1];
console.log(arr3);

// clone shadow
let arr4 = [...arr1];
console.log(arr4);