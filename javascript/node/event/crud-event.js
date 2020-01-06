const EventEmitter = require('events');

class MyEmitter extends EventEmitter {

}

const myEmitter = new MyEmitter();


myEmitter.on('sayHello', function () {
    console.log('hello world!!!');
});


// c
myEmitter.on('sayHello1', function () {
    console.log('hello world  1!!!');

});

myEmitter.on('sayHello1', function () {
    console.log('hello world 1 + 1 !!! ');

});

// r
console.log(myEmitter.eventNames()); // 所有事件名字

console.log(myEmitter.listenerCount('sayHello1')); // 单个事件绑定的监听器

// u
myEmitter.prependListener('sayHello1', function () {
    console.log('hello world 1 !!! prepend');
});

const prependListener = function () {
    console.log('hello world 1 !!! prepend once');
};

myEmitter.prependOnceListener('sayHello1', prependListener);

myEmitter.emit('sayHello1');
myEmitter.emit('sayHello1');

// d
myEmitter.removeListener('sayHello1', prependListener);

myEmitter.emit('sayHello1');

myEmitter.removeAllListeners('sayHello1');

myEmitter.emit('sayHello1');