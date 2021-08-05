# css & js

## webpack

### webpack css

webpack loader 处理 css  
只是文件的处理, 写在 js 当中, 但是和 js 没有什么关系

- style-loader + css-loader => style 标签
- style-loader + file-loader => link 标签
- mini-css-extract-plugin/extract-text-webpack-plugin + css-loader => link 标签

### css preprocessor

预处理器阶段

- scss-loader
- less-loader

### postcss

插件系统

可以让 css 支持一些新的特性
类似于 js 之余 babel

### css module

- 模块化
- css 与 js 进行文本交互能力

```js
import $style from './index.css';

var h1 = document.createElement('h1');
h1.className = $style.title;
```

#### 建立一个映射

```json
{
  "title": "SWiD94XDvuJcjZD1tcWy"
}
```

#### 改变 css 样式类名

```js
.title {
  font-weight: 800;
  font-size: 25px;
  color: darksalmon;
}

// 改变后
.SWiD94XDvuJcjZD1tcWy {
  font-weight: 800;
  font-size: 25px;
  color: darksalmon;
}
```

#### 替换 js 中类名

```js
var h1 = document.createElement('h1');
h1.className = 'SWiD94XDvuJcjZD1tcWy';
```

#### 达到模块化的作用

#### 扩展

除了 className, 还可以通过 `:export` 导出其他的字符串在 `$style` 对象

```css
:export {
  pColor: darksalmon;
}
```

```scss
$pColor: darksalmon;
:export {
  pColor: $pColor;
}
```

### css in js

css in js 阶段  

不是通过 webpack + loader 处理 js 中的 css, 通过写组件

#### 组件化 css

1. 写组件
2. 计算组件中的样式
3. 将样式插入到 head 中 style 标签里面

所以是吧 css 写在 js 里面通过计算得出和拆分样式

#### 优点

- 组件化思考 css
- js => css 传值
- 适合没有 css 概念的平台, 比如 RN
