// 加密等过程操作对象是 二进制数
// 文件内容(存储): 文件携带编码信息, 和内容, 可以通过 Buffer 读取出二进制数
// 编程中变量(内存/基础数据类型): 内存变量存储方式不明确, 需要转化为对应编码的 二进制数

const { enc } = require('crypto-js');

console.log(enc.Utf8.parse('倪西西')) 
console.log(enc.Utf8.stringify(enc.Utf8.parse('倪西西')))

// utf16le 文件加密


// Node 通过 Buffer 处理 字符串数据类型