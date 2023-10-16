const fs = require('fs');
const path = require('path');

setTimeout(() => {
  // 执行到了 timers 阶段, 新的 timer callback 只能放在下一个 event loop 的 timers 阶段
  setTimeout(() => {
    console.log('a2');
  }, 0);
  setImmediate(() => {
    console.log('a1');
  });
}, 0);

fs.readFile(path.resolve(__dirname, './setTimeout.js'), () => {
  // 执行完成已经到了 pending callback 阶段, 新的 timer callback 只能放在下一个 event loop 的 timers 阶段
  setTimeout(() => {
    console.log('b2');
  }, 0);
  setImmediate(() => {
    console.log('b1');
  });
});

// 如果 setTimeout 在 timer 阶段添加 macro 