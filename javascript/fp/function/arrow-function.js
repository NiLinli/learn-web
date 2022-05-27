function doSomething(callback) {
    console.log(callback());
}

// 1.简写 ()=>{}
doSomething(() => {
    return 'heheda'
});

// 2. 只有一行语句 (去掉return，自动return)
doSomething(() => 'heheda');

// 特例：不能这样返回对象字面量,因为括号当作函数块解析了
doSomething(() => {
    name: 123
});

// 3. 只有一行语句，不返回值
doSomething(() => void 'heheda');


// 1. this 指向: 箭头函数不会创建自己的this 所以在箭头函数内的 this 和外面的一样: callback
// 2. 没有 super 
// 3. 没有 arguments

function foo() {
    console.log(this.id);
    setTimeout(() => {
        console.log('id:', this.id);
    }, 100);
}

foo.call({
    id: 42
});
// id: 42