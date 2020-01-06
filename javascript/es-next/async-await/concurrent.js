// 并发执行
const asyncFunc = require('./async-func');

// 按次序的进行
async function concurrentStart() {
    console.log('==CONCURRENT START==');


    const slow = asyncFunc.resolveAfter2Seconds();
    const fast = asyncFunc.resolveAfter1Seconds();

    console.log(await slow);
    console.log(await fast);
}

concurrentStart();

// ==CONCURRENT START==
// starting 2s promise
// starting 1s promise
// 1s promise done
// 2s promise is done
// 20
// 10