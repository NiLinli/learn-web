const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);

  if (req.url.indexOf('/error') !== -1) {
    throw new Error('某个未捕获的错误');
  }
  res.end(`hello world pid = ${process.pid} \n`);
});

process.on('message', (m, socket) => {
  if (m === 'socket') {
    // 连接可能会在它发送给子进程的这段时间内被关闭
    if (socket) {
      server.emit('connection', socket);
    }
  }
});
