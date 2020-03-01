# XSS

Cross-Site Scripting: 跨站 脚本 攻击(代码注入攻击)  
CSS 和 css 重名, 所以称为 xss

## 攻击

injects HTML tags or scripts into a target website. 
Defending against XSS attacks is typically the job of server-side web developers.
However, client-side JavaScript programmers must also be aware of, and defend against, cross-site scripting.

1. 依靠数据动态生成页面内容
    - php 动态网页
    - 前端模版生成
2. 数据没有 sanitizing

数据来源

1. url 上面的查询参数
2. ajax 返回的数据

攻击者可以通过执行 js 获取收据, 然后通过 http 发送到攻击者服务器以达到窃取用户敏感数据

## 防护

1. html 标签转译 escapeHtml
2. 去除 javascript: (大小写) 开头的数据, 影响 href
3. 尽量避免使用 innerHTML(v-html) 等等

富文本编辑器比如要使用 innerHTML, 但是不需要考虑 href, onclick 中的 javascript:  
所以在过滤 `<script></script>` 标签即可
