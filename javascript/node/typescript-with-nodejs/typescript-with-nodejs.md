# node wuth ts

## 痛点

每次改变 ts , 都需要编译成 js， 然后运行
解决方式: `ts-node` & `nodemon`

## 配置 typescript

typescript 安装

1. `npm i typescript -D`
2. `npm i @types/node -D`

typescript 工具安装

1. `npm i ts-node -D` 动态编译加运行
2. `npm i nodemon -D` 监听相关文件变化时候， 重新运行 ts-node

## 配置 npm script

```json
"scripts": {
    "start": "npm run build:live",
    "build:live": "nodemon --exec ./node_modules/.bin/ts-node -- ./index.ts"
}
```

## 运行

`npm run start` 

编辑 index.ts , 会有如下效果
1. nodemon 重新运行 ts-node
2. ts-node 通过 Node.js 的方式运行 编译好的 js 文件