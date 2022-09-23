// bind 绑定函数的 this 值, 和参数值, 返回一个新的函数
Function.prototype.bindCopy = function (thisArg, ...initArgs) {
  const ctx = this;

  if (typeof this !== 'function') throw new TypeError('xxxxxx');

  const slice = Array.prototype.slice;
  return function () {
    return ctx.apply(thisArg, initArgs.concat(slice.call(arguments)));
  };
};

let p1 = {
  name: 'nixixi',
  age: 18,
  sayName() {
    setTimeout(
      function () {
        console.log(this.name);
      }.bind(this),
      0
    );
  },
  sayAge() {
    setTimeout(
      function () {
        console.log(this.age);
      }.bindCopy(this),
      0
    );
  },
};

p1.sayName();
p1.sayAge();
