# lint

使用情景

1. webpack 打包输出过程中校验
2. husky 提交代码时候校验
3. vscode 编辑器 Extension, 例如 ESLint, TSLint 实时在编辑器上校验并且显示

## eslint

- package.json eslintConfig 字段配置
- .eslintrc 配置
- js 文件中注释配置

配置文件

- parserOptions 解析选项, 包括指定 ecma 版本等...
- env 配置环境, 可配置不同环境使用不同 plugin
- plugins 插件: 从特定的文件里抽取 js 校验, 或者其他 react/vue 代码
- rules: 规则, 默认不开启

### rules

- 0 "off" 关闭
- 1 "warning" 警告
- 2 "error" 错误

配置方式:

- 1
- [1 , options]

默认规则 + 扩展规则

配置: 一般推荐配置 eslint:recommended

## tslint

TSLint is deprecated.  
TSLint → ESLint.
