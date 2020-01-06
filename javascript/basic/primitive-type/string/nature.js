// 0 或多个 16位Unicode 组成的 2个字节

console.log('a\nb'); // 换行

console.log('name\tage\tcountry'); // t-> table 表格形式打印
console.log('nilinli\t18\tCHN');

console.log('abc\r123'); // 回车到头 然后输入123覆盖

console.log('\x41'); // asic xnn nn为16进制代码

console.log('\u03a3'); // unicode   unnnn H
console.log('\uD842\uDFB7'); // es6  增加4个字节 32位  4个字节的utf-8

// 2. 特点：不可变性 immutable
// 字符串在内存中创建了，就不会改变了
// 重新赋值，先销毁原来变量，再创建一个新的变量
let lang = 'Html ';
let arr = [
    'Java ', 'Javascript ', 'C ', 'Python ', 'TypeScript ',
    'Java ', 'Javascript ', 'C ', 'Python ', 'TypeScript ',
    'Java ', 'Javascript ', 'C ', 'Python ', 'TypeScript ',
    'Java ', 'Javascript ', 'C ', 'Python ', 'TypeScript ',
    'Java ', 'Javascript ', 'C ', 'Python ', 'TypeScript ',
    'Java ', 'Javascript ', 'C ', 'Python ', 'TypeScript ',
    'Java ', 'Javascript ', 'C ', 'Python ', 'TypeScript '];

let now1 = Date.now();
for (let i = 0; i < 10000; i++) {
    arr.forEach((value) => {
        lang += value;
    });
}

console.log(`for time = ${Date.now() - now1}`); // 不要大量做这件事，效率低

// 优化(减少重新赋值的次数)
let lang2 = 'Html5 ';
let now2 = Date.now();
for (let i = 0; i < 10000; i++) {
    lang2 += arr.join('');
}
console.log(`arr.join time =${Date.now() - now2}`);

// 3. length
let stringObj = new String('hello world'),
    han1 = '𠮷a', // 0xD842 0xDFB7 32bit 4个字节（两个字节16bit为一个长度）
    han2 = '倪林立';

// length
console.log(`
    stringObj.length = ${stringObj.length},
    han1.length = ${han1.length},
    han2.length = ${han2.length}
`);
