# React

[react](https://react.docschina.org/)

版本

- v15
- v16 添加了 Scheduler
- v16.8 添加了 hooks

## package

核心包:

```json
react@16.6.1
react-dom@16.6.1
```

## create-react-app

npx

1. 自动查找当前依赖包中的可执行文件
2. 如果找不到，就会去 PATH 里找
3. 如果依然找不到，就会帮你安装(临时安装)

老方法：

```javascript
npm install -g create-react-app
create-react-app my-app
```

新方法：

```javascript
npx create-react-app my-app
// 这条命令会临时安装 create-react-app 包
// 命令完成后create-react-app 会删掉, 不会出现在 global 中
// 下次再执行，还是会重新临时安装
```

ts 支持: `npx create-react-app my-app --scripts-version=react-scripts-ts`

## 性能优化

## 改变应用数据

结果一样, 方式不同

1. 直接修改数据(修改原有对象)
2. 替换修改数据(指向新的内存空间)
    - 撤销, 重做, 时间旅行
    - 记录变化(引用发生改变即可判断发生了变化, 不用去遍历对象进行对比)

--> 纯组件 pure components

## 项目结构

- components 展示组件
- containers 容器组件
