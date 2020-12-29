// 函数
interface searchFn1 {
  (source: string, subString: string): boolean
}

let mySearch: searchFn1 = function (source, subString) {
  let result = source.search(subString);
  return result > -1;
}

// 可以合并声明
interface User0 {
  name: string
}

interface User0 {
  age: number
}