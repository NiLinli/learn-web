function m1() {
  console.log('m1');
}

function m2() {
  console.log('m2');
}

// 完全没有模块化
// 1. 污染了全局变量，可能发生命名冲突
// 2. 模块成员看不出直接关系
m1();


// 思路
const moduleObj = {
  _count: 0, //私有变量写法
  m1: function () {
    console.log('moduleObj m1');
  },
  m2: function () {
    console.log('moduleObj m2');
  }
};

moduleObj.m1(); // 调用时，调用对象的属性

// 解决: namespace
// 缺点: 
// 1. 暴露所有的模块成员, 无法做到只导出部分变量
// 2. 暴露出来的模块成员能够被外部改写
// ...
moduleObj.m2 = () => {
  console.log('moduleObj m3')
}

moduleObj.m2();

// 模块模式