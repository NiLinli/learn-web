function foo(n) {
  function bar() { return 123; }

  return bar() * n;
}

console.log(foo(6));