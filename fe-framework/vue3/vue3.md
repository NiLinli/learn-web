# vue3

## 不兼容更新

### 应用层级

- Vue 全局 Vue2.0 配置, 测试/多实例不能区分配置等, Vue3.0废弃
  - 去掉了类 EventEmitter 实现
- app Vue3.0 配置
- component

### 全局 API

全局 API 引用方式改变, 符合 tree shaking 规范

### 实例属性

Vue3.0 规范

- 组件实例上面都是 $ 开头
- context 都不包括 $
  - setup
  - 函数式组件

- 去掉了 $children, 用 $ref 代替
- 去掉了 $destroy()
- 去掉了 $set $delete

### 生命周期更改

- beforeDestroy => beforeUnmounted
- destroyed => unmounted

### filter 移除

- component 范围内通过 method/computed
- global 通过在 app.config.globalProperties.$filters 挂载方法

## ts 支持

defineComponent(options) 定义组件可支持 options 里面类型推断

## composition 组合

### 组件 options

以 data/computed/watch/method/lifecycle 等配置区分代码, 组织逻辑, 关注点在这些 options 上面  
缺点：状态和状态有关的操作分离在各个配置中，业务代码大了之后难以维护

### 组合式 API

以状态出发, 将每个状态相关的 data/computed/watch... 组织在一起, 关注点在状态上面  
解决上面的缺点
