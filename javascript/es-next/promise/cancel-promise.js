class CancelablePromise {

  static all(iterable) {
    return new CancelablePromise((resolve, reject) => {
      Promise.all(iterable).then(resolve, reject);
    });
  }

  static race(iterable) {
    return new CancelablePromise((resolve, reject) => {
      Promise.race(iterable).then(resolve, reject);
    });
  }

  static reject(value) {
    return new CancelablePromise((resolve, reject) => {
      Promise.reject(value).then(resolve, reject);
    });
  }

  static resolve(value) {
    return new CancelablePromise((resolve, reject) => {
      Promise.resolve(value).then(resolve, reject);
    });
  }

  constructor(executor) {
    this._promise = new Promise(executor);
    this._cancel = false;
  }

  then(success, error) {
    const p = new CancelablePromise((resolve, reject) => {
      this._promise.then(
        (r) => {
          if (this._cancel) {
            p.cancel();
          }

          if (success && !this._cancel) {
            try {
              resolve(success(r));
            } catch (e) {
              reject(e);
            }
          } else {
            resolve(r);
          }
        },
        (e) => {

          if (this._cancel) {
            p.cancel();
          }

          if (error && !this._cancel) {
            try {
              reject(error(e))
            } catch (e) {
              reject(e)
            }
          } else {
            reject(e);
          }
        })
    });

    return p;
  }

  catch(error) {
    return this.then(undefined, error);
  }

  cancel(callback) {
    this._cancel = true;

    if(callback) {
      this._promise.catch(callback);
    }

    return this;
  }

}


const p = new CancelablePromise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 3000);
});

p.then(res => console.log(res));
// p.cancel();