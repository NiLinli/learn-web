const { observable, autorun, action } = require('mobx');

const orderLine = observable.object({
  price: 0,
  amount: 1,
  get total() {
    return this.price * this.amount; // 依赖于 price
  },
  // 一般情况下, 不推荐使用 set
  set total(total) {
    this.price = total / this.amount; // 从 total 中推导出 price, 逆向衍生
  }
});

orderLine.total = 1000;
console.log(orderLine.total);
