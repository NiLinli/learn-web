setTimeout(() => {
  console.log('setTimeout');
}, 0);

Promise.resolve()
  .then(() => {
    console.log('promise1');
  })
  .then(() => {
    console.log('promise2');
  });

Promise.resolve()
  .then(() => {
    console.log('promise3');
  })
  .then(() => {
    console.log('promise4');
  });

// 在Node 中会优先于其他微任务
process.nextTick(() => {
  console.log('nextTick');
});
