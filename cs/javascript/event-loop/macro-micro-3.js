// 不在一个 tick 下面
setTimeout(() => {
  console.log('a');
  Promise.resolve('a1').then((res) => console.log(res));
}, 0);

setTimeout(() => {
  console.log('b');
  Promise.resolve('b1').then((res) => console.log(res));
}, 0);
