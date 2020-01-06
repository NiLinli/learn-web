import http = require('http');
import { URL, URLSearchParams } from 'url';
import { Server } from 'http';

const httpServer: Server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {

    console.log(`
    httpVersion ${req.httpVersion} method ${req.method} url ${req.url}
    headers ${req.headers}
    rawHeaders ${req.rawHeaders}
    `);


    const url = new URL(req.url, 'https://127.0.0.1');

    console.log(url);

    res.writeHead(200, {
        'Content-Type': 'text/plain;charset=utf-8'
    });
    res.write('123');
    res.end();
});

httpServer.listen(8091);

// get method 处理的信息
// 1. 请求头
// 2. searchParams