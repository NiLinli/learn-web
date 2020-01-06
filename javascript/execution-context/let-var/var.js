// 没有块级作用域 
// 变量声明会直接添加到当前的context中， 而不是销毁

// if for switch
if (true) {
    // 0 没有块级作用域
    var a = 1; 
}
console.log(`a:${a}`); // a:1 a被添加到了 global context 中

// 奇葩行为
// 1 变量提升
console.log(va); // undefined 变量提升
var va = '123';

// 2 可以重复声明
var b = 1;
var b = 2;
console.log(b); // 2

// 3 全局声明的变量放入 window 对象中(BOM)
var c = '132';
// console.log(window.c); // 132
