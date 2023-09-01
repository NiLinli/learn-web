# cdn

[阿里云 cdn 教程](https://help.aliyun.com/document_detail/141973.html?spm=a2c4g.11186623.6.542.71441d1bRBaaQp)

## CNAME

A.com 设置 DNS 的时候设置 CNAME 为 B.com  
A.com -> B.com -> IP

加了 CNAME 这一层, 对于用户来说不用变化  
CNAME -> 真实 IP 控制在 CDN 服务商中

## 回源

CDN 节点未缓存请求资源或缓存资源已到期时，回源站获取资源，返回给客户端

设置回源 HOST 或者 IP

## CDN 缓存

CDN 加速静态资源时，将源站上的资源缓存到距离客户端最近的 CDN 节点上。  
当您访问该静态资源时，直接从缓存中获取，避免通过较长的链路回源，提高访问效率。

考虑 cdn 缓存时候需要考虑 cdn 缓存 + 回源服务器上面缓存。
