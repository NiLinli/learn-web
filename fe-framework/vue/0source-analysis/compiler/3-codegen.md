# codegen

生成 render func

## 模版指令

模版指令是在编译阶段处理的，会影响代码(render function)的生成。

v-if/v-for/v-model...

## genData

根据 AST 元素节点属性构造 data 对象的字符串, 创建 Vnode 时候会使用

- listeners
- attrs
- slot
- ...

```js
export function genData (el: ASTElement, state: CodegenState): string {
  let data = '{'

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  const dirs = genDirectives(el, state)
  if (dirs) data += dirs + ','

  // key
  if (el.key) {
    data += `key:${el.key},`
  }
  // ref
  if (el.ref) {
    data += `ref:${el.ref},`
  }
  if (el.refInFor) {
    data += `refInFor:true,`
  }
  // pre
  if (el.pre) {
    data += `pre:true,`
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += `tag:"${el.tag}",`
  }
  // module data generation functions
  for (let i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el)
  }
  // attributes
  if (el.attrs) {
    data += `attrs:${genProps(el.attrs)},`
  }
  // DOM props
  if (el.props) {
    data += `domProps:${genProps(el.props)},`
  }
  // event handlers
  if (el.events) {
    data += `${genHandlers(el.events, false)},`
  }
  if (el.nativeEvents) {
    data += `${genHandlers(el.nativeEvents, true)},`
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += `slot:${el.slotTarget},`
  }
  // scoped slots
  if (el.scopedSlots) {
    data += `${genScopedSlots(el, el.scopedSlots, state)},`
  }
  // component v-model
  if (el.model) {
    data += `model:{value:${
      el.model.value
    },callback:${
      el.model.callback
    },expression:${
      el.model.expression
    }},`
  }
  // inline-template
  if (el.inlineTemplate) {
    const inlineTemplate = genInlineTemplate(el, state)
    if (inlineTemplate) {
      data += `${inlineTemplate},`
    }
  }
  data = data.replace(/,$/, '') + '}'
  // v-bind dynamic argument wrap
  // v-bind with dynamic arguments must be applied using the same v-bind object
  // merge helper so that class/style/mustUseProp attrs are handled correctly.
  if (el.dynamicAttrs) {
    data = `_b(${data},"${el.tag}",${genProps(el.dynamicAttrs)})`
  }
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data)
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data)
  }
  return data
}
```
