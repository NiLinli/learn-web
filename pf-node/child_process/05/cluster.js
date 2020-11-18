const { fork, setupMaster } = require('cluster');
const cpus = require('os').cpus();

setupMaster({
  exec: 'work.js'
});

// 子进程
const workers = {};

function createWorker() {
  const worker = fork();
  console.log(`Create worker.pid ${worker.process.pid}`);

  // worker 退出
  worker.on('exit', () => {
    console.log(`Worker ${worker.process.pid} exited`);
    // 重新开启一个新的 worker
    createWorker();
  });
}

cpus.forEach((v, i) => {
  createWorker();
});

process.on('exit', () => {
  for (const pid in workers) {
    const worker = workers[pid];
    worker.kill();
  }
});

// 性能问题
// 多个工作进程存活状态管理
// 工作进程的平滑重启
// ...
// pm2