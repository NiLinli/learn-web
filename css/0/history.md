# History

## HTML

> The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.  -— Tim Berners-Lee

1. Tim Berners-Lee created HTML in 1990, for the purpose of formatting scientific research documents. 
2. HTML 4.01 became a recommendation in 1999 ( W3C switched its attention to XHTML 1.0. XHTML 1.1 was meant to follow)
3. In 2009
    - the W3C gave up on XHTML completely 
    - embraced the new standard from the WHATWG that had become known as HTML5

## CSS

1. CSS was first proposed in 1994
2. CSS 1 became a W3C recommendation at the end of 1996 and contains very basic properties such as fonts, colors, and margins.
3. CSS 2 became a recommendation in 1998 and added advanced concepts such as floating and positioning...
4. in 2002, the W3C published CSS 2 Revision 1. CSS 2.1 fixes errors in CSS 2

## HTML5

1. improved the semantics of our HTML 
2. ie9 +
3. 资源
    - [html5doctor](http://html5doctor.com)
    - [html5shiv](https://github.com/aFarkas/html5shiv)
4. redefined tag
    - use `<strong> <em>` instead of `<i> <b>`

## Extending the Semantics of HTML

1. ARIA Role Attributes
2. [Microformats]((http://microformats.org/2012/06/25/microformats-org-at-7)
    - a set of standardized naming conventions
    - markup patterns to represent specific types of data
    - with microformats make it easier for developers to write tools that extract this data
3. [Microdata]( http://schema.org)
    - html5
    - seo

## Progressive Enhancement

渐进增强: 平衡新特性已经回退机制(兼容性)

The ability to balance backward compatibility with the latest HTML and CSS features involves a strategy known as progressive enhancement. 

### html fallback

原理： 浏览器不识别的 html attribute, 会忽略, 采用默认的

- input `type="email|phone|number..."` 如果不支持, 应用默认值 `type="text"`
- `<!DOCTYPE html>` You can safely switch to writing your HTML documents with this doctype because the HTML5 syntax and doctype are backward compatible. 

### css fallback

原理： 浏览器会忽略不识别的 css property/value

1. 回退样式写在正常样式之前
  - 支持新的, 覆盖旧的
  - 不支持新的, 应用旧的, 忽略新的
2. js 判断 modernizr
3. vendor prefixing

#### Vendor prefixing

+ -epub- International Digital Publishing Forum ePub format
+ -moz- Mozilla-based browsers (e.g., Firefox)
+ -ms- Microsoft Internet Explorer
+ -o- Opera-based browsers
+ -webkit- WebKit-based browsers (e.g., Safari and Chrome)