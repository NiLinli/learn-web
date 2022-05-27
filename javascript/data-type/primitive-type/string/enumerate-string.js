const texts = String.fromCodePoint(0x20BB7) + '你好123';

// 默认两个字节的 utf-16 码为一个长度
for(let i = 0; i < texts.length; i++) {
  console.log(texts[i]);
}

console.log(texts.split(''));

for(let text of texts) {
  // ES6 为 String 添加了 Iterator 接口, babel 可以识别
  console.log(text);
}