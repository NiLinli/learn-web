const arr = [2, 3, 4, 5, 6];

// while 遍历
const it = arr[Symbol.iterator]();

let result;
do {
  result = it.next();
  if (result.value) {
    console.log(result.value);
  }
} while (!result.done);


// implements Iterator 的对象可以调用 for ... of 循环得出 value
for (const value of arr) {
  console.log(value);
}

// key
// for (const key in arr) {
//   if (arr.hasOwnProperty(key)) {
//     const element = object[key];
    
//   }
// }