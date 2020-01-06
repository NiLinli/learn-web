var express = require('express');
 
function external(cb) {
    process.nextTick(function () {
        throw new Error();
        cb.call(null, 'sunny');
    })
}
 
var app = express();
app.get('/weather', function (req, res) {
    external(function (data) {
        res.end('Weather of Beijing is ' + data);
    })
}).listen(3000);
 

process.on('uncaughtException', (error) => {
  console.log(error);
});




// 缺点
// 1. 丢失上下文环境, 无法返回 500 错误
// 2. 用它来尝试恢复应用正常运行的操作是不安全的
// 请求一直在等待，内存上涨。原因在于res.end 永远不会执行，现有的I/O处于等待的状态，已经开辟的资源不仅不会被释放，而且服务器还在不知疲倦地接受新的用户请求。

// ab -n 1000 -c 20 http://localhost:3000/weather

// 针对发生异常的请求返回一个错误代码 
// 出错的 Worker 不再接受新的请求
// 退出关闭 Worker 进程