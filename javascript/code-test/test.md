# 测试

代码总体需要满足以下几点

1. 正常功能测试
2. 边界测试 (循环，递归边界)
3. 负面测试 (非正常值，极值/非法输入类型)

## 测试风格

- 语言描述风格
- 测试流程侧重点

### TDD

Test-Driven Development 测试驱动开发

测试描述: 关注结果对比

### BDD

Behavior-Driven Development  行为驱动开发

BDD 致力于排除 TDD 可能会造成的问题, TDD 开发流程的补充

测试描述: 使用动词使得描述看起来像句子, 关注行为特性, 帮助软件开发

## 测试组件

测试框架会预组合一套, 也可以自由组合

### test runner

测试执行器

- Jest testRunner
- Mocha
- @playwright/test

### assert

断言: 条件为 false 就抛出错误/给出提示, true 通过

- expect
- assert
- ...

### e2e

自动化测试库

## 单元测试

白盒测试 代码时自己写的, 知道内部运行情况  

- function
- fe component(render function) fe-framework/*
- ...

Node/Browser 环境运行

### jest

概念

- describe 将相关的 test 放在一起
- test/it  测试代码的具体实现
- expect 检查值和匹配起是否匹配
- 匹配器
- mock function
- mock module 引入

## e2e 测试

黑盒测试  
end-to-end 端到端自动化测试, 基于不同平台测试  
fe-platfrom/* 各个平台不同

## 性能测试
