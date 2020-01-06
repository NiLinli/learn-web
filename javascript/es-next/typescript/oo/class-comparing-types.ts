class P1 {
    constructor(
        public name: string,
        public age: number
    ) { }
}

class P11 {
    constructor(
        public name: string,
        public age: number
    ) { }
}

let p1: P1 = new P1('nixixi', 18);
let p11: P11 = new P11('nixixi', 19);

// TypeScript使用的是结构性类型系统
// 当我们比较两种不同的类型时，并不在乎它们从何处而来
// 如果所有成员的类型都是兼容的，我们就认为它们的类型是兼容的。
p11 = p1;


// protected & private 不同， 必须同一个位置声明的属性才可以
class P2 {
    constructor(
        private name: string,
        public age: number
    ) { }
}

class P22 {
    constructor(
        private name: string,
        public age: number
    ) { }
}

let p2: P2 = new P2('nixixi', 18);
let p22: P22 = new P22('nixixi', 19);

// p22 = p2; // error
