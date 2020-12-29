// 描述
// 带有任意数量其它属性, 例如 字典数据结构 或者是 懒得描述所有结构
// 数组索引

// 数组
interface StringArray {
    [index: number]: string;
}

let stringArr: StringArray = ['a', 'b', 'c'];

interface ReadOnlyStringArray {
    readonly [index: number]: string;
}

let readonlyArr: ReadOnlyStringArray = ['a', 'b'];

// 对象
interface Fruit {
    name: string;
}

interface Apple extends Fruit {
    breed: string;
}


interface Okay {
    // 数字索引和其他索引的返回值 必须是字符串索引返回值类型的子类型
    [x: number]: Apple;     // 数字
    [x: string]: Fruit;     // 字符串
    ok: Fruit;
}

let okay: Okay = {
    ok: {
        name: ''
    },
    // 匹配到 [x: string]: Fruit 上面去了 ???
    // 123: {
    //     name: '',
    //     breed: ''
    // }
}


interface NotOkay {
    name: string;
    age: number;
    [propName: string]: string | number;
}

let notOkay: NotOkay = {
    name: '',
    age: 18,
    otherProp1: 123,
    otherProp2: 'wahaha',
}
