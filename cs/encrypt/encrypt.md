# encrypt

encrypt crypto

- [crypto-js](https://github.com/brix/crypto-js)
- [sjcl](https://github.com/bitwiseshiftleft/sjcl)
  
## 对称加密

AES

- password
- key derivation function
  - key size: 128 192 256 密钥长度(bit)
  - salt
  - factor
  - key

1. keysize 密钥长度
2. key 密钥
3. iv 向量
4. mode 加密方式
5. padding 填充方式

Ciper 加密

- Salt
- factor
- Key size
- Key

Cipher Parameters

- Cipher mode
- Initialization vector
- Authentication strength

## 非对称加密

知道了加密的密钥, 也无法知道解密的密钥

- RSA [jsencrypt](https://github.com/travist/jsencrypt)
- ECC 椭圆加密

### RSA

- Private key：只有所有者可以访问 (保存好自己的 Private key)
- Public key：网络中的每个人都可以访问彼此的公钥 (公布自己的 Public key)

公钥和私钥不能互相推导(openssl 生成的私钥包含了公钥信息, 所以可以推导出来)

加密->解密

区块链利用密码学来生成数字签名。提到数字签名，先要了解下私钥和公钥的概念。

签名->验证

1. 所有者加密信息: Information + Private key(所有者) = Digital Signature
2. 其他人获取信息: Digital Signature + Public key(其他人) = Information

## Hash

Hash 算法 - 就是把**任意长度**的输入（又叫做预映射pre-image）通过散列算法变换成**固定长度**的输出，该输出就是散列值

- MD5  [JavaScript-MD5](https://github.com/blueimp/JavaScript-MD5)
- SHA 系列
