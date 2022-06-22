# 响应式

Vue 中有个**宽泛**的概念, 可响应的  
A 变化  => B 就会变化, 成为 A 与 B 为可响应的  

## 响应式数据

A 数据  
B 为 A 的衍生数据/观察者  
则 A 为响应式数据
通过观察者模式与数据劫持实现  

### 观察者模式

- Vue Dep -> Observable    可观察对象
- Vue Watcher -> Observer  观察者

#### init

1. observe 观察对象
2. get 数据生成响应式数据并收集依赖

#### update

1. set 之后 observe 新的数据, 保证为响应式数据(不是的就新定义为响应式数据)
2. 通知更新
3. get 数据生成响应式数据并重新收集依赖

### 数据劫持

- Vue observe method  生成 Observer
  - Vue Observer      包装需要被观察的对象, 给每一个属性生成 Observable/Dep, 与常见理解不同
    - Vue defineReactive method 让每个属性生变成一个 Observable, 遇到对象递归调用 observe

## 组件更新

父 propsData -> 子 vm._props 

1. 新建的时候会获取
2. 更新子组件的时候会更新

祖 vm._provided -> 后 vm

1. 新建的时候会获取
2. 后续不会更新

## Vue 中数据处理

### prop like

inject vm

- 响应式数据: defineReactive 所有 祖 vm._provided 到 vm 中, 未内部递归 observe
- 组件更新: 祖 vm._provided 不会更新, 所以 inject vm 也不会更新

这个地方的响应式数据只是确保 vm 上面的数据都是响应式的  
既没有祖 数据更新 set, 也不适合手动更新
 
vm._props

- 响应式数据: defineReactive 所有 父 propsData 到 vm._props 中, 未内部递归 observe
- 组件更新: 父 propsData 更新 , vm._props 也会更新, vm._props set 会可以触发组件更新

未内部递归 observe 设计存在于 祖先组件传递值给后代组件这种模式中, 祖先组件中的数据已经响应式数据处理过了, 可以收集子组件中的 watcher, 触发子组件更新

### local state

vm._data

- 响应式数据: observe vm._data



