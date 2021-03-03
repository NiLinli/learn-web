const fs = require('fs');
const path = require('path');

// 等待完成后 才能执行下一句 blocking
const foo = fs.readFileSync(path.resolve(__dirname, './event-loop.md'));
// 等待完成后 才能执行下一句 blocking
const bar = fs.readFileSync(path.resolve(__dirname, './async-unblocking.js'));

console.log(foo);
console.log(bar);



// the problem is because we're running code in browsers.
// the browser is blocked,it's stuck, it can't do anything until those request complete.
// the solution?
// async callbacks
