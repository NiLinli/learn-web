# require.js

## Module Id

不用写全
html 所在的路径 + baseUrl + ModuleId + 补全的.js

## 模块加载路径

1. 确定 baseUrl
    - data-main
    - requirejs.config 设置
    - 当前 html 路径
      - .js 结尾
      - / 开头
      - 含有 http
2. baseUrl + 模块名

## define module

- 传入 obj
- 传入 函数
  - 函数返回值为 obj
  - 函数返回值为 函数

- define 定义的模块可以被人加载 -- 定义模块
- require 定义的不行  -- 加载其他模块

## 配置 requirejs

```javascript
require.config({
    baseUrl: "/another/path",
    paths: {
        "some": "some/v1.0"   // 配置模块和路径
    },
    waitSeconds: 15，  // 等待时间
    shim: {}  // 不符合amd 规范写法的转换
});
```