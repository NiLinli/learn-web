# mp

小程序

## 登录

1. 获取用户信息 **button 触发**
2. 获取手机号码 **button 触发**

不能一个按钮先获取用户信息, 再提示获取手机验证码

微信登录方式

1. 按钮组件登录, 获取用户完整信息
2. 静默登录, open-data (头像 + 昵称)
3. 获取手机号登录, open-data (头像 + 昵称)

- [获取用户信息登录](https://developers.weixin.qq.com/community/develop/doc/000e2aac1ac838e29aa6c4eaf56409?highLine=%25E7%2599%25BB%25E5%25BD%2595)
- [服务范围特定的小程序/登录提示](https://developers.weixin.qq.com/community/operate/doc/000640bb8441b82900e89f48351401?page=2#comment-list)

## 权限

获取手机号和用户不能通过 js 请求

1. 判断是否有权限
2. 没有就请求(部分权限需要在配置中声明)

如果拒绝过权限只能提示他去配置权限.

## wechat mp

- office [文档](https://developers.weixin.qq.com/doc/)
- wepy [文档](https://github.com/Tencent/wepy) x
- mp-vue [文档](http://mpvue.com/)
- uni-app [文档](https://uniapp.dcloud.io/) x

## webpack

- scss 支持
- typescript 支持
- px2rpx 支持
- npm 支持

## 原生小程序

### sitemap.config

配置内容与页面的索引, 爬虫方式, 类似于网页 SEO.

### project.config.json

项目配置文件, 微信开发工具会读取项目配置文件.

### app.*

全局配置, 页面配置在各个页面下面.

### 启动

- 场景值
- 热启动
- 冷启动

### js

模块化 cjs

npm:

1. miniprogramRoot 范围内
2. 支持引用符合标准的 小程序自定义组件 npm 包
3. 很多 npm 包都不支持

Promise: 支持

Async/Await: 增强编译

### wxss

px: 逻辑像素
rpx: responsive pixel 物理像素

### wxml

wxml 类 html
wxs 类似于 模版 helper
