# callback & listen

## connect/express

```js
function createServer() {
  // app 为 callback
  function app(req, res, next) {
    app.handle(req, res, next);
  }
  // app 上面绑定一些方法
  merge(app, proto);
  // ...
  return app;
}

var proto = {};

proto.listen = function listen() {
  var server = http.createServer(this);
  return server.listen.apply(server, arguments);
};

module.exports = createServer;
```

```js
function createApplication() {
  var app = function (req, res, next) {
    app.handle(req, res, next);
  };

  mixin(app, proto, false);
  app.init();
  return app;
}

app.listen = function listen() {
  var server = http.createServer(this);
  return server.listen.apply(server, arguments);
};

module.exports = createApplication;
```

## koa

```js
module.exports = class Application extends Emitter {
  constructor(options) {
    super();
    options = options || {};
    // ...
  }

  listen(...args) {
    debug('listen');
    const server = http.createServer(this.callback());
    return server.listen(...args);
  }

  callback() {
    const fn = compose(this.middleware);

    if (!this.listenerCount('error')) this.on('error', this.onerror);

    const handleRequest = (req, res) => {
      const ctx = this.createContext(req, res);
      return this.handleRequest(ctx, fn);
    };

    return handleRequest;
  }

  static get default() {
    return Application;
  }
};
```
