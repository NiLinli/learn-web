# component

## props

- vm.$props
- vm.$attrs

## state

- vm.$data
- Vue.set/vm.$set
- Vue.delete/vm.$delete
- Vue.watch/vm.$watch

## event

- vm.$listeners

## slot

承载分发内容的出口  
将自定义内容(出口)的定义放在父级别, **默认**父级模版的所有 state 都是父作用域

- slot
- name slot 多个出口
- scoped slot 访问子级别 state

## lifetimes

初次渲染

- beforeCreate
- created
- beforeMount
- mounted

更新

- beforeUpdate
- updated

移除

- beforeDestory
- destroyed

## render

render(jsx/h) 和 template 之间的较量

### 函数式组件

来自 react , 接受 props, 返回 view, 不需要实例化一个 instance

context

- data: render 函数第二个参数(包括 props 和 listeners ...)
- slots() 返回的 Map
- children 返回的 List

