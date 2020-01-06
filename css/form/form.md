# Form

1. 表单不算是很好布局的, 浏览器对默认样式的差异比较大
2. `form-control` input , select , radio....
3. `form-group` 或者 `input-group` 表示 input(radio, checkbox) + label 的组合

## Fieldset

fieldset 用来分组表单

- 用 `<legend>` 标记 fieldset’s heading (不同浏览器显示不同, 需要 normalize)

## label

点击 label 可以 focus 对应的 input, 两种方式

1. 把 form control 放入 label 中
2. 设置 for 与 id 对应

## outline

outline 不会影响浏览器布局, 但是浏览器表现不一致, 一般被 `border` 和 `box-shadow` 所模拟
设置 outline 不显示

1. `outline:0;`
2. `outline:none; (初始值)`


## input field 

特点： 

1. screen keyboard 会根据不同的 type 显示不同的键盘
2. 如果设置 type 浏览器不支持, 自动是被为 text, 保证 HTML 解析不会错误
3. input elements 不能为 form element的子元素(HTML5 取消了, 但是还是强烈推荐使用 p 包裹一层)
4. 每个 input 的宽度都不相同
5. 浏览器会在 input:focus 的时候设置 user agent 样式 --> outline 


## button

1. 推荐使用 button 而不是 input[type = 'button']
2. 不同浏览器 button 显示不同, 需要 normalize
3. `button`, `button:hover`, `button:active` 三种状态的样式需要设置 


## place holder

placeholder 意义是给用户一个输入例子, 一定不要把他作为 label, 因为

- 用户输入的时候, place holder 不显示
- 如果一个用户输入了一半去做别的去了, 回来不知道这项是什么

place holder 中的文字, 可以被赋予样式(没有标准的选择器, 只能写上带前缀的表达式)


## help block

1. 焦点上去的时候, 出现提示用户
2. 错误提示


## select

## checkbox/radio

checkbox/radio 的样式由浏览器定义, 如果想自定义样式, 只能采用 trick 的方式

1. fallback 机制, `:root` 保证只有新的浏览器才会应用样式, ie8- 浏览器显示浏览器样式(ie8-不支持 `:check`)
2. 隐藏 input[type = 'checkbox']
3. `:check` 和 `label` 标签模拟两种状态

示例

1. [动画效果的自定义 checkbox](https://tympanus.net/Development/AnimatedCheckboxes/)





