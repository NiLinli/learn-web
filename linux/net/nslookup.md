# nslookup

dns lookup

```bash
nslookup www.baidu.com

# DNS 服务器地址
Server:		10.28.0.21
Address:	10.28.0.21#53

Non-authoritative answer:
# canonical name CNAME 真是名称
www.baidu.com	canonical name = www.a.shifen.com.
# A 记录
Name:	www.a.shifen.com
Address: 14.119.104.254
Name:	www.a.shifen.com
Address: 14.119.104.189
```

域名: www.baidu.com  
CNAME: 别名 www.a.shifen.com  
A记录: 域名 -> IP 解析 14.119.104.189 