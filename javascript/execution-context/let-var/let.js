// 变量在 { } 中执行完了就被销毁了

if (true) {
    let b = 2; // let 块级作用域有效({}包裹的称为一块,块内定义的变量只在块内有用)
}

console.log(`b:${b}`); // ReferenceError: b is not defined   b 执行完就被销毁了
