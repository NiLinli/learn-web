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







## Single threaded

1. 执行 callback 的时候, 浏览器停止响应用户输入(UI)
  - callback 不能过于复杂 -> 浏览器不响应(甚至 crash)
  - HTML5 web worker 解决上述问题

## DOMContentLoaded

形成完整的 DOM tree 就会触发(即解析完 HTML 标签), 第一轮 event loop 中

## load

DOMContentLoaded + CSSOM tree(css加载完成) -> 图片等外部文件加载完毕 -> layout -> load

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