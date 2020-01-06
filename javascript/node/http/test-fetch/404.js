var http = require('http');


const httpServer = http.createServer((req, res) => {
  res.writeHead(404, {
    'Content-Type': 'text/plain;charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  });
  // res.write('服务器错误');
  res.end();
});

httpServer.listen(9094);