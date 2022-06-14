# 状态管理

数据流动 + 视图更新组合

## 数据流动管理

- MV\*
- Flux

### MV\*

- Service
- Model
- Controller/ViewModel/...

规避

- 合理拆分控制 Service + Model 作用范围
- 通过编码规范使得 数据流动清晰

### Flux

强调的是单一 store 对应多个 view  
并且变更 store 方式单一可记录

## 视图更新管理

数据变化 => 视图变化

### Reactive 响应式

- Mobx
- Vue State

透明的函数式响应编程 TFRP  
Transparent Functional Reactive Programming

### Immutable 不可变

- Redux

状态 函数式编程思想

diff  

- immutable 只需要对比 reference
- mutable 需要遍历

实现方式

- Object.freeze 定义 + shadowCopy 去修改
- immutable.js 结构共享 - 新旧数据共享子结构
