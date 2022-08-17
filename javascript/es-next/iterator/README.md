# Iterator

Python's style -- for/in loop

ES2015 添加了两个 **协议**

## 可迭代协议

The iterable protocol

```ts
interface Iterable<T> {
    [Symbol.iterator](): Iterator<T>;
}
```

集合去实现 Iterable  
Symbol.iterator 为 createIterator 方法  
Array/Map/Set/String/TypedArray 已经实现 Iterator 接口  

## 迭代器协议

The iterator protocol

```ts
interface Iterator<T, TReturn = any, TNext = undefined> {
    // NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.
    next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
    return?(value?: TReturn): IteratorResult<T, TReturn>;
    throw?(e?: any): IteratorResult<T, TReturn>;
}
```

next 方法等同于 next & hasMore


## Iterator protocol 应用

实际操作的是对象上面的迭代器

- for...of
- 解构
- 扩展运算符

