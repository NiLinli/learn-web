function* foo(x, y) {
  return x * y;
}

const it = foo(6, 7);   // 非常规函数调用, 返回一个 iterator 对象(控制 generator)

const res = it.next();

console.log(res.value)