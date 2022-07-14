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

layout tree

js 更新 DOM 只会更新 Render Tree, 可以读取到 DOM 正常的值 ,但是不会 paint

会在 js 执行的 task 中的
也有可能在 paint 的task 中

## Paint 

Main thread 遍历 layout tree 去创建 paint records

Paint & Composite 就是 render 操作
render 操作和 js 执行互斥  
UI block 就是指 main thread 被 js 执行长时间占用, 未执行 render 操作 Render tree 不一定没有更新

## Composite

知道了 layout tree + paint records, 将 ui 绘制到 viewport 上面

1. Update Layer Tree: main thread 遍历 layout tree 生成不同的 layer
2. Composite Layer: 将页面上面的内容分成多个 layers, 单独 rasterizing, 然后组合

Compositing 完成是不需要通知 Main Thread 的, 所以不会一直占用 Main Thread  
Paint 以及之前的操作是会占用 Main Thread 直到完成, 所以只是单纯的 Compositor, 性能表现比较好

### Raster Thread

每个 layer 创建一个  
rasterizing: 栅格化, 将图形变成一个个 tile(瓦片), 将 tile 存到 GPU Memory 中

### Compositor Thread  

生成 compositor frame

1. 收集 tile information called draw quads
2. 创建一个 compositor frame
3. 通过 IPC 把 compositor frame 发送到 GPU process

处理 input event(不是特质表单中的 input event, 指页面上因为用户交互生成的事件)

1. browser process 将事件告知 renderer process(compositor thread)
2. compositor thread 将 input event 告知 main thread

## load

资源加载完成
没有资源加载时候, 可能在 layout 之后完成   
有资源加载的话, 一般在多次 paint 之后  
可以保证的是 Render Tree 生成, 可以操作 DOM 与网络资源  

## reflow & repaint

- reflow: js 执行完后 re-style & layout => render tree
- force-reflow: 在执行 js 的过程中去 reflow, reflow 的过程被插入到 js 的执行过程中
- repaint: paint 过程

reflow 会在 js 执行完成后合并执行(浏览器优化)
force-reflow 产生的原因是改变了 DOM, 又去获取 DOM 属性, 导致必须在 js 执行过程中强制 reflow, 无法优化

- repaint 改变 css (不影响布局的 CSS background-color, border-color,visibility)
- reflow 元素的布局和几何属性改变时就会触发


理论上: 一个 function 中修改 n 次 能够引发 render 的 dom 属性, 就会引起 n 次 render
现实: 是浏览器一般会做优化, 会缓存起来一次性 render


- 例如一个 position 设置为 absolute/fixed 的元素的更改只会影响其本身和其子元素，而 static 的元素变化则会影响其之后的所有页面元素
- 更改多个 style 的时候, 通过添加 class 而不是直接修改每一个样式来操作


不要 read
不要 read write
减少 read & raf read

## animation


