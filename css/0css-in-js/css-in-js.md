# css in js

## webpack

将 css 写在 js 之中, 经过处理后放入 style 标签或者导出为文件, 放入 link 标签, 本质还是 css

### webpack css

- style-loader + css-loader  => style 标签
- style-loader + file-loader  => link 标签
- mini-css-extract-plugin/extract-text-webpack-plugin + css-loader => link 标签

### css preprocessor

- scss-loader
- less-loader

#### 全局导入 $variable

### postcss

插件系统

可以让 css 支持一些新的特性
类似于 js 之余 babel

### css module

css 与 js 进行文本交互

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

### styleComponent

这个阶段才是 css in js
