const p1 = new Promise((resolve) => {
  setTimeout(resolve, 500, 'one');
});

const p2 = new Promise((resolve) => {
  setTimeout(resolve, 100, 'two');
});

const p3 = new Promise((resolve) => {
  setTimeout(resolve, 50, 'three');
});

// race 取最快的结果, 其他的结果丢弃
Promise.race([p1, p2, p3])
  .then(value => console.log(value));

// all 等最后一个结果, 所有结果都需要 still serial 可以控制回调执行顺序
Promise.all([p1, p2, p3])
  .then(value => console.log(value));

// parallel 并行执行 callback
p1.then(value => console.log(value))
p2.then(value => console.log(value))
