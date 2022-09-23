// 多选匹配

console.log('three tournaments won'.match(/(?:tour|to|tournaments)/));

// 尝试顺序, 成功就停止检查
// 1. tour
// 2. to
// 3. tournaments


// 顺序会造成很多问题

const regexp1 = /(?:0?[1-9]|[12][0-9]|3[01])/;
const regexp2 = /([12][0-9]|3[01]|0?[1-9])/;

const string = 'Jan 31 is a nice day';

console.log(string.match(regexp1));
console.log(string.match(regexp2))
