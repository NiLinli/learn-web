var num = 123;

function f1() {
    console.log(num);
}

function f2() {
    console.log(num);
    var num = 456;
    f1(); // 调用 非定义
    console.log(num);
}

f2();