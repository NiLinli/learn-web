let num: number = 1;
let str: string = 'abc';
let bool: boolean = true;

let unuseable1: undefined = undefined;
let unuseable2: null = null;
let unuseable: void = undefined; 


function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}


// any 可以访问各种方法
let anybalabala: any = 4;
anybalabala.haha();