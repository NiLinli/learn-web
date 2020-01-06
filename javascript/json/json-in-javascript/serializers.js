// JSON
console.log('typeof JSON = ', typeof JSON); // object -> 内建对象

// JSON.stringify 
// 1. 输出字符串没有空白
// 2. prototype 全部忽略
// 3. 属性中 function + undefined + Symbol 会被忽略
let foo = {
    a: 2,
    b: function () {}, // function  被忽略
    c: undefined, // undefined 被忽略
    d: Symbol() // Symbol    被忽略
};

console.log(JSON.stringify(foo)); // {"a":2}

// 4. array 中被忽略后, 填充 null , 保持 array 形状
let arr = [foo.a, foo.b, foo.c, foo.d];
console.log(JSON.stringify(arr)); // [2,null,null,null]

// 5. 带有两个可选参数
//      filter 属性
//      通过 key 决定 输出 value 的值
let foo4 = {
    a: 1,
    b: "string",
    c: false
};
console.log(JSON.stringify(foo4, ['a', 'c']));

foo4 = {
    a: 1,
    b: {
        c: 2
    },
    c: 'c'
};
console.log(JSON.stringify(foo4, ['a', 'b'])); // {"a":1,"b":{}} b中嵌套的c也会被过滤掉


// 函数
// 返回number
function replacer(key, value) {
    switch (key) {
        case 'foundation':
            return value + '-omg'
        case 'model':
            return undefined;
        case 'week':
            return 7;
        default:
            return value;
    }
}

let foo6 = {
    foundation: "Mozilla",
    model: "box",
    week: 45,
    transport: "car",
    month: 7,
    obj: {
        a: '3',
        b: 5,
        c: 2
    }
};
console.log(JSON.stringify(foo6, replacer));

// 6. 控制空白和缩进
const strFoo6_4 = JSON.stringify(foo6, null, 2);
console.log(strFoo6_4);
const strFoo6_Char = JSON.stringify(foo6, null,  '- - -');
console.log(strFoo6_Char);


// Error
// stringify Error -circular structure
let foo1 = {};
foo1.b = foo1;

try {
    console.log(JSON.stringify(foo1)); // TypeError: Converting circular structure to JSON
} catch (e) {
    console.log(e.message);
}