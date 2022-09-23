const http = require('http');

const httpServer = http.createServer((req, res) => {

    // ** 添加中间件 **
    // 分发路由
    // 记录日志
    // session
    // 处理 req
    // 处理 res
    // ...
    res.writeHead(200, {
        'Content-Type': 'text/plain;charset=utf-8'
    });

    res.write('Hello http server');         // 发送一块响应主体 Buffer or string
    res.end();      // 服务器消息已发送完成 write(data) + end() = end(data)
});

httpServer.listen(8080);

// allowHalfOpen: true,
// pauseOnConnect: false,
// httpAllowHalfOpen: false,
// timeout: 120000,
// keepAliveTimeout: 5000,
// maxHeadersCount: null,                   限制请求头的最大数量
