# SSR

## SPA 缺点

- html 为空白页面，无法 SEO
- 首屏空白，体验不好

## SSR 方案

- 客户端正常返回
- 服务端通过构建首屏 html 返回

## vue ssr

服务器与客户点的 API 差异(**初始化 page** 时候一定要注意平台差异)

## 组件钩子

1. 需要 pre fetch 数据, 然后直接渲染 而不是 mount 中发送 API 请求
   - beforeCreate 和 created 执行

## 平台 API 差异

## Vue 自定义 directive