# init

```js
// src/core/instance/init.js
initLifecycle(vm);
initEvents(vm);
initRender(vm);
callHook(vm, 'beforeCreate');
initInjections(vm); // resolve injections before data/props
initState(vm);
initProvide(vm); // resolve provide after data/props
callHook(vm, 'created');
vm.$mount(vm.$options.el); // 下面为 vm.$mount 展开
```
