'use strict';

function mixArgs(first, second) {
    console.log(arguments.length);

    console.log(arguments[0] === first);
    console.log(arguments[1] === second);

    first = 'c';
    second = 'd';

    console.log(arguments[0] === first);
    console.log(arguments[1] === second);
}

mixArgs('a', 'b');

// 严格模式下：
// arguments 始终存储的初始值，不会随着参数的变化发生改变
// 非严格模式下：
// 会发生改变（垃圾定义）