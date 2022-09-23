// 交叉类型 与
// a & b = true: 既是 a 又是 b 类型 满足所有的属性
// 只作用于 object type

function extend<T extends Object, U extends Object>(first: T, second: U): T & U {
  let result = <T & U>{};

  for (let key in first) {
    // @ts-ignore
    result[key] = first[key];
  }

  for (let key in second) {
    if (!result.hasOwnProperty(key)) {
      // @ts-ignore
      result[key] = second[key];
    }
  }

  return result;
}

class Person {
  constructor(public name: string) {}
}

class ConsoleLogger {
  log() {
    console.log('log');
  }
}

const jim = extend(new Person('Jim'), new ConsoleLogger());
const n = jim.name;
jim.log();
