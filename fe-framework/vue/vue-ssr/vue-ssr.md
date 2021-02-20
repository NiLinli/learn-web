# vue ssr

服务器与客户点的 API 差异(**初始化 page** 时候一定要注意平台差异)

## 组件钩子

1. 需要 pre fetch 数据, 然后直接渲染 而不是 mount 中发送 API 请求
   - beforeCreate 和 created 执行

## 平台 API 差异

## Vue 自定义 directive