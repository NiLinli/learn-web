const fs = require('fs');

const rs = fs.createReadStream('./data.txt');

const ws = fs.createWriteStream('./test.txt');

const res = rs.pipe(ws);

// 返回可写流
// 所以可写流是 Duplex 或者 Transform 就可以形成管道链
console.log(res === ws);

// pipe 原理
// 1. 处理 writable stream 背压问题
// readable.on('data', function (data) {
//   if (false === writable.write(data)) {
//     // readable 使用的是 data 方式, 所以需要切换pause/flow 模式
//     readable.pause()
//   }
// })

// writable.on('drain', function () {
//   readable.resume()
// })
