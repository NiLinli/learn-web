const http = require('http');
const process = require('process');

const server = http.createServer((req, res) => {
  const ok = req.params.ok;
  res.writeHead(200, { 'Content-Type': 'text/plain'});
  res.end('Hello World');
}).listen(3000)


console.log('Server running at http://localhost:3000/');

process.on('uncaughtException', (err) => {
  // console.log(err);


  // 异步代码异常 会导致 不断触发 uncaughtException 事件
  // setTimeout(() => {
  //   console.log(a);
  // }, 0);

  // 同步代码异常
  // 不会捕获(避免无限循环), 不会触发 exit 事件
  console.log(a);

});


process.on('exit', (code) => {
  console.log(`退出码: ${code}`);
});

// 1. 触发 uncaughtException 事件
// 2. 如果 uncaughtException 没有被监听
// 3. 打印异常的堆栈信息 & 触发进程的 exit 事件


