# crsf

Cross-site request forgery: 跨站 请求 伪造

1. 利用浏览器同源策略允许的范围
2. 携带 cookies

## 攻击

利用点/防护点:

- script/img/iframe 的 src
- form 提交

特点

1. 发生在第三方域名
2. 攻击者不能获取, 只能使用 cookies (可见同源策略放开部分带来的危险)

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
