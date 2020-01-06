interface StringArray {
    [index: number]: string;
}

let stringArr: StringArray = ['a', 'b', 'c'];

interface ReadOnlyStringArray{
    readonly [index:number]:string;
}

let readonlyArr:ReadOnlyStringArray= ['a','b'];
// readonlyArr[1] = '2'; // error

// 数字索引的返回值 必须是 字符串索引返回值 类型的子类型
class Animal1 {
    name: string;
}
class Dog extends Animal1 {
    breed: string;
}

interface Okay {
    [x: number]: Dog;
    [x: string]: Animal1;
}