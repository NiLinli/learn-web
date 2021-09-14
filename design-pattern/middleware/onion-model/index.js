const { aa, ab, ac, end } = require('./middleware');

class Application {
  constructor() {
    this.middleware = [];
  }

  use(fn) {
    this.middleware.push(fn);
    return this;
  }

  callback() {
    // 组合 middleware
    const fn = compose(this.middleware);

    const handleRequest = (ctx) => {
      return fn(ctx);
    };

    return handleRequest;
  }
}

const app = new Application();

Array.prototype.push.apply(app.middleware, [aa, ab, ac, end]);

const handle = app.callback();

// 事件触发 callback
handle({});


// koa-compose
function compose(middleware) {
  // 返回一个新的函数
  return function (context, next) {
    // last called middleware #
    let index = -1;
    return dispatch(0);
    function dispatch(i) {
      if (i <= index) return Promise.reject(new Error('next() called multiple times'));
      index = i;
      let fn = middleware[i];
      if (i === middleware.length) fn = next;
      if (!fn) return Promise.resolve();
      try {
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));

        // return new Promise((resolve) => {
        //   return resolve(fn(context, dispatch.bind(null, i + 1)))
        // });
      } catch (err) {
        return Promise.reject(err);
      }
    }
  };
}

