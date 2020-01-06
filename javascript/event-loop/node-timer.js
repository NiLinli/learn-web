// idle > I/0 > check

setTimeout(() => {
  console.log('setTimeout');
}, 0);

// check
setImmediate(()=> {
  console.log('setImmediate');
});

// idle
process.nextTick(() => {
  console.log('nextTick');
});


// 优先级: nextTick > setTimeout (设置为 0 , 不一定为 0) > setImmediate
