// 剩余参数(函数定义阶段)：包含传递给函数剩余参数的一个数组
function pick(object, ...keys) {
  let result = Object.create(null);

  for (let i = 0; i < keys.length; i++)
    result[keys[i]] = object[keys[i]];

  return result;
}

// 扩展运算符(函数调用阶段)： 把数组解开为参数 ，，，，
let arr1 = [1, 2, 4, 6, 7, 7];

// [].push();
let arr2 = [];
Array.prototype.push.apply(arr2, arr1);
console.log(arr2);


arr2.push(...arr1);
console.log(arr2);



// 剩余 parameter(定义)
function foo(a, ...other) {
  console.log(other); // arr
}

foo(1, 2, 3, 4, 5);


// 区别 ... 在函数中另外用法 spread
function bar(a, ...other) {
  return baz(...other); // spread
}

function baz(a, b, c, d) {
  return a + b + c + d;
}

console.log(bar(1, 2, 3, 4, 5));