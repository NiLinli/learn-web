function foo() {
  const arr = [1, 2, 3, 4, 5, 5];

  // 返回 local variable 的指针
  return arr;
}

function bar() {
  var a = 1;
  var b = 2;
}

let arr = foo();

bar();

// 指针指向的内存空间会被保留, 不会被其他占用
console.log(arr);
