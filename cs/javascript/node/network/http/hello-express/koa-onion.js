const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
  console.log(1);
  next();
  console.log(2);
});

//  middleware 2
app.use((ctx, next) => {
  console.log(3);
  next();
  console.log(4);
});

app.use(async (ctx) => {
  console.log(5);
  ctx.body = 'Hello Onion Model';
  console.log(6);

});

app.listen(8077);