class Octopus {
    readonly name: string;

    // 必须在构造函数中赋值
    constructor(name: string) {
        this.name = name;
    }
}

// instance 的该属性不可以更改
let dad = new Octopus('Man with the 8 strong legs');
// dad.name = 'aaaa'; // error

