const { fork } = require('child_process');
const cpus = require('os').cpus();
const net = require('net');

const server = net.createServer();
server.on('connection', (socket) => {
  socket.end('handled by master! \n');
});

// 子进程
const workers = {};

cpus.forEach((v, i) => {
  const worker = fork(__dirname + '/work.js');
  workers[worker.pid] = worker;
});



server.listen(8228, () => {
  // 第二个参数为句柄 指向对象的文件描述符
  for (const pid in workers) {
    const worker = workers[pid];
    worker.send('server', server);
  }
});


process.on('exit', () => {
  for (const pid in workers) {
    const worker = workers[pid];
    worker.kill();
  }
});