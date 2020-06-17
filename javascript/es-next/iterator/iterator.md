# Itetator

Python's style -- for/in loop

ES2015 添加了两个 **协议**

1. 可迭代协议(The iterable protocol)
   - 允许 JS 对象去定制其 iteratable 行为
   - 对象必须必须实现 `@@iterator` 方法, 该方法的返回值为 iterator -- `[Symbol.iterator]` 属性
2. 迭代器协议(The iterator protocol)
   - 定义了一种标准的方式来产生一个 **有限** 或 **无限** 序列的值
   - iterator 实现了 `next()` 方法
   - `next()` 方法返回值为 `{ done: boolean; value: any; }`

遵循某些约定即实现了这些 **协议** , 非 **语法** 或者 **build-in**

## interface Iterator

实现 Iterator 接口, 就可以完成遍历操作, 实例为 **可迭代对象** iterable object

1. 数据结构提供一个统一的, 简便的访问接口
2. 数据结构的成员能够按某种次序排列

Iterator 指针对象
Iterator 与本来的数据结构无关

## [Symbol.iterator]

对象上面有 `[Symbol.iterator]` 有值的即为 implement Iterator 接口

Array/Map/Set/String/TypedArray/arguments/NodeList

其他的自行 implement `[Symbol.iterator]`

## Iterator 应用

Obj implements Iterator, 可以做如下操作

1. 作为参数 import, 生成其他 Iterable Object
2. 解构
3. 扩展运算符
4. for...of
5. 直接或者间接应用 array 中的方法
