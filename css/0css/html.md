# 浏览器内核

定义：Rendering Engine  渲染引擎，负责对网页语法的解释并渲染（显示）网页。     
内核分类：

- Trident: ie  
- Gecko: firefox  
- Webkit: Safari    
- Blink: Chrome, Opera

## html

定义：HyperText Transfer Makeup Language标记语言。

### DocType

每个页面都必须要设置文档类型，不设置默认quirk mode。

### <html>标签

所有html内标签的根节点
lang属性用来设置语言

作用：

- 设置页面主要使用类型
- SEO设置权重时起一定作用
- 用于特殊设备的设置

html

- head
  - title: title 中的文本在seo中占很大的权重
  - meta
  - base
  - style, link
  - script
- body：页面的主体部分，用于存放所有的html标签

## SEO

Search Engine Optimization 讨好搜索引擎（网络爬虫）

- 网站搜索排名
- 将网页做成静态页面
- 发外链
- 写页面更加友好（规范）：在合适的地方使用合适的标签，合理使用标签的语义化

## Extending the Semantics of HTML

1. ARIA Role Attributes
2. [Microformats](http://microformats.org/2012/06/25/microformats-org-at-7)
    - a set of standardized naming conventions
    - markup patterns to represent specific types of data
    - with microformats make it easier for developers to write tools that extract this data
3. [Microdata]( http://schema.org)
    - html5
    - seo


