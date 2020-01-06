const EventEmitter = require('events');

class MyEmitter extends EventEmitter {

}

const myEmitter = new MyEmitter();


myEmitter.on('sayHello', function () {
    console.log('hello world!!!');
});


myEmitter.emit('sayHello');


// this 指向

myEmitter.on('sayThis', function () {
    console.log(this === myEmitter);    // this 指向 EventEmitter 实例
});

myEmitter.emit('sayThis')