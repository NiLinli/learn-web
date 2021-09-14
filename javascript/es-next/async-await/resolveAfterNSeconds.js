function resolveAfterNSeconds(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(n);
      console.log(`${n}s promise is done`);
    }, n * 1000);
  });
}

module.exports = resolveAfterNSeconds;
