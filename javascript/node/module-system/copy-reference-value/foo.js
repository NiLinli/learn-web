let a = 1, _b = 1;

let add_a = function() {
  a ++;
} 

let add_b = function() {
  _b ++;
}

module.exports = {
  a,                  // 输出的是一个值的 copy, 内部状态变化和外部没有什么关联
  add_a,
  set b(value) {      // mock esm
    _b = value;
  },
  get b() {
    return _b;
  },
  add_b
};