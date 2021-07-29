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

### postcss

插件系统

可以让 css 支持一些新的特性
类似于 js 之余 babel

### css module

### styleComponent

这个阶段才是 css in js

### js 中访问 css 变量

