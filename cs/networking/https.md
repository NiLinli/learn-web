# https

介于 TCP 和 HTTP 之间, 根据定义可以放在 传输层 也可以放在 应用层, 也可以定义为 安全层

## 流程

(**AES 层面**)解决 AES 密钥直接传递会被中间人获取, 引入 rsa 加密传输

1. C 请求 B 获取 pub_key
2. C 生成 AES 密钥通过 pub_key 加密发送给 B
3. B 通过 priv_key 解密 AES 密钥
4. B/C 通过 AES 密钥愉快的通信

(**Pub_key 层面**)上述过程解决了 AES 密钥直接被中间人获取的问题, 但是中间人还可以攻击 pub_key

1. 中间人生成一对 rsa 密钥 pub_key_mid/priv_key_mid
2. 在上述第一步截获 pub_key 后，返回 pub_key_mid 给 C
3. C 使用 pub_key_mid 加密 AES 传输到中间人
4. 中间人通过 priv_key_mid 解密得到 AES 密钥
5. 中间人使用截获的 pub_key 将 AES 密钥加密传给 B

整个过程 C/B 都不知道, 但是中间人已经获取了 AES 密钥

(**数字证书层面**)解决方案:

1. 对 pub_key 进行签名，让 C 确保其接受的 pub_key 不是中间人给的
2. 签名不能由 B 完成，因为本身传递 pub_key 就不安全, 无法传递签名所需要的 rsa 密钥对
3. 向宿主层请求帮助， 引入第三方数字签名机构，比如 CA
4. 浏览器/操作系统会存有机构的 pub_key/根证书 进行验签

最终结果

1. C 请求 B 获取 pub_key -> C 请求 B 获取数字证书

## 数字证书

- 公钥内容
- 签发者 ID
- Subject
- 有效期
- 其他信息

向系统添加自签发根证书/pub_key， 就可以使用自签发的证书

## 截获 https 请求

截获 AES 密钥
中间人假冒 pub_key 方式已经被浏览器/操作系统与 CA 数字签名瓦解了
但是中间人可以假冒 CA 数字证书， 与假冒 pub_key 流程相同

但是假冒的 CA 证书浏览器不认可，两种方式

1. 主动添加假冒的 CA 证书，良性操作，fiddler 抓包
2. 恶意诱导用户添加假冒的 CA 证书，病毒攻击

## https 双向验证

单向验证

- 服务端提供 证书和 priv_key
- 客户端配置根证书
- 客户端选择 可靠的服务端

双向验证， 在单向验证的前提下

- 客户端提供 证书和 priv_key (浏览器可配置，过去 PC 银行 USB_KEY/支付宝 等场景)
- 服务端配置根证书
- 服务端选择 一定范围内的客户端

## 配置

服务端

- 服务端 key 私钥
- CA 私钥签发的数字证书 crt
 