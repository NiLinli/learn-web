# modal scroll

1. 先滚动 overlay 上面的内容
2. overlay 上面的内容不能滚动了, 就会滚动 body 里面的内容

需要达到的效果

1. body 中的内容无论如何不能滚动
2. overlay 中的内容如果溢出了, 能够滚动

方案

- 阻止 overlay 的 touchmove, 缺点是 overlay 也不能滚动
- 阻止 body 滚动 (推荐)

## 资料

- [Modal scrolling on mobile devices](https://github.com/twbs/bootstrap/issues/15852)