
try {
  a();    // typeError      a = undefined
} catch (error) {
  console.log(error.name);    // ReferenceError    b 不会被提升
}

try {
  b();
} catch (error) {
  console.log(error.name);
}

var a = function b () {}


// avoid declaring functions in blocks. 不同标准执行结果不同
// 1. TypeError
// 2. log 2
c();

var d = true;

if (d) {
  function c() {
    console.log(1);
  }
} else {
  function c() {
    console.log(2);
  }
}