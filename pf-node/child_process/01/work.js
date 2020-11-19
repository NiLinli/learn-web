const http = require('http');

http
  .createServer((req, res) => {
    res.writeHead(200);
    if (req.url.indexOf('/error') !== -1) {
      throw new Error('某个未捕获的错误');
    }
    res.end('hello world\n');
  })
  .listen(8228);


// EADDRINUSE: address already in use :::8228
// error address in use