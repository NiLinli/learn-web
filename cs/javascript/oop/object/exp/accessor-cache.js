// Demo: cache 属性操作记录
const language = {
  set current(name) {
    // name 为用于保存尝试分配给 prop 的值的变量的一个别名
    this._log.push(name);
  },
  get current() {
    return this._log[this._log.length - 1];
  },
  _log: [],
};

language.current = 'EN'; // 调用set
console.log(language);

language.current = 'FA'; // 调用 set
console.log(language);
console.log(language.current); // 调用 get