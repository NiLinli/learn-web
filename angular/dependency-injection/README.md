# dependency injection

## 范围

1. component
    - 范围：组件及其子组件
    - 生命周期: 与注册组件相同
    - 使用建议: 较为复杂的模块都应该提供一个服务, 逻辑放在 service 当中
2. feature module
    - 范围： 普通加载-全局, 惰性模块-模块内
    - 生命周期：普通加载-永远存在, 惰性模块-
    - 使用建议：惰性模块内的服务注册于此
3. app module
    - 范围： 全局
4. @injectable 中注册到 root 或作其他会执行 tree shaking (ng v6 提供, 推荐)

## 技巧

provide 是保存的是token , useXXX 系列提供的是如何实例对象

1. 备选的类(灵活的换 token 指向的 class)
    - 注册 token 和 useClass 值不同
    - useClass 只声明一次(如果声明两次就是两个实例)
2. 别名(换的 class 单独也有位置使用了, 使用备选的类方法换 class 的话, 会导致两个单例, 所以用这个方法指向)
    - 注册的 token 指向已经存在的 token
3. 限定依赖注入范围为 host
4. 利用服务调用父组件方法 (过于麻烦, 不推荐使用)
