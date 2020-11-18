const http = require('http');

http
  .createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');

    if (req.url.indexOf('/error') !== -1) {
      throw new Error('某个未捕获的错误');
    }
  })
  .listen(Math.round((1 + Math.random()) * 1000));
