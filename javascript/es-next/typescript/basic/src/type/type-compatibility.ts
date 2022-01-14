// 结构兼容性： 结构子类型 -> 结构类型是一种只使用其成员来描述类型的方式
// 相反： 名义（nominal）类型
interface Named {
    name: string;
}

class People {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}


let person1: Named;
person1 = new People('nixix');  // C#或Java中，这段代码会报错，因为Person类没有明确说明其实现了Named接口


// 1. 如果x要兼容y，那么y至少具有与x相同的属性 （属性等于或者多余才能赋值）
let x: Named;
let y = { name: 'nixixi', age: 18 };
x = y;  // y 中有 name 属性, 所以可以视作 Named 类型 赋值给 x

function greet(x: Named) {
    console.log(x);
}

greet(y);


// 2. 判断函数参数( 参数等于或者小于才能赋值 )
let funcX = (a: number) => 0;
let funcY = (a: number, b: string) => 0;

// funcX = funcY;  // funcY 有两个必须参数, funX 没有
funcY = funcX; // 多了一个参数, 忽略参数 -> js 中调用经常忽略传入参数 -> 合理

// 3. 判断函数返回类型(与 1 相同)
let funcXX = () => ({ name: 'nixixi', age: 18 }),
    funcYY = () => ({ name: 'xxx' });

// funcXX = funcYY;
funcYY = funcXX;


// 3. enum 
enum Something1 {
    a, b, c
}
enum Something2 {
    a, b, c
}

let someThing = Something1.a;
someThing = 2; // 数字类型的 enum 与数字类型相同
// someThing = Something2.a;  // 不同枚举类型不相通


// 4. class 
// 与字面量和接口类似
// 只会比较 实例属性   ， static 和 construtor 都不会被比较
// 仅限于public pretected 和 private 没有可比较性
class Nll1 {
    name: string;
    constructor(name: string, age: number) {
        this.name = name;
    }

}

class Nll2 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

let nll1 = new Nll1('nilinli', 18);
let nll2 = new Nll2('nilinli');

nll1 = nll2;
