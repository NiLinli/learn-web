const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
  fs.readFile(__dirname + '/test.txt', function (err, data) {
    res.end(data);
  });
});

server.listen(8007);
