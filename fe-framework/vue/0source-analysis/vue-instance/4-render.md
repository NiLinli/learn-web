# render

作用: 将 vm 渲染成 vNode

初始化或者更新都是创建一个全新的 vNode

```js
// src/core/instance/init.js
initRender(vm); // 混入到 Vue.prototype
```

## `_render`

```js
// src/core/instance/render.js
export function initRender(vm: Component) {
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // _.c 用户从 template 编译而成的 render function
  vm._c = (a, b, c, d) => createElement(vm, a, b, c, d, false);
  // $createElement 用于用户写的 render function
  vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true);

  // createElement 来自于 vdom lib
  // import { createElement } from '../vdom/create-element'
}

Vue.prototype._render = function (): VNode {
  vnode = render.call(vm._renderProxy, vm.$createElement);
  // set parent
  vnode.parent = _parentVnode;
  // _render 根据 render function 创建 vnode, 并返回
  return vnode;
};
```

## Virtual DOM

vnode 用原生 js 对象去描述一个 DOM node
用来映射到真实的 DOM node  
vnode -> DOM node **这个过程可以做性能优化, 复杂操作中比直接操作 DOM 节点要强**

### createElement

```js
export function _createElement(context: Component, tag?: string | Class<Component> | Function | Object, data?: VNodeData, children?: any, normalizationType?: number): VNode | Array<VNode> {
  if (typeof tag === 'string') {
    if (config.isReservedTag(tag)) {
      // build-in tag, 例如浏览器环境下的 div, p 等 
      vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
    } else if ((!data || !data.pre) && isDef((Ctor = resolveAsset(context.$options, 'components', tag)))) {
      // component tag, 自定义的 vue Component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(tag, data, children, undefined, undefined, context);
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
}
```
