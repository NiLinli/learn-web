const { fork } = require('child_process');

// fork 是 spawn 的特例
// 1. spawn Node processes
// 2. ChildProcess 内置了 IPC channel, 用于父进程和子进程进行通讯

const children_process = fork(`${__dirname}/fork-children.js`);


children_process.on('message', (m) => {
  console.log(`Parent got message: ${JSON.stringify(m)}`);
});

children_process.send({
  hello: 'child'
});