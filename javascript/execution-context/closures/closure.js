// closure

const addTo = (x) => {
  return (y) =>  x + y;
}

let addToFive = addTo(5);

// addTo 调用之后没有被 gc , x 被返回函数需要
console.log(addToFive(3));

// dereference function
addToFive = null; 


function wait(a) {
  setTimeout(() => {
    console.log(a);
  }, 3000)
}

wait(3);      // 形成 closure


// Closures are functions that have access to variable from another function's scope (可以访问函数作用域里面的变量)
// 形成: 
// 1. 函数的返回值为 function (或者内部 function 赋值给外部对象了)
// 2. 函数中监听了事件

// 原因:
// variables that are in parent scopes are not garbage-collected as long as the function itself is retained.
