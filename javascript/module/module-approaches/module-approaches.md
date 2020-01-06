# 模块化规范

- amd
- cjs
- esm

主要考虑 cjs/esm

## 模块导出/导入方式

- cjs 导出方式
- esm 导出方式
- 不同方式之间的互相导入

## UMD

Universal Module Definition = AMD + CommonJS + Global

[umd](https://github.com/umdjs/umd)

## ES module

import
export
export default

**静态分析**

**导出的 immutable 变量是 ref**

## CommonJs

**导出的 immutable 变量是 拷贝值**

