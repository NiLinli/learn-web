const Koa = require('koa');
const requestTime = require('./middleware/requestTime-koa');

const app = new Koa();

// 中间件
app.use(requestTime);

app.use(async (ctx) => {
  ctx.body = 'Hello Koa'; 
});

app.listen(8073);
