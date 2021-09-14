function getPromise(n) {
  return new Promise((resolve) => {
    setTimeout(resolve, n * 1000, n);
  });
}

// race 取最快的结果, 其他的结果丢弃
Promise.race([getPromise(3), getPromise(2), getPromise(1)]).then((value) => console.log(value));

// all 所有执行完成后返回 []
Promise.all([getPromise(3), getPromise(2), getPromise(1)]).then((value) => console.log(value));

// Promise.all 用来捕获并行执行的错误
Promise.all([
  getPromise(5).then((value) => {
    a.b.c;
    console.log('all ', value)
  }),
  getPromise(10).then((value) => console.log('all', value)),
  getPromise(15).then((value) => {
    a.b.c;
    console.log('all ', value)
  }),
  getPromise(20).then((value) => console.log('all', value))
]).catch(error => {
  // reject 第一个错误
  console.log('all error', error)
})

