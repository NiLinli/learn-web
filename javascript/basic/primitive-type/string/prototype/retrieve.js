// R retrieve 检索 （查）
var str = '0123456789abc';
console.log("\n    str.indexOf('5',5) = " + str.indexOf('5', 6) + "\n\n    str.includes('5') = " + str.includes('5') + "\n    str.startsWith('5',5) = " + str.startsWith('5', 5) + "   \u662F\u5426\u5728\u5934\u90E8\n    str.endsWith('5',6) = " + str.endsWith('5', 6) + "     \u662F\u5426\u5728\u5C3E\u90E8\n    str.endsWith('5',7) = " + str.endsWith('5', 7) + "\n");

// R retrieve 检索 （查）
let str = '0123456789abc';

console.log(`
    str.indexOf('5',5) = ${str.indexOf('5',6)}

    str.includes('5') = ${str.includes('5')}
    str.startsWith('5',5) = ${str.startsWith('5', 5)}   是否在头部
    str.endsWith('5',6) = ${str.endsWith('5', 6)}     是否在尾部
    str.endsWith('5',7) = ${str.endsWith('5', 7)}
`);