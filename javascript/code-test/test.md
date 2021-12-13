# 测试

代码总体需要满足以下几点

1. 正常功能测试
2. 边界测试 (循环，递归边界)
3. 负面测试 (非正常值，极值/非法输入类型)

## 测试风格

### TDD

Test-Driven Development 测试驱动开发

测试描述: 关注结果对比, 白盒测试

### BDD

Behavior-Driven Development  行为驱动开发

BDD 致力于排除 TDD 可能会造成的问题, TDD 的补充

测试描述:

使用动词使得描述看起来像句子, 关注行为 特性
帮助软件开发

一般是根据行为去驱动测试用例, 黑盒测试

## 单元测试

白盒测试 知道内部运行情况  
一般 component 为 function  
结合实际情况需要引用前端框架测试 lib & 浏览器环境 lib  

- **Jest**
- Mocha

### jest

概念

- describe 将相关的 test 放在一起
- test/it  测试代码的具体实现
- expect 检查值和匹配起是否匹配
- 匹配器
- mock function
- mock module 引入

### 前端框架

fe-framework/*

### 浏览器环境

fe-platfrom/*  
借助 e2e 测试 lib  

## e2e 测试

黑盒测试
end-to-end 端到端自动化测试  
fe-platfrom/* 各个平台不同

## 性能测试
