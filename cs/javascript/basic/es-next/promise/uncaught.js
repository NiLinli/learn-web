// Uncaught (in promise) Error
const http = require('http');

http.createServer(() => {
  // main();
  main2();
}).listen(9002);

function main() {
  console.log(1)
  Promise.reject();
  console.log(2)
}

function main2() {
  setTimeout(() => {
    a.b.c;
  }, 2000)
}

// main();

// console.log(3);

