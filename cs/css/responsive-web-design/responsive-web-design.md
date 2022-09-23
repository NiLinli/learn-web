# responsive web design

07 年以前分为 mobile web & desktop web, 07 年以后流行起来 responsive web design

## viewport

- Virtual CSS pixels
- Actual Hardware pixels

Ideal viewport : 大小依赖于 设备, os, 浏览器

- phone 300-500
- tablet 800-1400

## media types & queries

media types: HTML4.01 CSS2.1
media queries: CSS3

写法: media types and (media queries) and (media queries)

media queries 取闭区间

不兼容：

1. 有的浏览器, 处理 media types, 忽略不认识的 media queries
2. 另外一些忽略所有
3. 统一达到2的效果
    - 添加 only(看到only 不认识就全部忽略了) `@media only screen and (min-width: 30em) {/*...*/}`
    - 去掉 media types(没有添加 media types , 自然就没有认识的了)

用法:

1. link : 如果不满足就 不下载 或者 下载了不应用
2. css


## dimensional queries

使用 width 属性为标准确定 breakpoint

- In the vertical direction, we can let things grow as much as we like, and let the user scroll

orientation(方向)

- portrait: 肖像画 竖屏
- landscape: 风景画 横屏

## 设计原则

1. mobile first css
    - 小屏幕, 难以布局, 所以先布局

2. min-width   max-width 使其所属的区间的样式不影响其他的样式

实例：

1. 使用小的 typeface 去适应小的屏幕, 而不一定要改变字体的大小
2. flexbox 太小了, 可以考虑换行
3. 小屏 line-height 1.3 , 大屏幕 line-height 1.5
4. 小屏幕 font-size 16-18px , 大屏幕 font-size 22px
5. 使用 em 设置 base font-size, 响应式中修改 body 的 font-size, 达到改变所有 base font-size 的目的

## fallback

Conditional comments

```html
<!--[if (lt IE 9) & (!IEMobile)]>
<link rel="stylesheet" href="oldIE.css" media="all">
<![endif]-->
```