const process = require('process');

process.on('exit', (code) => {
  console.log(`退出码: ${code}`);

  setTimeout(() => {
    // 进程立马退出, event loop 中的 queue 被废弃
    console.log('此处不会运行');
  }, 0);
});

// 1. 异常导致进程退出
// setTimeout(() => {
//   console.log(a);
// }, 1000);

// 2. 主动退出
// process.exit();

// 3. event loop 不需要执行其他操作


