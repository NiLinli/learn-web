var http = require('http');


const httpServer = http.createServer((req, res) => {
  res.writeHead(401, {
    'Content-Type': 'text/plain;charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  });
  res.write('你没有相关权限');
  res.end();
});

httpServer.listen(9092);