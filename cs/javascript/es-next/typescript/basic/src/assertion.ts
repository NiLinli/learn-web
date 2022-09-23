// 类型断言
// 在 context 推导成 any
// 手动介入 指定类型
let aaa: any = 'heheda';

// 方式1
(aaa as string).charAt(1);

// 方式2
(<string>aaa).length;
