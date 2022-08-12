const { a, b, c, aa, ab, ac, end } = require('./middleware');

// 前置中间件是按照顺序执行的
// next 调用是普通调用, 无 await 调用
// 后置中间件
//  sync code 时候也是按照洋葱模型
//  async code 从右到左并行调用 Promise, 所以顺序不固定

function getApp() {
  const app = {};
  app.stacks = [];

  // 注册
  app.use = function (middleware) {
    this.stacks.push(middleware);
  };

  // 调用
  // next -> middleware -> next -> ....
  app.handle = function (context) {
    // 定义 next 方法
    const next = () => {
      const middleware = this.stacks.shift();
      if (middleware) {
        return middleware(context, next);
      }
    };

    // 初次调用
    next();
  };

  return app;
}

const app = getApp();
app.use(a);
app.use(b);
app.use(c);
app.use(end);
// 事件触发 callback
app.handle({});


// const appAsync = getApp();
// appAsync.use(aa);
// appAsync.use(ab);
// appAsync.use(ac);
// appAsync.use(end);

// appAsync.handle({});
