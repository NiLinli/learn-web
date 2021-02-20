# component

## slot

承载分发内容的出口  
将自定义内容(出口)的定义放在父级别, **默认**父级模版的所有 state 都是父作用域

- slot
- name slot 多个出口
- scoped slot 访问子级别 state

## render

render(jsx/h) 和 template 之间的较量

### 函数式组件

来自 react , 接受 props, 返回 view, 不需要实例化一个 instance

context

- data: render 函数第二个参数(包括 props 和 listeners ...)
- slots() 返回的 Map
- children 返回的 List