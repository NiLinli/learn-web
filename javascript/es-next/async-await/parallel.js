// 并发执行, 结果不想干
const asyncFunc = require('./async-func');

async function parallel() {

  // Promise.all 做集中错误处理
  await Promise.all([
    // 内部新建两个 async function 去处理这些
    (async () => { await console.log(asyncFunc.resolveAfter1Seconds()) })(),
    (async () => { await console.log(asyncFunc.resolveAfter2Seconds()) })(),
  ])
}

parallel();