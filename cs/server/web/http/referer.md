# 请求来源

告知服务器请求来源
浏览器都会自动携带，在浏览器上面不能改变

## referer

referrer 来路，推荐人

组成： schema + host + path
默认携带 `https://developer.mozilla.org/`

- http 请求 https 不会携带 referer
- 请求 data 开头和 file 不携带 referer

### 防盗链

通过 referer 判断来源是否是可以访问资源的(浏览器上防盗链)  

## origin

- POST 请求
- CORS 请求

除了 referer 以外，还会携带 origin

组成： schema + host

`https://developer.mozilla.org`

## 同源检查

1. 使用 origin 确定来源域，不一定有
2. 使用 referer 确定来源域， 不一定有
3. origin + referer 都没有的话，直接阻止
