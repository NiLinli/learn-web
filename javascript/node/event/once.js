const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();


myEmitter.on('sayHello', function () {
    console.log('hello world!!!');
});


// once 只处理一次, 自己注销
myEmitter.once('sayThis', function () {
    console.log(this === myEmitter);   
});

myEmitter.emit('sayHello');
myEmitter.emit('sayThis');
myEmitter.emit('sayHello');
myEmitter.emit('sayThis');
myEmitter.emit('sayHello');
myEmitter.emit('sayThis');
