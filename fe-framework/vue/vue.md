# Vue 2.x

## 源码分析

[vue-analysis](https://ustbhuangyi.github.io/vue-analysis/)

## vue-cli

- chromedriver `npm install chromedriver --chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver`
- node-sass `npm i node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/`

### mode

```js
const shouldForceDefaultEnv = process.env.VUE_CLI_TEST && !process.env.VUE_CLI_TEST_TESTING_ENV;

const defaultNodeEnv = mode === 'production' || mode === 'test' ? mode : 'development';

// process.env.NODE_ENV == null 不设置才会根据 vue cli mode 赋值
if (shouldForceDefaultEnv || process.env.NODE_ENV == null) {
  process.env.NODE_ENV = defaultNodeEnv;
}
```

| vue cli mode | NODE_ENV    | webpack mode |
| ------------ | ----------- | ------------ |
| development  | development | development  |
| test         | test        | test         |
| production   | production  | production   |
| other        | development | development  |

vue cli mode 关联:

- 环境 mode
  - vue cli mode 与环境 mode 即使值一样也没有任何联系
  - 但是都是 config 中的 mode 配置项
- 关联 NODE_ENV => webpack mode **取消关联, 显式在 npm script 中设置 NODE_ENV**
