// 类型断言
// 一个定义为any的对象 知道当前 context 下的 类型
let aaa: any = 'heheda';
(aaa as string).charAt(1);
(<string>aaa).length;
