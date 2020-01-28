var normalObject = {
  a: 1
};

var revocableProxy = Proxy.revocable(normalObject, {
  get(target, name, context) {
    return target[name] + ' omg';
  }
});

var proxyObject = revocableProxy.proxy;  // 取出 proxy 对象

console.log(proxyObject.a);

revocableProxy.revoke();      // 执行撤销方法

proxyObject.a;