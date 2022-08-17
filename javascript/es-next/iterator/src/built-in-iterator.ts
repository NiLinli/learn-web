import { travel } from './travel';

const obj = { a: 1 };
const arr = [1];

// Object 没有迭代器
obj[Symbol.iterator]();

arr[Symbol.iterator]();
