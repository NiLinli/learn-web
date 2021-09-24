function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('the middleware has a bug');
    }, ms);
  });
}

module.exports = async function error(ctx, next) {
  await wait(1000);
  await next();
};
