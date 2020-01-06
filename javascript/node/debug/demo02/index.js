const http = require('http');

http.createServer(function (req, res) {
  const a = req.method;
  const b = req.url;
  let c = 2;
  let d=  c + 1;

}).listen(3002);

// https://github.com/Microsoft/vscode-recipes/tree/master/nodemon
// https://github.com/bdspen/nodemon_vscode