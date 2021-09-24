const Koa = require('koa');
const requestTime = require('./middleware/requestTime-koa');
const error = require('./middleware/error-koa');

const app = new Koa();

// 中间件
app.use(requestTime);
app.use(error);


app.use(async (ctx) => {
  ctx.body = 'Hello Koa';
});

app.on('error', (err) => {
  console.error('server error', err);
});


app.listen(8073);


