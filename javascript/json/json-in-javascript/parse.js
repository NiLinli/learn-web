const foo6 = {
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

const strFoo6 = JSON.stringify(foo6);

// reviver function(fliter)
function reviver(key, value) {
    switch (key) {
        case 'model':
            return 'b-box';
        case 'obj':
            return undefined;
        default:
            return value;
    }
}

console.log(JSON.parse(strFoo6, reviver));

// 还原控制空白和缩进
const strFoo6_4 = JSON.stringify(foo6, null, 2);
const strFoo6_Char = JSON.stringify(foo6, null, '- - -');

console.log(JSON.parse(strFoo6_4)); // 控制缩进的可以还原

try {
    console.log(JSON.parse(strFoo6_Char));
} catch (error) {
    console.log(error.message); // 还原不了 SyntaxError: Unexpected number in JSON at position 2    
}

// Error
// parse Error
const not_a_JSON_string = "nixixi";

try {
    const o = JSON.parse(not_a_JSON_string);
} catch (e) {
    console.log(e.message); // Unexpected token i in JSON at position 1
}