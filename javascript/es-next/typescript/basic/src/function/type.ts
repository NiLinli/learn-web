// 可选参数 type
function foo(name: string, age?: number): void { }

// 剩余参数 type
function bar(name: string, ...restParams: number[]) { }

foo('nixixi');
bar('nixixi');
bar('nixixi', 1, 3, 4, 5, 5);