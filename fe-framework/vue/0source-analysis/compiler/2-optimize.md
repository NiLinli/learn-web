# optimize

优化 AST

标记节点是否是静态节点, 静态的更新跳过

```js
export function optimize (root: ?ASTElement, options: CompilerOptions) {
  if (!root) return
  isStaticKey = genStaticKeysCached(options.staticKeys || '')
  isPlatformReservedTag = options.isReservedTag || no
  // first pass: mark all non-static nodes.
  markStatic(root)
  // second pass: mark static roots.
  markStaticRoots(root, false)
}
```


```js
function isStatic (node: ASTNode): boolean {
  if (node.type === 2) { // expression 表达式非静态
    return false
  }
  if (node.type === 3) { // text  文本类型为静态
    return true
  }
  return !!(
    node.pre    // v-pre 为静态
     || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}
```
