function after1s() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(123);
    }, 1000)
  });
}

module.exports = after1s;
