const { fork } = require('child_process');
const cpus = require('os').cpus();
const net = require('net');

const server = net.createServer();

server.listen(8228);

// 子进程
const workers = {};

function createWorker() {
  const worker = fork(__dirname + '/work.js');

  worker.send('server', server);
  workers[worker.pid] = worker;
  console.log(`Create worker.pid ${worker.pid}`);

  // worker 退出
  worker.on('exit', () => {
    console.log(`Worker ${worker.pid} exited`);
    delete workers[worker.pid];
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