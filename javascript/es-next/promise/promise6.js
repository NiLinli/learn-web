// doSomething --> doSomethingElse --> doThirdThing
// 链式调用
// 1. 顺序执行
// 2. 后面依赖前面的 state
doSomething(function (result) {
    doSomethingElse(result, function (newResult) {
        doThirdThing(newResult, function (finalResult) {
            console.log('Got the final result: ' + finalResult);
        }, failureCallback);
    }, failureCallback);
}, failureCallback);

doSomething()
  .then(function (result) {
    return doSomethingElse(result);
  })
  .then(function (newResult) {
    return doThirdThing(newResult);
  })
  .then(function (finalResult) {
    console.log('Got the final result: ' + finalResult);
  })
  .catch(failureCallback);