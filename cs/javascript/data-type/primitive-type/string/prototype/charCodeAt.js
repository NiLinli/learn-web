// chatCodeAt()  -> bmp
// codePointAt() -> bmp + ubmp

let stringObj = '𠮷abckefg';

console.log(stringObj.charCodeAt(0));
console.log(stringObj.charCodeAt(1));

console.log(codePointAt(stringObj, 0), stringObj.codePointAt(0));
// 通过 index 必须要是代理对开始的位置才能正确获取 code point
console.log(codePointAt(stringObj, 1), stringObj.codePointAt(1));

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
