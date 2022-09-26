// narrowing 收紧类型判断
// Control flow analysis ts 流程分析
// type guard ts 能够识别一些特定的语法
// 通过判断一些常见的类型以及 falsy trusy 对类型的过滤

// typeof narrowing
function printAll(strs: null | string | string[]) {
  // if (typeof strs === 'object') {
  //   // string[] | null
  //   // strictNullChecks: true
  //   for (const s of strs) {
  //     console.log(s);
  //   }

  // truthiness narrowing
  if (strs && typeof strs === 'object') {
    // string[] | null
    // strictNullChecks: true
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === 'string') {
    console.log(strs);
  } else {
    // do nothing
  }
}

// truthiness narrowing
function multiplyAll(values: number[] | undefined, factor: number) {
  if (!values) {
    return values;
  } else {
    return values.map((x) => x * factor);
  }
}

// equality narrowing
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // x, y 都为 string
    x.toUpperCase();
    y.toUpperCase();
  }
}

// in operator narrowing
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };

function move(animal: Fish | Bird) {
  if ('swim' in animal) {
    return animal.swim();
  }

  return animal.fly();
}

// instanceof narrowing
function logValue(x: Date | string) {
  if (x instanceof Date) {
    x.toUTCString();
  } else {
    x.toUpperCase();
  }
}

// Assignments narrowing
let x = Math.random() < 0.5 ? 10 : 'hello world!'; // number | string
x = 10; // number
x = '123'; // string
// x = true; // not okay

// ts 暂时分析不了的情况
// type predicates 类型预测
// 适用于函数本是判断类型的情况
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

let pet!: Fish | Bird;

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}


export {};
