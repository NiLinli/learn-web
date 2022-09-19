const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello node!');
});

server.listen(8008);
