# vue class

function class + 动态扩展 prototype, 并未使用静态 class

```js
// src/core/instance/index.js
function Vue(options) {
  if (
    process.env.NODE_ENV !== 'production' &&
    // 判断函数是否是构造器调用
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }

  // 通过 options 动态初始化一些实例
  this._init(options);
}

// 静态初始化 prototype, 作用: 给代码分类
initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);
```
