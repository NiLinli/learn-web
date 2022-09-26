// conditional type: 结合范型 根据 传递参数得出 type

interface Animal {
  live(): void;
}

interface Dog extends Animal {
  woof(): void;
}

// SomeType extends OtherType ? TrueType : FalseType;
type Example1 = Dog extends Animal ? number : string;
type Example2 = RegExp extends Animal ? number : string;

interface IdLabel {
  id: number /* some fields */;
}

interface NameLabel {
  name: string /* other fields */;
}

// 将范型作为参数传递进行计算
type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw 'unimplemented';
}

let a = createLabel('ts');
let b = createLabel(2.8);
let c = createLabel(Math.random() ? 'hello' : 42);

// 取出 Type
// indexed access or infer

// 条件作为 indexed access 的限制
type MessageOf<T extends { message: unknown }> = T['message'];
type MessageOf2<T> = T extends { message: unknown } ? T['message'] : never;

interface Email {
  message: string;
}

type EmailMessageContents = MessageOf<Email>;
type EmailMessageContents2 = MessageOf2<Email>;
type DogMessageContents = MessageOf2<NameLabel>;

// Indexed access
// type Flatten<T> = T extends any[] ? T[number] : T;

// Infer Item: 推断在条件中, 无法通过 Indexed access, 都可以通过推断取出
type Flatten<T> = T extends Array<infer Item> ? Item : T;

type Str = Flatten<string[]>;
type Num = Flatten<number>;

type GetReturnType<T> = T extends (...args: never[]) => infer Return ? Return : never;
type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;

// 联合类型分发
type ToArray<T> = T extends any ? T[] : never;

// ToArray<string | number> = ToArray<string> | ToArray<number>
type StrArrOrNumArr = ToArray<string | number>; // string[] | number[]

// 不使用条件类型
type ToArray2<T> = T[];
type StrArrOrNumArr2 = ToArray2<string | number>; // (string | number)[]

// [] 包裹 T and any
type ToArray3<T> = [T] extends [any] ? T[] : never;
type StrArrOrNumArr3 = ToArray2<string | number>; // (string | number)[]

export {};
