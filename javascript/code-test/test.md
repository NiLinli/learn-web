# 测试

代码总体需要满足以下几点

1. 正常功能测试
2. 边界测试 (循环，递归边界)
3. 负面测试 (非正常值，极值/非法输入类型)

## 单元测试

以某种定义为一个 unit, 可以是 function component  
预期就是: 输入输出 1 对 1

- **Jest**
- Mocha
- Karma + Jasmine(Angular)

## e2e 测试

end-to-end 端到端(功能), 使用 selenium 或者 webdriver 等工具, 模拟用户操作

- Cypress
- **Nightwatch**
- Protractor(Angular)

## jest

概念

- describe 将相关的 test 放在一起
- test/it  测试代码的具体实现
- expect 检查值和匹配起是否匹配
- 匹配器
- mock function
- mock module 引入
