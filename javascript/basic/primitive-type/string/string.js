const stringObj = new String('hello world');

// 转译字符
console.log('a\nb'); // 换行
console.log('name\tage\tcountry'); // t-> table 表格形式打印
console.log('nilinli\t18\tCHN');
console.log('abc\r123'); // 回车到头 然后输入123覆盖
console.log('\x41'); // asic xnn nn为16进制代码
console.log('\u03a3'); // unicode   unnnn H
console.log('\uD842\uDFB7'); // es6  增加4个字节 32位  4个字节的utf-16
