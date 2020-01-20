var http = require('http');

const httpServer = http.createServer((req, res) => {

    console.log(`
        httpVersion: ${req.httpVersion} 
        method: ${req.method}
        url: ${req.url}
        headers: ${req.headers}
        rawHeaders: ${req.rawHeaders}
    `);

    // httpVersion: 1.1 
    // method: POST
    // url: /?a=1&b=2           path + searchParams

    // headers
    // {
    //     "content-type": "application/json",
    //     "user-agent": "PostmanRuntime/7.20.1",
    //     "accept": "*/*",
    //     "cache-control": "no-cache",
    //     "postman-token": "f3474676-2092-4049-92a5-168fe5183bd5",
    //     "host": "localhost:8092",
    //     "accept-encoding": "gzip, deflate",
    //     "content-length": "22",
    //     "connection": "keep-alive"
    // }

    // rawHeaders
    // Content-Type,application/json,User-Agent,PostmanRuntime/7.20.1,Accept,*/*,Cache-Control,no-cache,Postman-Token,64acd58f-3263-433c-96bf-024d66e08ddb,Host,localhost:8092,Accept-Encoding,gzip, deflate,Content-Length,22,Connection,keep-alive

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

        // response
        res.writeHead(200, {
            'Content-Type': 'application/json;charset=utf-8'
        });
        res.write(str);
        res.end();
    });


});

httpServer.listen(8092);

// get/post
// 1. 请求头处理
// 2. searchParams
// 2. [post]获取 body 中的二进制数据