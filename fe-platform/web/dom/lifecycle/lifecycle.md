# lifecycle

## JavaScript in Web Browsers

- We now move on to JavaScript as used within web browsers, commonly called client-side JavaScript.
- This chapter provides that context

- Some pages present static information and can be called documents.
- Other web pages feel more like applications than documents.

- web documents
- web applications
  - ajax
  - data storage
  - graphics APIs
  - geolocation
  - history management
  - background threads

- how JavaScript code is embedded and executed within HTML documents
1. compatibility
2. accessibility
3. security

web browsers is simple operating systems.
OS

1. organize icons (which represent files and applications) on the desktop and in folders
2. runs multiple applications in separate windows
3. defines low-level APIs for networking, drawing graphics, and saving files.

Browser

1. organize bookmarks (which represent documents and web applications) in a toolbar and in folders|
2. displays multiple documents (or applications) in separate tabs
3. define low-level APIs for networking (Chapter 18), saving data (Chapter 20), and drawing graphics


we can define web applications as web pages that use JavaScript to access the more advanced services 
(such as networking, graphics, and data storage) offered by browsers.

## window

- The Window object is the main entry point to all client-side JavaScript features and APIs.
- It represents a web browser window or frame, and you can refer to it with the identifier window.

## script in HTML

embedded style

 A programming philosophy known as unobtrusive JavaScript argues that content (HTML) and behavior (JavaScript code) should as much as possible be kept separate.

- inline
- external file
- HTML event handler attribute
- JavaScript in URLs(javascript: protocol specifier 类似于 http: 协议)
  - You can use a javascript: URL anywhere you’d use a regular URL
  - the href attribute of an `<a>` tag
  - the action attribute of a `<form>`

script attribute

- src
- async/defer
- charset
- type/language(deprecated)
  - text/javascript 默认不用写

type 的使用:

1. type 类型浏览器不识别的话, parses the element into DOM, 但是不会显示到页面上面
2. 可以使用 non-executable type 在 HTML 存储文本数据, 使用 DOM 操作获取这些数据
3. 只能使用 inline 不能使用 external files , 不然会被忽略(不会被下载)

async/defer 使用:

1. 默认 sync block 执行
2. async/defer 立即下载, 延迟执行
3. 告知浏览器
  - 下载 async/defer 的脚本的时候, 浏览器可以继续 parse DOM
  - 不使用 document.write()

defer

1. defer 的 scripts 按照顺序执行
2. 执行时机 - 其他 DOM 和 script 已经加载完成, 已经准备好操作 DOM 元素
3. 先于DOMContentLoaded执行 (有的浏览器并不会依照这个规则)

async(HTML5 优先支持)

1. async 的 scripts 按照加载完成的先后的执行, 所以不按照顺序执行
2. 不会 block 文档解析, 下载完成后就会尽快执行
3. 无法确定在DOMContentLoaded之前或者之后

总结:

1. 文件执行顺序无法保障
2. 与 DOMContentLoaded 顺序无法保障
3. 唯一确定的是都在 load 事件之前
4. 没有什么用 - -

## noscript

有些浏览器禁用了 script, 就会 parse `<noscript></noscript>` 中的内容
这里面的内容可以提醒用户开启 script

## Single threaded

1. 执行 callback 的时候, 浏览器停止响应用户输入(UI)
  - callback 不能过于复杂 -> 浏览器不响应(甚至 crash)
  - HTML5 web worker 解决上述问题

## DOMContentLoaded

形成完整的 DOM tree 就会触发(即解析完 HTML 标签), 第一轮 event loop 中

## load

DOMContentLoaded + CSSOM tree(css加载完成) -> 图片等外部文件加载完毕 -> layout -> paint -> load

1. 在初次周期中, 动态加载的外部资源也会在 load 之前触发
2. 下一轮周期中动态加载的资源无法确定是否会在 load 之前触发


readystatechange 在 load 之后触发, 目前没有什么作用

## image load

图片加载完成后, 图片未加载之前都可以绑定

- In this case, it’s important to assign the event before assigning the src property
- Note that the element need not be added to the document for the image download to begin; it begins as soon as the src property is set.

应用：

1. 已经存在的直接添加 load 事件
2. 新建的先添加事件, 后添加 src
3. 使用 img 标签判断背景图是否加载完毕

触发事件后:

1. layout 已经完成, 可以获得各种实际参数


## load

- Most web applications need notification from the web browser to tell them when the document has been loaded and is ready to be manipulated. 
- For the window object, the load event fires when the entire page has been loaded, including all external resources such as images, JavaScript files, and CSS files. 

DOMContentLoaded

Firefox -> HTML5 standardized (ie9)

- The DOMContentLoaded event is fired when the document has been loaded and parsed and any deferred scripts have been executed.
- Images and async scripts may still be loading, but the document is ready to be manipulated. 


readystatechange 在 load 之后加载


> Generally speaking, any events that occur on the window can be assigned via attributes on the
<body> element, because there is no access to the window element in HTML. This really is a hack
for backwards compatibility but is still well-supported in all browsers. It is recommended that you
use the JavaScript approach whenever possible.