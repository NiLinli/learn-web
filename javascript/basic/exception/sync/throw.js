// 在代码中可以抛出一个自定义异常
// 1. 抛出后后续代码块不再执行
// 2. 不捕获的话 所有代码都不执行

function smile() {
    console.log(1);
    // throw 'simle with kill'; // 随意抛任何类型
    throw new UserError('simle with kill');
    console.log(2); // 不执行
}

try {
    smile();
} catch (error) {
    console.log(error);
    console.log(error.message)
}


console.log(3);


// 模拟 Error 类
// 即使不实用 name 属性, 也应该定义

class UserError {
    constructor(message) {
        this.name = 'UserError';
        this.message = message;
    }
}


// 函数中 throw 判断参数是否符合标准, 从而抛出自定义错误 - throw 的常规用法
function process(arr) {
    // 对 arr 进行判断
    if(!Array.isArray(arr)){
        throw { 
            name: 'ArgError',
            message: 'The argument is not a array'
        }
    }
    
    arr.sort();     // 这句话有可能会抛出错误

    for (var i = 0, len = values.length; i < len; i++) {
        if (values[i] > 100) {
            return values[i];
        }
    }
    return -1;
}

try {
    process(123);
} catch (error) {
    console.log(error);
}