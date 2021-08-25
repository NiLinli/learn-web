# form

- 改变 input.value 不会触发 input change 事件
- 模拟操作 focus()/click() ... **除 submit() 外**, 都会触发对应事件

## form 元素

### field

`formElem.elements` HTMLFormControlsCollection

- array-like 访问, 按照先后顺序排列
- key(name 对应) 访问 NodeList or Element

### submit

#### 浏览器默认

##### Enter 提交

1. 在相应表单控件(在 textarea 中除外)拥有焦点的情况下, 这个就可以确定是哪个表单
2. 点击 Enter 键提交表单

##### click 与 submit

- click 先, submit 后(不确定)
- submit 的相关操作应该写到 submit 事件当中

##### submit()

模拟提交行为不会触发 submit 事件，需要在模拟提交方法中单独调用一次 submit 事件 callback

#### Ajax 提交

- 组合数据提交/模拟浏览器默认数据格式提交
- 模拟 Enter 键提交

### reset

`reset()` 会触发 reset 事件

## event

1. `input[type='text']`
  
 
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

## input

- focus/blur
- change: blur + value 发生改变
- input(ie9+) or onpropertychange(ie9-)
- keydown/keyup  mobile partial supported
  - charCode 0  -> decimal(十进制) number 类型
  - keyCode 小写识别为大写  -> decimal(十进制) number 类型
  - 扫码枪 keydown -> keypress -> keyup(chrome)
- ~~keypress~~ deprecated + mobile unsupported
  - keyCode 正确识别大小写
  - charCode 正确识别大小写
- select: 选中文本
  - setSelectionRange() 选中文本

### number

- 引导数字键盘
  - IOS 可以切换, weired in iOS
  - Android 可以切换, 不能阻止 . 输入
- maxlength 无效

弊端:

1. value 如果不为数字，`input.value` 会为 `''`
2. 但是页面上面会有显示
3. `input.value` 为空，无法通过 input 过滤用户输入，消除怪异点
4. `keydown` ios 不支持, 也没法过滤

总结: 尽量不要使用

#### tel

- 引导电话键盘
  - IOS 不能输入小数，并且不可切换
  - Android 可以输入小数
- maxlength 有效
- tel 即使粘贴了非数字, value 和显示也是相对应的

正整数 + 小数(不能保证) => 正整数

#### inputmode 方案

- `<input type="text" inputmode="decimal">`  小数(可能带正负号)
- `<input type="text" inputmode="numeric">`  整数(可能带正负号)

负数不能确保

## radio

## checkbox

## select

- selectedIndex 选中的索引
- options 所有 option 的合集
    - option.text
    - option.value

操作：

1. 增加 option
2. 移除 option

## range

ie10+

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

## 表单验证

覆盖 75-85% 的前纯端验证比较合适, 其他的使用 ajax 验证, 原因

1. 代码量太大
2. 业务逻辑(验证规则)转移到前端

## 组件化

建立一个表单模型/状态 来操作表单状态

Model -> View
View -> Model

### React

受控表单

- 将 HTML Form 中的内部状态 **更新到** React state
- 使得 HTML Form 受到 React 的控制

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