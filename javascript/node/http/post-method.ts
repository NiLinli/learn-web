import http = require('http');
import { Server } from 'http';

const httpServer: Server = http.createServer((req, res) => {

    let chunks = [];
    let size = 0;
    req.on('data', (chunk) => {
        chunks.push(chunk);
        size += chunk.length;
    });

    req.on('end', () => {
        console.log('end');
        const buf = Buffer.concat(chunks, size);

        const str = buf.toString('utf-8');
        console.log(str);
        console.log(typeof str);
    });

    res.writeHead(200, {
        'Content-Type': 'text/plain;charset=utf-8'
    });
    res.write('倪西西');
    res.end();
});

httpServer.listen(8092);

// post
// 1. 请求头处理
// 2. 获取 body 中的二进制数据