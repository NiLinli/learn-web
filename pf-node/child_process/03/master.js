const { fork } = require('child_process');
const cpus = require('os').cpus();
const net = require('net');

const server = net.createServer();
server.on('connection', (socket) => {
  socket.end('hanled by master! \n');
});

// 子进程
const children = cpus.map((v, i) => {
  return fork(__dirname + '/work.js');
});

server.listen(8228, () => {
  // 第二个参数为句柄 指向对象的文件描述符
  children.forEach((child, i) => {
    child.send('server', server);
  });

  // 关掉 tcp 链接
  server.close();
});
