// 当解析器发现代码中调用 eval()方法时，它会将传入的参数当作实际的 ECMAScript 语句来解析，然后把执行结果插入到原位置
var str = 'console.log("123")';
eval(str);

var str1 = '123';
var b = eval(str1);
console.log(typeof b);



function foo(str) {
  eval(str);
  console.log(c);
}

foo('var c = 4;');




