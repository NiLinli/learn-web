const obj = {
  name: 'nilinli',
  age: 18
};

delete obj.age; // side effect

console.log('age' in obj);


const arr1 = [0, 1, 2];
const arr2 = [0, 1, 2, 3, 4, 5, 6, 7];

delete arr1[2];   // '2' => empty
delete arr2[2];

console.log(arr1.length, arr2.length);