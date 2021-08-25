const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {

  const stream = fs.createReadStream(__dirname + '/test.txt');
  stream.pipe(res);
});

server.listen(8007);

// 1. 自动控制后端压力
// 2. .pipe() 方法会自动帮助我们监听 data 和 end 事件
// 3. 可以将尽可能少的缓存放到内存中