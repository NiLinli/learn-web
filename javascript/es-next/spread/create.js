const arr1 = ['a', 'b'],
  arr2 = ['c', 'd'];

const arr3 = [1, 2, ...arr2, 4, 5, ...arr1];

console.log('Array create: ');
console.log(arr3);

const p1 = {
  name: '倪西西',
};

// 1. 属性相同, 根据放置位置先后, 进行覆盖
// 2. 只会展开 hasOwnProperty() 的属性
const p2 = {
  ...p1,
  name: 'nixixi',
};

const p3 = {
  name: 'nixixi',
  ...p1,
};

// const p3 = Object.assign(
//   {},
//   {
//     name: 'nixixi',
//   },
//   p1
// );

console.log('Object literal create: ');
console.log(p2, p3);

// clone shadow
const cloneArr = [...arr1];
console.log(cloneArr);

// clone shadow
let cloneObj = { ...p1 };
console.log(cloneObj);
