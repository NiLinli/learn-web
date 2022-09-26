const http = require('http');

const foo = 123;

function sayHello() {
  const bar = 456;

  return 789;
}

http
  .createServer((req, res) => {
    sayHello();
    console.log('call function 1');
    sayHello();
    console.log('call function 2');
    sayHello();
    console.log('call function 3');

    res.write('hello world');
    res.end();
  })
  .listen(8009);
