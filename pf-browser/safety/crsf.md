# crsf

Cross-site request forgery: 跨站 请求 伪造

1. 利用浏览器同源策略允许的范围
2. 携带 cookies

## 攻击

利用点/防护点:

- script/img/iframe 的 src
- 浏览器 form 提交

特点

1. 发生在第三方域名
2. 攻击者不能获取, 只能使用 cookies (可见同源策略放开部分带来的危险)

攻击者利用浏览器允许跨域发送一些 get/post 请求, 虽然无法取回数据, 但是有的请求可以执行一些设置, 例如邮件自动转发功能, 窃取用户数据

### src

script/img/iframe src 的提交

### form 提交

get/post

1. 创建一个空白页面
2. 通过 js 自动提交表单

## 防护

- 限制第三方域名的访问(同源检测)
  - origin header/referer header
- 添加 token 限制
  - CSRF Token

终极大招: 不使用 session 鉴别用户信息状态
