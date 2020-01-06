import http = require('http');
import { Server } from 'http';

const httpServer: Server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain;charset=utf-8'
    });
    res.write('你信息');
    res.end();
});

httpServer.listen(8080);


console.log(httpServer);


// allowHalfOpen: true,
// pauseOnConnect: false,
// httpAllowHalfOpen: false,
// timeout: 120000,
// keepAliveTimeout: 5000,
// maxHeadersCount: null,                   限制请求头的最大数量
