// 1. 第一个参数是 resolved 状态的回调函数
// 2. 第二个参数是 rejected 状态的回调函数（可选）
// 3. 返回值为新的 Promise 实例（非原来的）

const setPromise = (a) => new Promise((resolve) => resolve(a));

const p1 = setPromise('p1');

p1
  .then(str => console.log('1: ' + str))
  .then(str => console.log('2: ' + str))
  .then(str => setPromise('p2'))
  .then(str => {
    console.log('3: ' + str)
    return undefined;
  })
  .then(str => 3)
  .then(str => console.log('4: ' + str))
  .then(str => null)
  .then(str => console.log('5: ' + str))


// 


// 返回值正常情况
// 1. value   相当于 fullfilled 的 promise 返回
// 2. promise 