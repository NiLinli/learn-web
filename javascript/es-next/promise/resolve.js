// Promise.resolve
// value
Promise.resolve(123)
  .then(value => console.log(value))

// promise -> 返回这个 promise, 等同于啥都没有做
const originP = Promise.resolve('我在第二行');
const cast = Promise.resolve(originP);

cast
  .then(value => console.log(`values:  ${value}`))

console.log(`originP === cast ? ${originP === cast}`);


// thenable 对象


// Promise.reject