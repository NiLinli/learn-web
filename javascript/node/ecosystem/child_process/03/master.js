const { fork } = require('child_process');
const cpus = require('os').cpus();
const net = require('net');

// 子进程
const workers = {};

cpus.forEach((v, i) => {
  const worker = fork(__dirname + '/work.js');
  workers[worker.pid] = worker;
});

// 使用 `pauseOnConnect` 防止 socket 在被发送到子进程之前被读取
const server = net.createServer({ pauseOnConnect: true });

server.on('connection', (socket) => {
  const pidArr = Object.keys(workers);
  const randomWorker = workers[getRandomArrItem(pidArr)];
  randomWorker.send('socket', socket);
});

server.listen(8228);

process.on('exit', () => {
  for (const pid in workers) {
    const worker = workers[pid];
    worker.kill();
  }
});

// utils
function getRandomArrItem(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
