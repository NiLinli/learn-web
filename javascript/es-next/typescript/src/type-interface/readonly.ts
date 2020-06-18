// readonly 作用于 对象的属性
// const    作用于 变量

// readonly
interface Point {
  readonly x: number;
  readonly y: number;
}

let p: Point = {
  x: 123,
  y: 456
};

// error
// p.x = 999; 

let arr1: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = arr1;
arr1[0] = 12; 
// ro[0] = 12; // error
// arr1 = ro; // error
arr1 = ro as number[];
