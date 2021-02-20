const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

myEmitter.on('error', () => new Error('whoops!!!'));


myEmitter.emit('error');

console.log('run!!!');
