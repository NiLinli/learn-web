const http = require('http');

// cluster.work 当前 work 进程

http
  .createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
    process.send({ cmd: 'notifyRequest' });

    omg.a; // crash code
  })
  .listen(8008);

console.log(`work 进程 ${process.pid} 已启动`);
