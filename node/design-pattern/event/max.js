const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('sayHello', function () {
    console.log('hello world!!!');
});


console.log(myEmitter.getMaxListeners()); // 10 个

myEmitter.setMaxListeners(myEmitter.getMaxListeners() + 1);

console.log(myEmitter.getMaxListeners()); // 10 个