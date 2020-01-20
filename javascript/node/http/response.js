var http = require('http');

http.createServer((req, res) => {

  // basic
  res.statusCode = 201;
  res.write('Omg');
  res.end();

}).listen(8092);