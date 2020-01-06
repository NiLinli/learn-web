var url = require('url');

const querystring = function (req, res, next) {
  // TODOS
  req.query = url.parse(req.url, true).query;
  next();
};

const cookie = function (req, res, next) {
  const cookie = req.headers.cookie;
  const cookies = {};

  if (cookie) {
    const list = cookie.split(';');
    for (let i = 0; i < list.length; i++) {
      const pair = list[i].split('=');
      cookies[pair[0].trim()] = pair[1];
    } 
  }

  req.cookies = cookies;
}

// 业务处理单元
// 1. 中间件
// 2. 具体业务逻辑

// 中间件与具体业务逻辑等价
// 具体业务逻辑 结合 路由
// 中间件也可以结合路由
// app.use(querystring);      // 中间件
// app.use(cookie);
// app.use(session);
// app.get('/user/:username', getUser); // 业务逻辑
// app.put('/user/:username', authorize, updateUser); // 中间件 + 业务逻辑


// 中间件的注册
app.use = function (path) {
  let handle;

  if (typeof path === 'string') {
    handle = {
      path: pathRegexp(path), // 路径
      stack: Array.prototype.slice.call(arguments, 1) // 处理单元
    };
  } else {
    handle = {
      path: pathRegexp('/'),
      stack: Array.prototype.slice.call(arguments, 0) // 处理单元
    }
  }
  
  routes.all.push(handle);
}

// 中间件的调用
const handle = function(req, res, stack) {
  const next = function () {
    // 从 stack 中抽出 middleware 并执行
    var middleware = stack.unshift();
    if (middleware) {
      // 递归执行 next
      middleware(req, res, next);
    }
  }
  // 启动执行
  next();
}

const match = function (pathname, routes) {

  const stacks = [];
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    // reg 匹配
    const reg = route.path.regexp;
    const matched = reg.exec(pathname);
    if (matched) {
      // 执行中间件
      // handle(req, res, route.stack);
      // return true

      stacks = stacks.concat(route.stack);
    }
  }
  
  // return false;

  return stacks;
}