console.log('1');

setImmediate(() => {
  console.log('3');
});

// 执行完当前同步代码后， 不管 event loop 什么情况, 立即执行
// 这个函数名应该和 setImmediate 互换
process.nextTick(() => {
  console.log('2');
});
