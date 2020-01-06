// 1 定义 2 赋值
// 参数属性一步到位：参数属性通过给构造函数参数添加一个访问限定符来声明 public private protected

class PP1 {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age + 1;
    }
}

class PP2 {
    age: number;
    constructor(
        public name: string,
        age: number
    ) {
        this.age = age + 1;
    }
}

let pp1 = new PP1('nixixi1', 18);
let pp2 = new PP2('nixixi2', 18);

console.log(pp1);
console.log(pp2);