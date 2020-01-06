// void
// 1. 求出 操作数(表达式)的 值
// 2. 忽视这个值
// 3. return undefined

// 作用：
// 希望运行表达式, 但是消除表达式的 side effect(不要表达式的返回值)

// 不希望 doSomething 的返回值赋值给 href
// <a href="javascript:void doSomething()"></a>

// arrow function 中避免产生副作用
[1,2,3].forEach(v => void foo(v))

function foo(a) {
  console.log(a + 1);
}