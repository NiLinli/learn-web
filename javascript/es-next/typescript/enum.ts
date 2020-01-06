// enum (枚举) -> 使用枚举我们可以定义一些带名字的常量

// 1 数字枚举
// 自增长， 0 开始
enum Direction1 {
    Up,
    Down,
    Left,
    Right
};

console.log(Direction1.Down); // 1

enum Direction2 {
    Up = 1,
    Down,
    Left,
    Right
};

console.log(Direction2.Down); // 2

enum Direction3 {
    Up = 4,
    Down,
    Left = 1000,
    Right 
}

console.log(Direction3.Down); // 5
console.log(Direction3.Right); // 1001

// 2 字符串
enum Direction21 {
    Up = 'up',
    Down = 'down',
    Left = 'left',
    Right = 'right'
}

console.log(Direction21.Down);