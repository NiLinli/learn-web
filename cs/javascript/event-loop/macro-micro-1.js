// macro
setTimeout((_) => console.log(4));

new Promise((resolve) => {
  // sync
  resolve();
  console.log(1);
}).then((_) => {
  // micro
  console.log(3);
});

// sync
console.log(2);
