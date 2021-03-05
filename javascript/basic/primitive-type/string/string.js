// 0 或多个 16位Unicode 组成的 2个字节
// utf-16 为 unit, 开辟类数组空间, 所有长度相关的都是以 16bit 为一个单位
// 常见的 英文字母 中文 16 = 2 个字节
// 不常见的 中文, 其他字符 16 * 2 = 4 个字节

// length
let stringObj = new String('hello world'),
  han1 = '𠮷a', // 0xD842 0xDFB7 32bit 4个字节（两个字节16bit为一个长度）
  han2 = '倪林立';

// length
console.log(`
    stringObj.length = ${stringObj.length},
    han1.length = ${han1.length},
    han2.length = ${han2.length}
`);

// 转译字符
console.log('a\nb'); // 换行
console.log('name\tage\tcountry'); // t-> table 表格形式打印
console.log('nilinli\t18\tCHN');
console.log('abc\r123'); // 回车到头 然后输入123覆盖
console.log('\x41'); // asic xnn nn为16进制代码
console.log('\u03a3'); // unicode   unnnn H
console.log('\uD842\uDFB7'); // es6  增加4个字节 32位  4个字节的utf-16
