# 状态管理

- MV\*
- Flux
- mobx

1. 共享状态
    - Flux/Mobx 全局状态
    - MV\* 全局注册 service + Model
2. 状态改变清晰


## MV\*

- service
- Model
- controller

## Flux

## Mobx

透明的函数式响应编程 TFRP  
Transparent Functional Reactive Programming

## immutable

状态 函数式编程思想

diff  

- immutable 只需要对比 reference
- mutable 需要遍历

实现方式

- Object.freeze 定义 + shadowCopy 去修改
- immutable.js 结构共享 - 新旧数据共享子结构
