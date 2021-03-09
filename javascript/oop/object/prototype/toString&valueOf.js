// 运算时
// 1. 先调用 valueOf
// 2. 再调用 toString

// valueOf 默认返回值的本身, 不过会被重写
var timestamp = (new Date()).valueOf(); // 返回值为 number(特例)
var arr = [1, 2, 3, 4, 5].valueOf(); // 返回值是对象本身
console.log(/x/.valueOf());

// console.log(null.valueOf()); // error
// console.log(undefined.valueOf()); // error

console.log('------------xxxxx-------------')

// valueOf 无法运算，调用 toString
// toString -> 返回值都为字符串

// console.log(null.toString());  // error
// console.log(undefined.toString()); // error

console.log('nilinli'.toString());
let num = 123;
console.log(num.toString());
console.log(true.toString());

console.log([1, 2, 3, 4].toString());
console.log({ a: 1 }.toString()); // '[object Object]'
console.log((new Date()).toString()); // 'Thu Mar 01 2018 10:14:33 GMT+0800 (中国标准时间)'
console.log(/x/.toString()); // '/x/'

let func = function () {
    console.log('func');
}
console.log(func.toString());


// 实例
let a = {
    i: 2,
    toString: function () {
        return this.i++;
    }
};

if (a == 2 && a == 3 && a == 4) {
    console.log('success');
}