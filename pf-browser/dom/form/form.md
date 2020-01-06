# form

## form 元素

获取了 form 元素

- `submit()` 模拟点击 submit button
- `reset()` 模拟点击 reset button
- `serialize` 模拟表单提交序列化表单元素

### submit

浏览器 Enter 键默认操作：

1. 在相应表单控件(在 textarea 中除外)拥有焦点的情况下, 这个就可以确定是哪个表单
2. 点击 enter 键提交表单
3. 按回车键就可以提交该表单

形式：

- button[type='submit']
- input[type='submit']

click 与 submit 事件先后:

- 触发click事件,大部分浏览器click事件先响应(但是不能确定)
- 所以对submit的相关操作应该写到submit事件当中

## event

1. `input[type='text']`
    - focus
    - blur
    - change: 失去焦点后触发
    - key 三件套
        - keypress deprecated 并且手机端不支持
        - keydown
        - keyup
    - input ie9+ (onpropertychange IEonly)
    - select
2. `input[type='number']`
    - number 的 value 也为 string 类型, 并不是 number 类型
    - 在非英文模式下, 小数点输入有问题, 因为是句号
3. `input[type='radio'] / input[type='checkbox']`
    - change
    - click
4. `select`
    - change
    - input
5. `input[type='file']`
    - change
    - input
6. `form`
    - reset(默认行为为重置)
    - submit(默认行为为提交)

注:

1. 操作 DOM 改变 value 属性, 不会触发 `text` `radio` `select` `checkbox` input 或者 change 事件
2. `submit()` 方法不会触发 submit 事件, `click() focus() reset() select()` 都会触发相应的事件

## field (form-control)

`formElem.elements`

1. array-like, 按照先后顺序排列
2. name 属性为 key 访问 ( name 相同的集合 NodeList )

## range

ie10+

## select

- selectedIndex 选中的索引
- options 所有 option 的合集
    - option.text
    - option.value

操作：

1. 增加 option
2. 移除 option

## file

HTML ATTR

- multiple    是否一次选择多张
- accept      可以接受的类型(只是用来引导, 用户可以轻易绕过)

DOM PROP

1. files(array-like)
    - length
    - file
        - name (文件名称, 不含路径)
        - size (byte 64-bit)
        - type (MIME 不确定为'')
2. value `files[0].name` 意义不大( 每次操作完成后, 清空 value 的值, 可以达到选择同一个文件触发 change 或者 input 事件的效果)

定制样式

1. 隐藏 input 元素
2. 调用 input 元素的 `click()` 元素方法( 或者使用 label )

拖拽上传图片

读取 file (返回  URL 赋值给 image.src)

1. `FileReader.readAsDataURL` ie 10
2. `URL.createObjectURL` ie 10 11

[其他 file 技术](https://developer.mozilla.org/zh-CN/docs/Web/API/File/Using_files_from_web_applications)

## textarea

textarea 可以输入 '\n'

## 键盘事件

键盘, 扫码枪

键盘码

事件触发顺序 chrome keydown -> keypress -> keyup

event.value

- keydown & keypress 输入之前的变量
- keyup 输入之后的变量

keyCode & charCode：十进制数表示形式, number 类型

- keydown
    - keyCode 小写识别为大写
    - charCode 0
- keypress
    - keyCode 正确识别大小写
    - charCode 正确识别大小写
- keyup
    - 与 keydown 结果相同

应用

- keydown
    1. 阻止默认行为忽略输入
- keypress
    1. 阻止默认行为忽略输入
- keyup
    1. 达到 maxLength 自动切换焦点

## 操作文本

1. 设置选中文本 setSelectionRange
2. 获取选中文本(一般响应 select 事件)

## 表单验证

覆盖 75-85% 的前纯端验证比较合适, 其他的使用 ajax 验证, 原因

1. 代码量太大
2. 业务逻辑(验证规则)转移到前端

实现的效果

- 在 DOM 元素中显示错误信息
- 监听事件去验证 input 的 keyup , blur , click 等, submit 的 submit 事件

## 管理表单

建立一个表单模型/状态 来操作表单状态

Model -> View
View -> Model

## 组件化

1. 内部状态 HTML Form State 根据用户的输入改变
2. React State / Angular Model

### React

- 受控表单

需要将 HTML Form 中的内部状态 **更新到** React state 中, 使得 HTML Form 受到 React 的控制

HTML Form state --> 构造一个可以访问用户输入表单数据的函数 onchange --> React State

### Angular

区别: 如何处理和管理表单和表单数据方面有所不同

- 响应式表单
  - 表单是应用中的关键部分
- 模板驱动表单
  - 简单的表单时非常有用

- 视图中捕获用户输入事件
- 验证用户输入
- 创建表单模型
- 修改数据模型
- 并提供跟踪这些更改的途径