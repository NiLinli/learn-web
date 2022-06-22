# render

## CRP

critical rendering path 关键渲染路径   
critical	英[ˈkrɪtɪkl] 关键的 批判的

### html

DOM

### css

CSSOM

Painting 之前: 防止 FOUC
JS 执行之前

Render blocking resource

## render tree

Layout


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

### 初次加载


### DOMContentLoaded

Parse HTML 完成, 形成 DOM
script & css 也是 DOM 中的节点, 也需要处理完

script & css 处理
js 可能会操作 DOM, 依赖于 css render, js 加载依赖于 css 加载完成 

- 无 js: js 不会 block, css 也不会 block
- 有 js: js + css block

优化性能 DOMContentLoaded 操作 DOM, 不 block js, async 加载


### loaded

## UI block

未执行 paint

