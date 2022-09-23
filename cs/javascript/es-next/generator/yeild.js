function* foo(x) {
  let y = x * (yield);
  return y;
}

const it = foo(6);
it.next();  // begin
const res = it.next(7); // yeild in,  参数为 yeild 表达式返回值
console.log(res);

function* foo2(x) {
  let y = x * (yield 'hello');
  return y;     // 必须要有返回值, 即使是返回 undefined
}

const it2 = foo2(6);
const begin2 = it2.next();    // 第一个 next 函数始终不传递参数, 只执行到 yeild 中断, 接受其返回值
console.log(begin2);
const res2 = it2.next(7);
console.log(res2);


