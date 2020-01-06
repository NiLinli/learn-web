let s1 = 'some text';  // 1
let s2 = s1.substring(2); // 2

// 执行到 2 的时候 (模拟 或者说等同于)
// 1. create an instance of the String type
let s1Temp = new String('some text');
// 2. call the special method on the instance
s2 = s1Temp.substring(2);
// 3. destroy the instance
s1Temp = null;


// lifetime difference
// primitive instance -> stays in memory until it goes out of scope 
// primitive wrapper types -> one line of code before they are destoryed.

var num = 1111;
num.color = 'blue';
console.log(num.color);  // undefined

