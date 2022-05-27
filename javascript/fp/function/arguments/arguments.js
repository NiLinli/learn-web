// 函数内部两个特殊对象：
// length : 参数的个数 (arity)
// prototype : Function.prototype
// arguments : 保存函数参数 并且其callee属性指向了(拥有这个arguments对象的)函数

// callee: refers to the currently running function. (废弃)
// 匿名函数递归调用
function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

function factorialByCallee(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1);
    }
}


// 函数自身的属性和方法

function sayHello(a, b, c, d) {
  
}

console.log(sayHello.length + '////')



function func1(arg1, arg2, arg3) {
    console.log(arguments); // 对象形式存储
    console.log(arg2)
}

func1(1, 2, 3); // { '0': 1, '1': 2, '2': 3 }

func1(1); // { '0': 1 }