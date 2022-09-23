// Promise 为一个 class
// 1. constructor 中接受 一个 lambda 
// 2. lambda 中定义了两个参数 （resolve, reject）
// 3. resolve 和 reject 均为函数

const timeout = (ms) => new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done'); // 第三个参数以后的参数都是回调函数的参数
});

timeout(100).then((value) => {
    console.log(value);
});