
// chatCodeAt()  -> 给定位置的那个字符对应的字符编码
// es6 扩展 codePointAt() -> 识别超过连个字节的字符 32

let stringObj = '𠮷abckefg';

console.log(stringObj.charCodeAt(0));
console.log(stringObj.charCodeAt(1));

console.log(codePointAt(stringObj, 0));
console.log(stringObj.codePointAt(0));


function codePointAt(string, position) {
  if (this == null) {
    throw TypeError();
  }

  var size = string.length;
  // 变成整数
  var index = position ? Number(position) : 0;
  if (index != index) { // better `isNaN`
    index = 0;
  }
  // 边界
  if (index < 0 || index >= size) {
    return undefined;
  }
  // 第一个编码单元
  var first = string.charCodeAt(index);
  var second;
  if ( // 检查是否开始 surrogate pair
    first >= 0xD800 && first <= 0xDBFF && // high surrogate
    size > index + 1 // 下一个编码单元
  ) {
    second = string.charCodeAt(index + 1);
    if (second >= 0xDC00 && second <= 0xDFFF) { // low surrogate
      // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
    }
  }
  return first;
};