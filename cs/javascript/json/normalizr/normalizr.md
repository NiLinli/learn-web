# normalizr

## 问题

json 嵌套太深, 引发

1. 嵌套的数据意味着 reducer 逻辑嵌套更多
2. 不可变的数据在更新时需要状态树的祖先数据进行复制和更新

## 解决

JSON 数据扁平化处理
相关的数据都放入所定义的 schema 中, 通过 id 去访问

## 术语

- schema 计划, 图表
- entity 实体 (也就是会放入到 entities 数据库中东西)
- definition 定义
  1. 嵌套的 entities 需要定义
  2. 其他未定义的数据都会被拷贝, 不需要单独定义

## 返回值

- entities 类数据库
- result   JSON 数据存储后的结果
  - 已存储到 entities 数据库中的数据 (id + schema?)
  - 未处理的数据

## 代码

- demo00 demo
- demo01 schema.Entity
- demo02 schema.Array
- demo03 schema.Object
- demo04 schema.Union
- demo05 schema.Values