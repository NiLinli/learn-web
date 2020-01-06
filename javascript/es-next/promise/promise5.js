// Promise.resolve
// value
Promise.resolve(123)
  .then(value => console.log(value))

// promise
const originP = Promise.resolve('我在第二行');
const cast = Promise.resolve(originP);

cast
  .then(value => console.log(`values:  ${value}`))

console.log(`originP === cast ? ${originP === cast}`);


// thenable 对象


// Promise.reject