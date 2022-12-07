# cookies

HTTP/Web Cookie  
使得 HTTP 无状态 添加 会话状态管理

1. 服务器响应 Set-Cookie 发送到**浏览器**
2. 浏览器保存到 Cookie
3. 浏览器下次发送请求会携带 Cookie

## Cookie 作用域

Cookie 应该发送给哪些 URL 被称为 Cookie 作用域, Domain & Path 定义  
没有规定与 协议(后面添加的 Secure 限制 https) & 端口号的关系  

### Domain 域名 

域名 .omg.com  
子域名 game.omg.com

缺省是当前域名, 不包含子域名  
设置就是设置的域名 + 子域名都可以发送 Cookie

第一方 Cookie: 当前域下面的 Cookie  
第三方 Cookie: 网页第三方资源包含的 Cookie(第三方资源 SameSite 设置为 None)

第三方 Cookie 跟踪用户使用习惯

- 同一浏览器
- 访问多个站点发送 Cookie 

建立用户访问画像, 所以浏览器会阻止一些第三方跟踪 Cookie

### Path 路径

能匹配上的都可以发送

- / 所有都可以匹配
- /doc doc 开头的路径可以匹配


## Expires/Max-Age

参照客户端的过期时间, 类似于缓存 Cache-Control

- session: 默认, 会话关闭就消失(有些浏览器有会话恢复功能, 可以恢复会话)
- Expires: Wed, 21 Oct 2015 07:28:00 GMT;
- Max-Age: 360000;

## 限制访问 Cookie

- Secure 只有是 https 请求才会被贴上去, 防止 http 遭受的中间人攻击
- HttpOnly 只有请求可以发送，前端不能通过 `document.cookie` 获取, 防止 XSS 攻击
- SameSite 被跨域请求时限制, 防止 CRSF 攻击
  - None: 过去的默认值, 现在浏览器默认值迁移到 Lax, None 需要显示指定
  - Strict: 相同站点(与浏览器URL相同)访问时发送 Cookie
  - Lax: Strict 情况下, 放宽了几点
    - a 标签点击时候, href 肯定与上面的当前 URL 显示不一致, 但是这种场景很普遍, 需要携带 cookie
    - link 
    - form(get)
    - 其他 ajax/img/iframe/form(post) 和 Strict 保持一致

## Set-Cookie

- 每次只能返回一个
- 返回多个需要设置多个头
- 定义 Cookie 属性需要添加到 Cookie 后面 `Set-Cookie: key=value; SameSite=Strict`

## Cookie

所有 Cookie 通过 `; ` 拼接

