// macro
setTimeout((_) => console.log(4));

new Promise((resolve) => {
  // sync
  resolve();
  console.log(1);
}).then((_) => {
  // micro
  console.log(3);
  Promise.resolve()
    .then((_) => {
      // micro
      console.log('before timeout');
    })
    .then((_) => {
      Promise.resolve().then((_) => {
        // micro
        console.log('also before timeout');
      });
    });
});

// sync
console.log(2);
