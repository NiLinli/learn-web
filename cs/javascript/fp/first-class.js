const func = () => console.log('hello fp');

// argument
setTimeout(func, 1000);

// return value
function foo(a) {
  return (b) => a + b;
}

// assign value
let bar = foo;

// first class 
// like number string 这些类型可满足上面三个条件
