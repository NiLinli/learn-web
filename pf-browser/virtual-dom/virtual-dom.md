# virtual dom

- 合并 DOM 操作达到减少 DOM 操作, 减少页面 render( 最糟糕的情况下, 每次操作 DOM 都会引起浏览器重新 render)
- 跨平台

## virtual dom 优化

1. 需要合并对 virtual dom 的操作, virtual dom 操作一次, 需要计算一次并且 render virtual dom 一次
