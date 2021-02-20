const fs = require('fs');
const http = require('http');
const path = require('path');

function handle_incoming_request(req, res) {
  if (req.method.toLowerCase() === 'get' && req.url.substring(0, 9) === '/content/') {
    serve_static_file(req.url.substring(9), res);
  } else {
    handle_not_found(res);
  }
}

function serve_static_file(file, res) {
  const rs = fs.createReadStream(file);

  const ct = content_type_for_path(file);

  res.writeHead('200', { 'Content-type': ct });

  rs.on('readable', function () {
    const d = rs.read();

    if (d) {
      if (typeof d === 'string') {
        res.write(d);
      } else if (typeof d === 'object' && d instanceof Buffer) {
        res.write(d.toString('utf-8'));
      }
    }
  });

  rs.on('error', function (e) {
    handle_not_found(res);
  });

  rs.on('end', function () {
    res.end();
  });

  // 方式 2
  // rs.pipe(res);
}

function content_type_for_path(file) {
  const ext = path.extname(file);

  let str;
  switch (ext.toLowerCase()) {
    case '.html':
      str = 'text/html';
      break;
    case '.js':
      str = 'text/javascript';
    case '.css':
      str = 'text/css';
      break;
    case '.jpq':
    case '.jpeg':
      str = 'image/jpeg';
      break;
    default:
      break;
  }
  return str;
}

function handle_not_found(res) {
  res.writeHead(404, { 'Content-Type': 'application/json' });

  res.end(
    JSON.stringify({
      error: 'not_found',
      message: `request not found`,
    }) + '\n'
  );
}

const s = http.createServer(handle_incoming_request);
s.listen(8081);
