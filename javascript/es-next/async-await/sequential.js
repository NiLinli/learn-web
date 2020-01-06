const asyncFunc = require('./async-func');

// 按次序的进行
async function sequentialStart() {
    console.log('==SEQUENTIAL START==');

    // slow 完成取回结果 继续执行下一行代码
    const slow = await asyncFunc.resolveAfter2Seconds();
    // fast 完成取回结果 继续执行下一行代码
    const fast = await asyncFunc.resolveAfter1Seconds();

    console.log(slow);
    console.log(fast);
}

sequentialStart();

// ==SEQUENTIAL START==
// starting 2s promise
// 2s promise is done
// starting 1s promise
// 1s promise done
// 20
// 10