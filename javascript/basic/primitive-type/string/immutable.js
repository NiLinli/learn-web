// 不可变性 immutable
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