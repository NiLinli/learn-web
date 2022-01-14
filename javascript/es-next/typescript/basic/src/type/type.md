# type

## 类型

命名 object type

type 别名

## 声明

变量声明有初始值并且类型单一可以不用显示申明类型, ts 会自动推导  
推导不出来的情况, 会认为是 any (noImplicitAny: true 默认隐式推断 any 会报错)  
最佳实践: 可以考虑减少显式类型的声明
