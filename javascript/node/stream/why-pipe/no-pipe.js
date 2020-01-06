const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
  fs.readFile(__dirname + '/test.txt', function (err, data) {
    res.end(data);
  });
});

server.listen(8007);

// 1. 如果data.txt文件非常大
// 2. 在响应大量用户的并发请求时
// 程序可能会消耗大量的内存，这样很可能会造成用户连接缓慢的问题
// 用户在接收到任何的内容之前首先需要等待程序将文件内容完全读入到内存中