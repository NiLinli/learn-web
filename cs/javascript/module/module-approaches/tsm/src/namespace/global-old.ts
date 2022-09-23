
// namespace
// 代码: 早期用来区分全局的变量 
// 编译出来是 closure module pattern, 在 global 对象上面添加一个 Old 变量
namespace Old {
  export interface Person {
    name: string;
    age?: number;
  }

  const name = 'old ts';
  const age = 5;

  export const old: Person = {
    name,
    age,
  };
  export function add(a: number, b: number): number {
    return a + b;
  }
}
