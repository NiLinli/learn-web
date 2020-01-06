// 1.1 不能说printLabel的对象实现了这个接口
// 1.2 我们只会去关注值的外形

interface LabelledValue {
    label: string;
    name?: string; // 可能存在的属性进行预定义
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

// 严格   (额外属性的检查)
// printLabel({size:10, label:'Size 10 Object'})
// Argument of type '{ size: number; label: string; }' is not assignable to parameter of type 'LabelledValue'.

// 1 它就是将这个对象赋值给一个另一个变量： 因为 myObj 不会经过额外属性检查
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

// 2 类型断言
printLabel({ size: 20, label: 'Size 20 Object' } as LabelledValue);

// 3 字符串索引签名
interface LabelledValue222 {
    label: string;
    [propName: string]: any; // 带有任意数量其它属性
}


// readonly
interface Point {
    readonly x: number;
    readonly y: number;
}

let p: Point = {
    x: 123,
    y: 456
};

// p.x = 999; 
// Cannot assign to 'x' because it is a constant or a read-only property.

let arr1: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = arr1;
// ro[0] = 12; // error!
// arr1 = ro; // error!
arr1 = ro as number[];

// readonly -> 对象的属性
// const    -> 变量




