const connect = require('connect');

const app = connect();      // app 为 requestListener callback

app.use((req, res, next)=> {
  req.abc = 'hello connect';
  next();
})

app.use('/test', (req, res, next) => {

  res.write(req.abc);
  res.end();
})

app.listen(3003);


