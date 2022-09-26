function foo(i) {
    console.log(a); // undefined
    console.log(typeof b); // undefined
    console.log(typeof c); // function

    var a = 'hello';
    var b = function privateB() {

    };
    function c() {

    }
}

foo(22);


// 创建阶段
// fooExecutionContext = {
//     scopeChain: { ... },
//     variableObject: {
//         arguments: {
//             0: 22,
//             length: 1
//         },
//         i: 22,
//         c: pointer to function c()
//         a: undefined,
//         b: undefined
//     },
//     this: { ... }
// }

// 解析阶段
// 依次执行，具体赋值 
// function(){} 略过 
// var a = function(){} 赋值