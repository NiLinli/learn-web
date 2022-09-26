// void(return type)
// js 实际返回 undefined 的情况, 都可以用 void 表示
const noop = (): void => {
  return;
};
const noop2 = (): void => {};
const noop3 = (): void => {
  return undefined;
};

// 在 ts 中 void 和 undefined 不同
// 对于 type 定义的 voidFunc, 实际返回任何类型的值都可以实现(上面的字面量定义必须完全兼容)
type voidFunc = () => void;
const f1: voidFunc = () => true;
const v1: void = f1();

// callbackfn:
// 期待 (value: number, index: number, array: number[]) => void
// 实际 (value: number) => number
// 期待兼容实际
const dist = [];
[1, 2, 3].forEach((el) => dist.push(el));

export {};
