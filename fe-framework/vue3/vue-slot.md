# vue slots

- 父组件定义传递 render function
- 子组件调用 render function => <slot></slot> 等同于 render function 调用

slot 上面定义的 props 称为 slotProps, 类比于 react renderProps

## template

### v2.6.0-

```vue
<template slot="default" slot-scope="slotProps">
  {{ slotProps.msg }}
</template>
```

### v2.6.0+

传递 slot 时候增加 v-slot 指令, 简化模板

```vue
<template v-slot:default="slotProps">
  {{ slotProps.msg }}
</template>
```

## script

### v2

slots 存放 vnode  
scopedSlots 存放 render function(包括 slots 中的 render function) 

#### 定义

```js
// 作用域插槽通过 scopedSlots 传递 render function
h('div', {
  {
    scopedSlots: {
      default: props => createElement('span', props.text)
    },
  }
});

// 非作用域写在 children 里面, 并指明占用哪个 slot
h('div', {}, [
  h('span', { slot: 'name' }, 'nilinli')
]);
```

```vue
<template>
  <div>
    <div v-slot="props">
      <span>{{ props.text }}</span>
    </div>
    <div v-slot:name>
      <span>nilinli</span>
    </div>
  </div>
</template>
```

#### 渲染

- $slots.header & context.slots().header => 存储的 vnode
- $scopedSlots.propContent() & context.scopedSlots.propContent() => 存储的 render function

context.children 是所有静态 slot 的集合

### v3

移除了 scopedSlots, 没有静态 vnode, 全部为 render function  
移除了 context.children  

#### 定义

[] 即为 { default: () => h.... }  
{} 表示子组件, 可以通用的定义多个 slot  
避免了 vue2 中 scopedSlots 定义与 [] 普通 slot 标记

```js
h(
  'div',
  {},
  // 定义的内容即为子组件接收到的 slots
  {
    default: (props) => createElement('span', props.text),
    name: () => h('span', 'nilinli'),
  }
);
```

#### 渲染

$slots.header() & context.slot.header()
