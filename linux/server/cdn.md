# cdn

[阿里云cdn教程](https://help.aliyun.com/document_detail/141973.html?spm=a2c4g.11186623.6.542.71441d1bRBaaQp)

## CNAME

Canonical Name 即别名

A.com 设置 DNS 的时候设置 CNAME 为 B.com  
那么 方文 A.com 都会解析到 B.com 对应的 IP

CDN 中的 CNAME 操作

业务域名 DNS 设置 CNAME 指向 阿里云CDN将给您分配一个CNAME域名
比如 `cdn.nilinli.com` CNAME 指向 `*.*kunlun*.com`

## 回源

CDN节点未缓存请求资源或缓存资源已到期时，回源站获取资源，返回给客户端

设置回源 HOST 或者 IP

## CDN 缓存

CDN加速静态资源时，将源站上的资源缓存到距离客户端最近的CDN节点上。  
当您访问该静态资源时，直接从缓存中获取，避免通过较长的链路回源，提高访问效率。  

考虑 cdn 缓存时候需要考虑 cdn 缓存 + 回源服务器上面缓存。
