// 变成模块内部声明了
// declare let b: string;

declare global {
  let b: string;
}

export interface Baz {
  key1: string;
  key2: number;
}
