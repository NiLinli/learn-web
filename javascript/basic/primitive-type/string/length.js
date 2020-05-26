let stringObj = '𠮷abc';

console.log(stringObj.length);
console.log(getCharLength(stringObj));

// length 表示的只是字符串连续内存空间的 unit 个数

// 获取 char 的个数
function getCharLength(string) {
  let count = 0;

  for (const char of string) {
    count++;
  }

  return count;
}