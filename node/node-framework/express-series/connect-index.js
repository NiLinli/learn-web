const connect = require('connect');

const app = connect(); // app 为 requestListener callback

app.use('/', (req, res, next) => {
  app;
  res.write('Hello connect');
  res.end();
});

app.listen(8071);
