import http = require('http');

http.createServer(function (req, res) {
  const a = req.method;
  const b = req.url;
  let c = 2;
  let d = c + 1;

  console.log('heheda');

}).listen(3002);