# ajax

## axios

### axios instance

```js
// axios.js
var Axios = require('./core/Axios');

function createInstance(defaultConfig) {
  // ...
  return instance;
}

// 默认导出 axiosInstance => axios
var axios = createInstance(defaults);

// 挂载一些方法到初始的 axios
axios.Axios = Axios;
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};
axios.Cancel = require('./cancel/Cancel');
axios.CancelToken = require('./cancel/CancelToken');
axios.isCancel = require('./cancel/isCancel');
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = require('./helpers/spread');
axios.isAxiosError = require('./helpers/isAxiosError');

module.exports = axios;
module.exports.default = axios;
```

### Axios class

```js
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

// 发送请求
Axios.prototype.request = function request(config) {

  // 处理 config
  config = mergeConfig(this.defaults, config);

  // config.method 处理
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];

  // 初始 promise
  var promise = Promise.resolve(config);

  // request middleware 添加至 dispatchRequest 前
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  // request middleware 添加至 dispatchRequest 后面
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  // 形成 promise 链式调用
  // then 中需要返回 fulfilled promise
  // catch 中需要返回 rejected promise
  // 形成 then & catch 都会一直执行下去
  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// 提供 method 别名调用 request
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {});
```

#### mergeConfig

**0.17.1 - 0.19.1 屏蔽了 custom config**, 其他版本都支持

```js
module.exports = function mergeConfig(config1, config2) {
  config2 = config2 || {};
  var config = {};

  // 0.17.1 添加 key 类型进行不同合并策略, 引发 bug => 不在范围的内的 key 都被忽略了
  // 合并 config2
  var valueFromConfig2Keys = ['url', 'method', 'data'];
  
  // 合并 config2 & config1 
  // else 合并 config1
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var directMergeKeys = ['validateStatus'];

  // 合并 config2
  // else 合并 config1
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];

  // ....
  // ...各种合并逻辑
  // ....

  // 0.19.1 解决了 0.17.1 引入的 bug, 可以合并自定义 config
  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  // 合并自定义 key 到 config 中
  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};
```

#### InterceptorManager

中间件管理

```js
function InterceptorManager() {
  this.handlers = [];
}

// 注册
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  // 记录 fulfilled callback
  // 记录 rejected callback
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

// 解绑
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

// 遍历执行
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;
```

#### dispatchRequest

### middleware(interceptor)

axios 扩展点

- cancel: cancelToken config
- retry: axios-retry
- timeout: timeout config

### adaptor

适配器, 适配不同的 dispatchRequest 发送

- xhr web
- http node
- 扩展 miniapp 等等...
