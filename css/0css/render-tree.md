# render

1. 生成 DOM tree
2. 生成 CSSOM tree
3. 两者结合生成 render tree
    - 和 DOM tree 很像, 但是有些不一样, 比如 hidden 的元素就不在 render tree 中
    - render tree 构造完成后, 每个 element 都知道自己有哪些 css 属性
4. layout/reflow , 每一个 render object 都会被计算大小, 位置, 然后放在相应的布局中
    - [视图化](https://www.youtube.com/watch?v=dndeRnzkJDU)
5. painting...

上述过程的初始化和更新都是单向的

reflow => painting  
只 painting 不会导致 reflow
