# Virtual DOM

一个 Js Object 描述一个真实的 DOM 节点

## 特点

- 跨平台
  - 不同平台 vdom => dom 实现不同
  - 但是提供了一种抽象
- 代理 dom 操作, 有优化切入点

## 实现

### Vue2 VNode

snabbdom + vue 特性

#### snabbdom

VNode 定义

```ts
export interface VNode {
  sel: string | undefined;   // 'div#container' 标签名(带css select)
  data: VNodeData | undefined;  // dom 上面需要的信息
  children: Array<VNode | string> | undefined;  // 子 VNode
  text: string | undefined;                     // 子 document.createTextNode()
  elm: Node | undefined;      // 真实 dom 引用
  key: Key | undefined;       // key
}
```

patch 实现

```ts
  function patch(oldVnode: VNode | Element, vnode: VNode): VNode {
    let i: number, elm: Node, parent: Node;
    const insertedVnodeQueue: VNodeQueue = [];
    for (i = 0; i < cbs.pre.length; ++i) cbs.pre[i]();

    if (!isVnode(oldVnode)) {
      oldVnode = emptyNodeAt(oldVnode);
    }

    // 相同就 patch update
    if (sameVnode(oldVnode, vnode)) {
      patchVnode(oldVnode, vnode, insertedVnodeQueue);
      // 实际方式 patchVnode 
      // updateChildren/api.setTextContent
      // addVnodes/api.setTextContent
      // removeVnodes
    } else {
      // 不同就 new
      elm = oldVnode.elm!;
      parent = api.parentNode(elm) as Node;

      createElm(vnode, insertedVnodeQueue);

      if (parent !== null) {
        api.insertBefore(parent, vnode.elm!, api.nextSibling(elm));
        removeVnodes(parent, [oldVnode], 0, 0);
      }
    }

    for (i = 0; i < insertedVnodeQueue.length; ++i) {
      insertedVnodeQueue[i].data!.hook!.insert!(insertedVnodeQueue[i]);
    }
    for (i = 0; i < cbs.post.length; ++i) cbs.post[i]();
    return vnode;
  };
```

#### vue VNode

新增了一些和 Vue 相关的特性

```js
  componentOptions: VNodeComponentOptions | void;
  componentInstance: Component | void; // component instance
  parent: VNode | void; // component placeholder node

  // strictly internal
  raw: boolean; // contains raw HTML? (server only)
  isStatic: boolean; // hoisted static node
  isRootInsert: boolean; // necessary for enter transition check
  isComment: boolean; // empty comment placeholder?
  isCloned: boolean; // is a cloned node?
  isOnce: boolean; // is a v-once node?
  asyncFactory: Function | void; // async component factory function
  asyncMeta: Object | void;
  isAsyncPlaceholder: boolean;
  ssrContext: Object | void;
  fnContext: Component | void; // real context vm for functional nodes
  fnOptions: ?ComponentOptions; // for SSR caching
  devtoolsMeta: ?Object; // used to store functional render context for devtools
  fnScopeId: ?string; // functional scope id support
```



















## virtual dom 优化

1. 需要合并对 virtual dom 的操作, virtual dom 操作一次, 需要计算一次并且 render virtual dom 一次
2. 合并 DOM 操作达到减少 DOM 操作, 减少页面 render( 最糟糕的情况下, 每次操作 DOM 都会引起浏览器重新 render)
