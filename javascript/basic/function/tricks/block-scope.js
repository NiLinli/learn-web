// 模拟block scope
// 使用立即执行函数包裹
(function () {

})();

function outputNumbers(count) {
    (function () {
        for (var i = 0; i < count; i++) {
            console.log(i);
        }
    })();

    console.log(i);
}

// outputNumbers(3);

function foo1() {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i);
        }, 0);
    }
}

// foo1();

function foo2() {
    for (var i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i);
        }, 0);
    }
}

// foo2();

function foo3() {
    for (var i = 0; i < 3; i++) {
        (function (i) {
            setTimeout(() => {
                console.log(i);
            }, 0);
        })(i);
    }
}

foo3();