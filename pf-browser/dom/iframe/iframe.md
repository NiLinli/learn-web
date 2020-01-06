# iframe

`<iframe>` element

不同 user agent 默认 width height 不同

1. 独立的上下文(global object)
2. 可以考虑为一个独立的 JavaScript 项目

## Window Object

1. self 当前 window 引用
2. parent 包裹改 iframe 的 window 对象引用
3. self === parent 可以判断是否是 top level window

### 访问 iframe 的祖先

1. top
2. parent

### 访问后代 iframe

1. 获取 iframe
    - id
    - frames[name] 需要等待 iframe load 完成( iframe.load 或者 window.load 完成事件中获取)
2. `iframe.contentWindow` 获取 window 对象
    - frameElement 指向 iframe
3. 获取 document `f1.contentDocument || f1.contentWindow.document`

## HTML Attribute

1. sandbox(沙盒) ie9+
    - 不设置 不做任何限制
    - 设置为 `""` 限制所有
    - `allow-forms` 允许提交表单
    - `allow-scripts` 允许运行 script 代码
2. 样式相关
    - `frameborder` 等