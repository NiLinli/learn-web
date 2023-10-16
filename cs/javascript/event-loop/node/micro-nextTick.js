Promise.resolve()
  .then(() => {
    console.log('3');
  })
  .then(() => {
    console.log('4');
  });

// 在 Node 中会优先于其他微任务
process.nextTick(() => {
  console.log('2');
});

console.log('1');
