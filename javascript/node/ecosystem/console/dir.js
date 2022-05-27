// 在控制台中显示指定JavaScript对象的属性

const obj = {
  a: {
    b: {
      c: {
        d1: 456
      }
    }
  },
  a1: 123
};

// 打印层级固定
console.log(obj);
console.log(obj.toString());

// 打印层级不固定
console.dir(obj, {
  depth: 4    // null 为无限递归
});