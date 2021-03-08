// chatCodeAt()  -> 给定位置的那个字符对应的字符编码
// es6 扩展 codePointAt() -> 识别超过连个字节的字符 32

let stringObj = '𠮷abckefg';

console.log(stringObj.charCodeAt(0));
console.log(stringObj.charCodeAt(1));

console.log(codePointAt(stringObj, 0));
console.log(codePointAt(stringObj, 1));
console.log(stringObj.codePointAt(0));
console.log(stringObj.codePointAt(1)); // 通过索引只能正确识别第一个字节

function codePointAt(string, position) {
  if (this == null) {
    throw TypeError();
  }

  var length = string.length;
  
  // 变成整数
  var index = position ? Number(position) : 0;
  if (index != index) {
    // better `isNaN`
    index = 0;
  }

  // 边界
  if (index < 0 || index >= length) {
    return undefined;
  }

  // 第一个编码单元
  var first = string.charCodeAt(index);
  var second;
  if (
    // 检查是否开始 surrogate pair
    first >= 0xd800 &&
    first <= 0xdbff && // high surrogate
    index + 1 < length // 下一个编码单元存在
  ) {
    second = string.charCodeAt(index + 1);
    if (second >= 0xdc00 && second <= 0xdfff) {
      // low surrogate
      // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      return (first - 0xd800) * 0x400 + second - 0xdc00 + 0x10000;
    }
  }
  return first;
}
