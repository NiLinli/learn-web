// partial function - bind
// 1. 绑定 this
// 2. partial left

const oldFunc = function (a, b, c) {
    return this.x + a - b + c;
}

const newFunc = oldFunc.bind({
    x: 9
}, 1, 2);

console.log(newFunc(2));


Function.prototype.bindOmg = function (object, ...args) {
    var self = this; // 指向实例函数
    return function (...moreArgs) {
        return self.call(object, ...args, ...moreArgs);
    }
}

const newFuncOmg = oldFunc.bindOmg({
    x: 9
}, 1, 2);
console.log(newFunc(2));