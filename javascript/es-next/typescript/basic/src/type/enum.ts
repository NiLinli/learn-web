// enum (枚举) -> 使用枚举我们可以定义一些带名字的常量

// 数字枚举
// 自增长
// 增长基于上一个 enum 值
// 第一个值默认为 0 开始
enum Direction1 {
    Up,
    Down,
    Left,
    Right
};

console.log(Direction1.Down); // 1

// 字符串
enum Direction21 {
    Up = 'up',
    Down = 'down',
    Left = 'left',
    Right = 'right'
}

console.log(Direction21.Down);

// 异构 不推荐这样做
enum BooleanLikeHeterogeneous {
    No = 0,
    Yes = 'Yes'
};

// 枚举值定义
enum FileAcess {
    // 常量 编译时候求值 ts 表达式子集
    None,           // 0
    A,              // 1
    B = 2008,
    C,              // 2009
    Read = 1 << 1,  // 2
    Write = 1 << 2, // 4
    ReadWrite = Read | Write,   // 6
    // 运行时候求值
    G = '123'.length        // '123'.length
}

// 枚举在运行时候真实存在, 不是编译时候的代码替换, 和 macro 不同
// var E;
// (function (E) {
//     E[E["X"] = 0] = "X";
//     E[E["Y"] = 1] = "Y";
//     E[E["Z"] = 2] = "Z";
// })(E || (E = {}));
enum E {
    X, Y, Z
};

function funcEnum(obj: any) {
    console.log(obj);
}

funcEnum(E);

// 生成的代码包含正向映射和反向映射
console.log(E[2]);

// 常量枚举 macro 相同, 编译时候删除
const enum M {
    X, Y = X + 2, Z
};

const mArr = [M.X, M.Y, M.Z];

// 外部枚举
// 没有初始化方法时候, 当作被计算的而不是常量
declare enum ExtenalEnum {
    A = 1,
    B,
    C = 2
}
