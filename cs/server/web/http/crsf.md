# CRSF

Cross-site request forgery: 跨站 请求 伪造

常规操作：

1. 引导用户点击进去一个新的页面(攻击页面)
2. 攻击页面利用浏览器同源策略允许的范围，携带 cookies
3. **执行操作**(发送原页面对应的请求)
    - 自动转发邮件，窃取用户数据
    - 转账下单等等

综述：跨站发送请求，调用接口，进行操作，无法取回数据

## 防护

跨域不限制的位置进行限制

- SameSite Cookie
- 同源检测 origin/referer 对比
- 添加 crsfToken 让前端取到(一般是动态放在页面结构中)，发送请求时候携带 crsfToken
- **不使用 Cookies**
