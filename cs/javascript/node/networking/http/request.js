var http = require('http');

function sendResponse(res, str) {
  // response
  res.writeHead(200, {
    'Content-Type': 'application/json;charset=utf-8',
  });
  res.write(str);
  res.end();
}

const httpServer = http.createServer((req, res) => {
  let data = '';

  //   req.readableHighWaterMark 16384
  req.on('data', (chunk) => {
    data += chunk.toString('utf8');
  });

  req.on('end', () => {
    sendResponse(res, data);
  });
});

// const httpServer = http.createServer((req, res) => {
//   let chunks = [];
//   let size = 0;
//   req.on('data', (chunk) => {
//     chunks.push(chunk);
//     size += chunk.length;
//   });

//   req.on('end', () => {
//     const buf = Buffer.concat(chunks, size);
//     const str = buf.toString('utf-8');
//     sendResponse(res, str)
//   });
// });

httpServer.listen(8092);

// get/post
// 1. 请求头处理
// 2. searchParams
// 2. [post]获取 body 中的二进制数据
