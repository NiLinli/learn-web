const { a } = require('../../../design-pattern/fe-middleware/middleware');
const resolveAfterNSeconds = require('./resolveAfterNSeconds');

// async 函数返回值
// Promise 和 then 返回值一样
async function foo() {
  await resolveAfterNSeconds(2);
  // return undefined;
  // return Promise.resolve(undefined);
}

async function bar() {
  await resolveAfterNSeconds(1);
  return 'bar';
}

// async 错误不处理
// 与 Promise 一致, 掉到最近的一个 catch 中
async function baz() {

  omg.a.b;
  const bazValue = await Promise.reject('omg');
}

(async function () {
  await (async function () {
    const fooValue = await foo();
    const barValue = await bar();

    console.log(fooValue, barValue);
  })();

  // await 表达式类型
  await (async function () {
    const a = await 'a';
    // 等同于
    // const a = await Promise.resolve('a');

    const b = await resolveAfterNSeconds(3);

    console.log(a, b);

    try {
      const c = await Promise.reject('omg bug');
    } catch (e) {
      console.log(e);
    }
  })();

  // await 错误不 catch
  await (async function () {
    try {
      await baz();
    } catch (error) {
      console.log('await error:', error);
    }
  })();
})();
