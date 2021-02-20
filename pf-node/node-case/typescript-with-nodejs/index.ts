import http = require('http');

function handleIncomingRequest(req: http.IncomingMessage, res: http.ServerResponse): void {
    console.log(`INCOMING REQUEST ${req.method} ${req.url}`);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        error: 'hehe'
    }) + '\n');
}

const s = http.createServer(handleIncomingRequest);
s.listen(8070);