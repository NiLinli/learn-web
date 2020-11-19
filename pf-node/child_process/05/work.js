const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);

  if (req.url.indexOf('/error') !== -1) {
    throw new Error('某个未捕获的错误');
  }
  res.end(`hello world pid = ${process.pid} \n`);
}).listen(8228);


// https://github.com/nodejs/node-v0.x-archive/blob/master/lib/net.js#L1179