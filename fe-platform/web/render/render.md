# render

## CRP

critical rendering path 关键渲染路径   
critical	英[ˈkrɪtɪkl] 关键的 批判的

## Parse HTML

### DOM tree

### CSSOM tree



Painting 之前: 防止 FOUC
JS 执行之前

Render blocking resource


### script

Render blocking resource

- type="text/javascript" 
  - 会作为脚本解析
  - 默认不用写
- 其他不认识的类型 eg: type="text/html"
  - 会被 parse 到 DOM 中, 但是不会被解析
  - 外部的引用不会被加载, 直接忽略

禁用了 script, 就会 parse noscript 标签
```html
<noscript>
  <p>This page requires a JavaScript-enabled browser.</p>
</noscript>
```





### DOMContentLoaded

Parse HTML 完成, 形成 DOM
script & css 也是 DOM 中的节点, 也需要处理完

script & css 处理
js 可能会操作 DOM, 依赖于 css render, js 加载依赖于 css 加载完成 

- 无 js: js 不会 block, css 也不会 block
- 有 js: js + css block

优化性能 DOMContentLoaded 操作 DOM, 不 block js, async 加载

## Layout

### Render tree

js 更新 DOM 只会更新 Render Tree, 可以读取到 DOM 正常的值 ,但是不会 paint

## Paint & Composite

Render tree 绘制到页面上面  
Paint 和 js 执行互斥  
UI block 一般是因为没有办法执行, 未执行 paint, Render tree 不一定没有更新

## load

资源加载完成
没有资源加载时候, 可能在 layout 之后完成   
有资源加载的话, 一般在多次 paint 之后  
可以保证的是 Render Tree 生成, 可以操作 DOM 与网络资源  

## reflow & repaint

- reflow: js 执行完后 re-style & layout => render tree
- force-reflow: 在执行 js 的过程中去 reflow
- repaint: paint 过程

reflow 会在 js 执行完成后合并执行(浏览器优化)
force-reflow 产生的原因是改变了 DOM, 又去获取 DOM 属性, 导致必须在 js 执行过程中强制 reflow, 无法优化
