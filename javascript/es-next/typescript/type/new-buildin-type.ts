let arr: number[] = [1, 2, 3, 4]; // 数组

// tuple 元组 (数组)
// 已知元素数量
// 已知类型
let tuple: [number, string, void, any] = [1, 'a', undefined, 'hehe'];


// any
let a: any = {
    sayHello: function () { }
};

a.sayHello();

let b: Object = {
    sayHello: function () { }
};

// b.sayHello(); // fail


// never
// 1. 函数死循环
// 2. 抛出错误
function infiniteLoop(): never {
    while (true) {
    }
}



