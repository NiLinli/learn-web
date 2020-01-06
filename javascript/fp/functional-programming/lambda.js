//  λ 第十一个字母 -> 匿名函数
// anonymous function === lambda function

function createFunction(){
    return function(){
        console.log('function has been created');
    };
}

let newFunc = createFunction();
newFunc();



// lambda function 匿名函数
// immediate function 立即执行函数
// closure 闭包