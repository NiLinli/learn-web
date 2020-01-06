// 创建一个函数 传入参数类型 与 返回类型相同
function identify<T>(arg: T): T {
    return arg;
}

// T 类型变量
// T帮助我们捕获用户传入的类型， T 之后就为这个类型

// 1. 明确类型变量的参数(复杂情况)
let output1 = identify<string>('nixixi');

// 2. 类型推论(一般情况)
let output2 = identify(1);

// 扩展使用 T 类型变量
function loggingIdentify<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}


// 泛形类
class GenericNumber<T>{
    zeroValue: T;
    add: (x: T, y: T) => T;

    constructor(a: T, b: (x: T, y: T) => T) {
        this.zeroValue = a;
        this.add = b;
    }
}

let myGenericNumber = new GenericNumber<string>('', (x, y) => { return x + y; });



// 泛型约束
interface Lengthwise {
    length: number;
}

function newLoggingIdentify<T extends Lengthwise>(arg: T): T {
    console.log(arg.length); // yes
    return arg;
}

newLoggingIdentify('123');


