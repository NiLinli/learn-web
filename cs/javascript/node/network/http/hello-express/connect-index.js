const connect = require('connect');
const http = require('http');

const app = connect(); // app 为 requestListener callback

app.use('/omg', (req, res, next) => {
  res.write('Connect support path in use method');
  res.end();
});

app.use('/', (req, res, next) => {
  res.write('Hello connect');
  res.end();
});


app.listen(8071);

// 等同于
// http.createServer(app).listen(8071);
