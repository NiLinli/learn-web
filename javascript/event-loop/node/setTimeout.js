// 轮询阶段完成, 立即执行
setImmediate(() => {
  console.log('a');
});

// 0 不为 0 Node 中为 1
// 为 1 的话不能及时放入 timers 中
// 于是就放入了下一次的 event loop
setTimeout(() => {
  console.log('b');
}, 0);


// call stack 执行时间大于 1
// 保证 call stack 为空的时候, time0 放入到了 timer 中
for (let i = 0; i < 1000000000; i++) {
  let a = 1;
  let b = 2;
  a + b;
}
