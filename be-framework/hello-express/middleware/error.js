function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('the middleware has a bug');
    }, ms);
  });
}

module.exports = async function error(req, res, next) {
  // 需要自行在中间件中捕获异常

  await wait(1000);
  next();
};
