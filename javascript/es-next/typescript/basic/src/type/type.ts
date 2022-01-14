// 类型运算
type StringOmg = string;  // 类型别名
type numberOrString = string | number; // 联合类型
type tupleExp = [string, number, string];   // 元组

const stringOmg: StringOmg = '123';
const numberOmg: numberOrString = 123;
const stringOmg2: numberOrString = '123';


// 类型定义
// 函数
type searchFn2 = (source: string, subString: string) => boolean;

let mySearch2: searchFn2 = function (source, subString) {
  let result = source.search(subString);
  return result > -1;
}

// 对象
type User1 = {
  name: string,
  age: number
}



// 不能合并声明
// type User1 = {
//   sex: number
// }

// 采取 & 的方式合并
type User2 = User1 & {
  sex: number
}
