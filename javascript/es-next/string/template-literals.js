export const str1 = `this a template literals`;

// Multi-line strings 多行
const str2 = 'string text line 1\n ' +
    'string text line2';

const str3 = `string text line1
string text line2
`;

console.log(str2);
console.log(str3);


// tag
// 添加了 tag 
// 找到对应的参数解析模版字符串
// 返回值不一定要是 string 类型

const person = 'nixixi';
const age = 18;

function myTag(strings, personExp, ageExp) {
    const str0 = strings[0]; // that 
    const str1 = strings[1]; //  is a 

    console.log(strings);

    let ageStr;
    if (ageExp > 99) {
        ageStr = 'centenarian';
    } else {
        ageStr = 'youngster';
    }

    return str0 + personExp + str1 + ageStr;
}

const output = myTag `that ${person} is a ${age} `;

console.log(output);