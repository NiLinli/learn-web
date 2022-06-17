# mount

## JIT 和 AST $mount 的实现区别

```js
// src/platform/web/runtime/index.js
Vue.prototype.$mount = function (el, hydrating) {
  // ...
  return mountComponent(this, el, hydrating);
};

// src/platform/web/entry-runtime-with-compiler.js
const mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (el, hydrating) {
  // 1. 解析 template/el, 转换成 render function
  // ...
  const { render, staticRenderFns } = compileToFunctions(
    template,
    {
      outputSourceRange: process.env.NODE_ENV !== 'production',
      shouldDecodeNewlines,
      shouldDecodeNewlinesForHref,
      delimiters: options.delimiters,
      comments: options.comments,
    },
    this
  );
  options.render = render;
  options.staticRenderFns = staticRenderFns;

  // ...
  // 调用改写前的 mount
  return mount.call(this, el, hydrating);
};
```

## mount 的具体实现

```js
// src/core/instance/lifecycle.js
export function mountComponent(vm, el, hydrating) {
  // 没有 render 函数, 给 render 赋值一个 createEmptyVNode render function
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
  }

  callHook(vm, 'beforeMount');

  // vm._render 生成 vNode
  // vm._update 更新 DOM
  updateComponent = () => {
    vm._update(vm._render(), hydrating);
  };

  // Watcher 初始化执行 updateComponent callback
  // vm 数据变化时候, 执行 updateComponent callback
  new Watcher(
    vm,
    updateComponent,
    noop,
    {
      before() {
        // 初次执行时候, vm._isMounted 为 false, 所以不会执行 beforeUpdate 流程
        if (vm._isMounted && !vm._isDestroyed) {
          callHook(vm, 'beforeUpdate');
        }
      },
    },
    true /* isRenderWatcher */
  );

  vm._isMounted = true;
  callHook(vm, 'mounted');
}
```
