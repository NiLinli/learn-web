const { a, b, c, aa, ab, ac, end } = require('./middleware');

// 前置中间件是按照顺序执行的
// 后置中间件 sync code 时候也是按照洋葱模型, async code 时候不遵循, 没有特定规律

function getApp() {
  const app = {};

  app.stacks = [];

  // 注册
  app.use = function (middleware) {
    this.stacks.push(middleware);
  };

  // 调用
  // 调用中间件的时候, 传递 next 函数
  // next 函数去执行下一个中间件, 达到组合链式调用的方式
  app.handle = function (context) {
    const next = () => {
      const middleware = this.stacks.shift();
      if (middleware) {
        return middleware(context, next);
      }
    };
    next();
  };

  return app;
}

// const app = getApp();
// app.use(a);
// app.use(b);
// app.use(c);
// app.use(end);
// // 模拟监听回调执行
// app.handle({});


const appAsync = getApp();
appAsync.use(aa);
appAsync.use(ab);
appAsync.use(ac);
appAsync.use(end);

// 模拟监听回调执行
appAsync.handle({});
