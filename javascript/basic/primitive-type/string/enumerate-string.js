const texts = String.fromCodePoint(0x20BB7) + '你好123';


// 默认两个字节的 utf-8 码为一个长度
for(let i = 0; i < texts.length; i++) {
  console.log(texts[i]);
}

console.log(texts.split(''));

console.log('-- Iterator --');
for(let text of texts) {
  // ES6 为 String 添加了 Iterator 接口
  console.log(text);
}