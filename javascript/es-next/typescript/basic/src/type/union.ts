// Union Type 联合类型

// 定义
let omg: string | number | boolean;
omg = 1;
omg = 'aa';
omg = false;
// omg = [];  // not ok


function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log('Hello, ' + x.toUpperCase());
  }
}



// 1. (把值赋给联合类型) 不确定参数到底是什么类型 但是可以确定范围
function padLeft(value: string, padding: number | string) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

console.log(padLeft('Hello world', 4));
// console.log(padLeft('Hello world', true));  // 指定为 any 编译通过 运行报错-> 所以应该缩小范围





// 2. 确定一个 value 为联合类型， 进行调用

interface Bird {
    fly(): any;
    layEggs(): any;
}

interface Fish {
    swim(): any;
    layEggs(): any;
}

let obj = {
    layEggs: function () { return 123; },
    swim: function () { return 0; }
};

function getSmallPet(): Fish | Bird {
    // ...
    return obj;
}

let pet = getSmallPet();
pet.layEggs(); // okay
// pet.swim();    // errors 因为是联合类型 ， 所以能够确定的是几种联合类型共同的属性在该对象上