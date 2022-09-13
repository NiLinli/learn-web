// 知道值的类型, 但是属性名不确定

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

interface NotOkay {
  // 不要写两个 index signature
  [x: string]: Fruit;
  // ok: Apple;
  ok: Fruit; // 必须能够兼容 index 属性
}

let notOkay: NotOkay = {
  ok: {
    name: '',
  },
  '123': {
    name: '',
  },
};

interface Okay {
  [propName: string]: string | number;
  name: string;
  age: number;
}

let okay: Okay = {
  name: '',
  age: 18,
  otherProp1: 123,
  otherProp2: 'wahaha',
};
