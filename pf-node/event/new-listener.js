const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();


myEmitter.on('newListener', (event, listener) => {
    console.log(event);
    console.log(listener);
});

myEmitter.on('removeListener', (event, listener) => {
    console.log(event);
    console.log(listener);
});




myEmitter.on('sayHello', function () {
    console.log('hello world!!!');
});

myEmitter.removeListener('sayHello', function () {
    console.log('hello world!!!');
});


myEmitter.emit('sayHello');