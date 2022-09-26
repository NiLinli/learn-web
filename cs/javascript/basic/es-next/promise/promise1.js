let promise = new Promise(function(resolve, reject) {
    console.log('new Promise');
    resolve();
});

promise.then(function() {
    console.log('resolved.');
});

console.log('Hi!');

// new Promise     Promise 新建后立即执行
// Hi!             执行同步任务
// resolved.       最后输出


// promise 工作流程
// 1 新建 Promise 对象，新建的时候立即执行
// 2 new Promise 对象中选择输出 resolve 还是 reject
// 3 then( ) 里面的 执行的 function 就是 resolve( param ) 或者 reject( param )
// 4 如果调用resolve函数和reject函数时带有参数，那么它们的参数会被传递给回调函数