// 非继承过来的方法
// 1. call 参数为逗号隔开
// 2. apply 参数为数组
// 特定作用域中调用函数=== 设置函数体内this对象的值
window.sum = function(num1, num2) {
    return num1 + num2;
};

function callSum(num1, num2) {
    return sum.call(this, num1, num2);
}

function applySum(num1, num2) {
    return sum.apply(this, [num1, num2]);
}
// console.log(applySum(1, 2));

// 作用：扩充函数依赖的作用域( 对象o不需要与方法sayColor有任何耦合关系)

// 如果常规运行，只能是window下面调用

window.color = 'red';
var o = { color: 'blue' };

function sayColor() {
    console.log(this.color);
}

// sayColor(); // window.color 
// sayColor.call(window); // window.color
// sayColor.apply(o); // o.color


