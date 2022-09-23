const a = '123';

function bar() {
  s = 4;
  a = 5;
}

bar();

function foo(a, b) {
  const c = add(a, b);

  return -c;

  function add(a, b) {
    return a + b;
  }
}
