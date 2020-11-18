const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);

  if (req.url.indexOf('/error') !== -1) {
    throw new Error('某个未捕获的错误');
  }
  res.end(`hello world pid = ${process.pid} \n`);
}).listen(8228);

// Js 部分是单线程的

// 1. 启动一个 Node 进程只能利用一个核, 如何充分利用 CPU 使用率 --> 利用率不足
// 理想情况每个进程各利用一个 CPU
// 2. 单线程抛出的异常未捕获, 会引起整个进程的崩溃 --> 程序的健壮性和稳定性

