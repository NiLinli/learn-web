# History

## Progressive Enhancement

渐进增强: 平衡新特性已经回退机制(兼容性)

1. 支持新特性
2. 不支持新特性的情况下回退兼容老特性

html/css 都会忽略不认识的新特性, 不会报错

## HTML

> The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.  -— Tim Berners-Lee

1. HTML 创建 1990 (Tim Berners-Lee)
2. HTML4.01(recommendation) 1999
    - W3C 发展 XHTML 1.0. XHTML 1.1
3. HTML5 2009(WHATWG)
    - W3C 放弃 XHTML

### HTML5

ie9+

1. 语义话标签
2. 重新定义了标签  `<strong> <em>` => `<i> <b>`

- [html5doctor](http://html5doctor.com)
- [html5shiv](https://github.com/aFarkas/html5shiv) 兼容 html5 标签

### fallback

直接写新的特性

- 识别: 应用新特性
- 不识别: 回退到默认特性, 不会报错 `type="email|phone|number..."` =回退=> `type="text"`

#### DOCTYPE

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
`<!DOCTYPE html>`
```

html5 是 html4 的简写, 过时的浏览器本来就支持

## CSS

1. CSS 初次提案 1994
2. CSS1(W3C recommendation) 1996, 只有一些基础的 property(fonts, colors, margin...)
3. CSS2 1998, 添加一些新特性 (floating, positioning...)
4. CSS2.1 2002, CSS2 bug fix
5. CSS3 2001 提案, 特性逐渐支持

### fallback

1. 先写旧的特性, 保证基本显示
2. 在写新的特性
    - 能够识别: 覆盖旧的特性
    - 不能够识别: 不报错, 显示旧的特性

#### Vendor prefixing

- -moz- Mozilla-based browsers (e.g., Firefox)
- -epub- International Digital Publishing Forum ePub format
- -ms- Microsoft Internet Explorer
- -o- Opera-based browsers
- -webkit- WebKit-based browsers (e.g., Safari and Chrome)

#### 通过 JS 检测 CSS feature

modernizr
