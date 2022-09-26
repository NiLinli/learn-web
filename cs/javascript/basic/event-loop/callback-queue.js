// sync
[1, 2, 3, 4].forEach(function (i) {
  console.log(i);
});

// async
// callback queue FIFO
function asyncForEach(arr, cb) {
  arr.forEach(function (i) {
    setTimeout(cb, 0, i);
  });
}

asyncForEach([1, 2, 3, 4], function (i) {
  console.log(i);
});
