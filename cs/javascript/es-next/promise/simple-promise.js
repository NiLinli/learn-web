function Promise(executor) {
  var self = this;
  self.status = 'pending';
  self.data = undefined;
  self.onResolvedCallback = [];
  self.onRejectedCallback = [];

  // 执行就运行代码
  // 1. 结果直接保存在定义的 回调 中
  // 2. then 
  function resolve(value) {
    if (self.status === 'pending') {
      self.status === 'resolved';
      self.data = value;
    }

    for (let i = 0; i < self.onResolvedCallback; i++) {
      self.onResolvedCallback[i](self.data);
    }
  }

  function reject(error) {
    if (self.status === 'pending') {
      self.status === 'rejected';
      self.data = error;
      for (let i = 0; i < self.onRejectedCallback; i++) {
        self.onRejectedCallback[i](self.data);
      }

    }
  }

  executor(resolve, reject);
}

Promise.prototype.then = function (onResolved, onRejected) {
  let self = this;
  let returnPromise;

  // 根据标准 onResolved 如果不为 function , 有个 默认值

  onResolved = typeof onResolved === 'function'? onResolved: function(value) { return value };
  onRejected = typeof onRejected === 'function'? onRejected: function(error) { throw error };

  if (self.status === 'resolved') {

    return returnPromise = new Promise(function (resolve, reject) {

      try {
        let x = onResolved(self.data);

        if (x instanceof Promise) {
          x.then(resolve, reject);
        } else {
          resolve(x);
        }
      } catch (e) {
        reject(e);
      }
    });

  } else if (self.status === 'rejected') {
    return returnPromise = new Promise(function (resolve, reject) {
      try {
        let x = onRejected(self.data);
        if (x instanceof Promise) {
          x.then(resolve, reject);
        } else {
          resolve(x);
        }

      } catch (e) {
        reject(e);
      }

    });

  } else if (self.status === 'pending') {
    return returnPromise = new Promise(function (resolve, reject) {

      // 放入 onResolvedCallback 或者是 onRejectedCallback [] 中
      self.onResolvedCallback.push(function (value) {
        try {
          let x = onResolved(value);
          if (x instanceof Promise) {
            x.then(resolve, reject);
          }
          resolve(x);
        } catch (e) {
          reject(e);
        }
      });


      self.onRejectedCallback.push(function (error) {
        try {
          let x = onRejected(error);
          if (x instanceof Promise) {
            x.then(resolve, reject);
          }
          resolve(x);

        } catch (e) {
          reject(e);
        }
      });

    });

  }

}

Promise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected);
}

// then 返回一个 promise