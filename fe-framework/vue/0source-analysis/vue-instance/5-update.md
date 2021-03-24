# update

patch 是 对比新旧 vNode, 找出 diff, 打上 patch, 最小限度的修改真实 DOM

```js
// src/core/instance/lifecycle.js
Vue.prototype._update = function (vnode: VNode, hydrating?: boolean) {
  const vm: Component = this;
  // 获取之前的 _vnode
  const prevEl = vm.$el;
  const prevVnode = vm._vnode;
  const restoreActiveInstance = setActiveInstance(vm);

  // 赋值新的 _vnode
  vm._vnode = vnode;

  // 将 prevVnode 和 当前的 vnode 进行对比, _vnode.elem 返回的 DOM 结构 赋值给 $el
  if (!prevVnode) {
    // initial render
    vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
  } else {
    // updates
    vm.$el = vm.__patch__(prevVnode, vnode);
  }
  restoreActiveInstance();
  // update __vue__ reference
  if (prevEl) {
    prevEl.__vue__ = null;
  }
  if (vm.$el) {
    vm.$el.__vue__ = vm;
  }
  // if parent is an HOC, update its $el as well
  if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
    vm.$parent.$el = vm.$el;
  }
  // updated hook is called by the scheduler to ensure that children are
  // updated in a parent's updated hook.
};
```

## vm.**patch**

patch 方法是平台相关的， 所以在 platforms 中实现
patch vnode 生成 vnode.elem

```js
// src/platforms/web/runtime/index.js
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// src/platforms/web/runtime/patch.js
export const patch: Function = createPatchFunction({ nodeOps, modules });
```

nodeOps 和 modules 是平台操作真实 DOM 对象的 API 封装, 所以实现交给了 platform  
vdom 下的 patch.js

1. 提供了 patch 的主要逻辑
2. 定义了 nodeOps 和 modules 的 interface

```js
// src/core/vdom/patch.js
function patch(oldVnode, vnode, hydrating, removeOnly) {
  // 递归创建当前 vnode 的 DOM 节点, 并挂载到 vm.el 上面
  createElm(
    vnode,
    insertedVnodeQueue,
    oldElm._leaveCb ? null : parentElm,
    nodeOps.nextSibling(oldElm)
  );

  invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
  return vnode.elm;
}
```
