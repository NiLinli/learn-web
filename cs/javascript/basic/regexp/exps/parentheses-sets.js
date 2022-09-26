// 匹配圆括号


const string = 'foo(bar(this), 3.7) + 2 * (that - 1)';

const regexp1 = /\(.*\)/;

// (bar(this), 3.7) + 2 * (that - 1)
console.log(string.match(regexp1));

// (bar(this)
const regexp2 = /\([^)]*\)/;
console.log(string.match(regexp2))

const regexp3 = /\([^()]*\)/;
console.log(string.match(regexp3))

// 正则表达式无法匹配任意深度的嵌套结构
// 只能匹配特定深度的括号嵌套
// 单层   太难看懂了...
const regexp4 = /\([^()]*(\([^()]*\)[^()]*)*\)/; 
console.log(string.match(regexp4));