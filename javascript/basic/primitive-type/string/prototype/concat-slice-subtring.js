

// concat() 用+替代
let str2 = 'abc';


// substring() splice()
let str3 = '012345678';
console.log(`
    str3.substring(3,3) = ${str3.substring(3,3)}    有始无终
    str3.substring(3,4) = ${str3.substring(3,4)}
    str3.substring(3,5) = ${str3.substring(3,5)}

    str3.slice(3,3) = ${str3.slice(3,3)}  有始无终（slice片  splice粘接）
    str3.slice(3,4) = ${str3.slice(3,4)}
    str3.slice(3,5) = ${str3.slice(3,5)}

    str3.substr(3,5) = ${str3.substr(3,5)}  ie9-会有问题

`);

// trim()  es5 ie9+
let str4 = '   abcbbb  ';
console.log(`${str4.trim()}`);


// 英语中使用
let str5 = 'abcDFG23';
console.log(`
    str5.toLowerCase() = ${str5.toLowerCase()}
    str5.toUpperCase() = ${str5.toUpperCase()}
`);
