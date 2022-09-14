// Indexed Access Types
type Person = {
  name: string;
  age: number;
  alive: boolean;
};

// type key = 'age'; 索引中的 key 是 type 而不是变量
type I1 = Person['age']; // number
type I2 = Person['age' | 'name']; // string | number
type I3 = Person[keyof Person]; // string | number | boolean

// 数组使用 number type 作为 key
const MyArray = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 38 },
];

type PersonItem = typeof MyArray[number];
type Age = typeof MyArray[number]['age'];
type Age2 = PersonItem['age'];

export {};
