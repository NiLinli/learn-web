// es5 弊端： timeout 为 0 时候处理不了
function makeRequest1(url, timeout, callback) {
    timeout = timeout || 2000;
    callback = callback || function () { };
}

// es5 改进
function makeRequest2(url, timeout, callback) {
    timeout = (typeof timeout !== 'undefined') ? timeout : 2000;
    callback = (typeof callback !== 'undefined') ? callback : function () { };
}

// es6 
function makeRequest3(url, timeout= 2000, callback = function () { }) {}

// 后面参数引用前面的值 作为默认值
function add(a, b = a) {
    return a + b;
}

// arguments
export function mixArgs(first, second = 'b') {
    console.log(arguments.length); // 1
    console.log(arguments[0] === first); // true
    console.log(arguments[1] === second); // false

    first = 'c';
    second = 'd';

    console.log(arguments[0] === first); // false
    console.log(arguments[1] === second); // false
}

mixArgs('a');

// 与非严格模式表现相符
// 1. 改变参数的指向， 并不会影响 arguments 中数组的变化( 记录的是参数初始值 )
// 2. 默认参数相当于 改进 -> 是在函数中赋值 -> 并不在 arguments 中

