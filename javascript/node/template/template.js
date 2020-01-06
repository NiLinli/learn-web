const http = require('http');


function handle_incoming_request(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.end(+ '\n');
}


const s = http.createServer(handle_incoming_request);
s.listen(8081);