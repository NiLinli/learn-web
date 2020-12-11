



// RSA 非对称加密


// RSA 公钥 加密 结果不同
// RSA 私钥 加密 结果相同



// 加密解密
// private key sign +  public key verfify
// public key 加密 + private key 解密

// AES + RSA

// 服务器端创建 RSA 密钥对(动态的去变更)

// 客户端
// 1. 客户端随机产生 AES 的密钥
// 2. 进行 AES 加密
// 3. 从服务端获取 RSA public key
// 4. 通过使用 RSA 对 AES 密钥进行公钥加密(从服务端获取 RSA Public key)

// 服务器端
// 1. RSA 私钥进行解密得到 AES 密钥
// 2. AES 密钥解密得到 信息
// 3. ...

// 整体使用 RSA , RSA 速度太慢(所以使用 AES 加密大量信息, RSA 只加密密钥)

// 签名验证
// 私钥加密, 公钥解密(内容不需要被保密, 所以称为签名与验证)

// 签名端:
// SHA 对 O 进行摘要认证 得到 A
// 对 A 进行私钥签名 得到 D
// 公布公钥
// 发送 O + D

// 验证端:
// 使用公钥对信息进行验证(解密) 得到 A1
// SHA 对 O 进行摘要认证 得到  A
// 对比 A === A1 