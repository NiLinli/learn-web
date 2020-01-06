// 1 函数能做参数传入
fetch('www.google.com').then(function (res) {

});

// 2 函数能作为返回值
function funcA(a) {
    return function (b) {
        return a + b;
    }
};

// 3 函数能够赋值给变量
let funcAdd = function (a, b) {
    return a + b;
}

// first class 简而言之就是说像 number string 这些类型一样使用
// 满足这三个条件即为 first-class