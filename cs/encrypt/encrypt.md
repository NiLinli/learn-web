# encrypt
  
加密都是对文本对应的**二进制**进行加密

- 加密的内容 IN 需要告知程序内容编码方式(utf8, utf16)
  - 文件(自带编码类型)
  - 程序数据类型(指定编码类型)
- 生成的内容 OUT 需要明确输出编码方式(base64, hex, utf8 等等)

## openssl

openssl: cryptography library

1. 命令行
2. lib 调用(依赖 openssl 实现的库， 方法类似)

函数调用流程

1. int XXX_Init();
2. int XXX_Update();  多次添加加密
3. int XXX_Final();

## 对称加密

- DES
- AES

## 非对称加密

- RSA
- ECC 椭圆加密

## Hash

## HMAC
