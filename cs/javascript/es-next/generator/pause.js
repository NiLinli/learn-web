let x = 1;

function* foo() {
  x++;
  yield;
  console.log('x: ', x);
}

function bar() {
  x++;
}

const it = foo();
console.log(x);   // foo 并未执行

it.next();        // begin
console.log(x);   // foo 执行到 yield 暂停

bar();
it.next();        // resume, foo 继续执行

