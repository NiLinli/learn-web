// any
// 不知道类型 & 可以做任何事情
let a: any;
a.sayHello();

let b;
// b.sayHello(); // fail

// unknown
// 不知道类型 & 不可以做任何事情
let c: unknown;
// c.sayHello();
