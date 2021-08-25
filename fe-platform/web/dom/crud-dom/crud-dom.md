# DOM

定义

- `window.document` 指向 Document 对象，Document 对象是 DOM API 中的核心
- 文档对象模型是针对 HTML 和 XML 文档的一个 API
- 将任意文档描绘了一个层次化的节点树，允许开发人员添加、移除和修改页面的某一部分

## Node

定义

- Node 接口在 JavaScript 中是作为 Node 类型实现
  **12**种节点类型都继承自 Node 类型
  - 方法
    - `element.childNodes`: 子节点,包括文本节点、元素节点等
    - `element.nextSibling`: 下一个兄弟节点
    - `element.previousSibling`: 上一个兄弟节点
    - `element.parentNode`: 父节点,父节点肯定是一个元素
- Element 类型
  - 元素节点
    - nodeType 的值为 1；
    - nodeName 的值为元素的标签名
    - parentNode 可能是 Document 或 Element；
    - 子节点可能是 Element、 Text、 Comment.....
  - 方法
    - `element.children`: 子元素,只会获取元素节点。
    - `element.nextElementSibling`: 下一个兄弟元素
    - `element.previousElementSibling`: 上一个兄弟元素  
- Document 类型
  - JavaScript 通过 Document 类型表示文档
  - document
    - 是 Document 类型的实例
    - 也是 window 的一个属性，可全局访问
    - document.body ,document.title....
  - nodeType 为 9  

- Text 类型
  - nodeType 的值为 3；
  - nodeName 的值为"#text"；
  - nodeValue 的值为节点所包含的文本；
  - parentNode 是一个 Element

> NodeList 是一种类数组对象，用于保存一组有序的节点，可以通过位置来访问这些节点

## 元素

- 元素内容

  - `element.innerHTML`作为元素的内容

- 元素结构

  - `document.createElement()`
  - `appendChild()`,`insertBefore()`
  - `n.parentNode.removeChild(n)`
  - `n.parentNode.replaceChild(b,n)` b 替换 n

- 元素样式
  - element.style 是 CSSStyleDeclaration 的实例
    - 获取的是内联样式
    - 设置值的时有用,需要带单位
    - 获取值的时基本用不到,样式一般不会写成行内样式
- 元素大小
