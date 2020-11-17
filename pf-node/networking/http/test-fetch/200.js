var http = require('http');


const httpServer = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain;charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  });
  res.write('倪西西');
  res.end();
});

httpServer.listen(9091);