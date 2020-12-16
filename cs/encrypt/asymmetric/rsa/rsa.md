# RSA

## 密钥

- Private key：只有所有者可以访问 (保存好自己的 Private key)
- Public key：网络中的每个人都可以访问彼此的公钥 (公布自己的 Public key)

公钥和私钥不能互相推导(openssl 生成的私钥包含了公钥信息, 所以可以推导出来)， 知道了加密的密钥, 也无法知道解密的密钥

格式: 常用 PEM 格式(不同格式签名和加密结果相同)

- PKCS#1
- PKCS#8

## 加密->解密

## 签名->验证

1. 所有者加密信息: Information + Private key(所有者) = Digital Signature
2. 其他人获取信息: Digital Signature + Public key(其他人) = Information

## openssl 方法





签名



## 相关语言实现

- RSA [jsencrypt](https://github.com/travist/jsencrypt)
