# wallet

存储和管理用户密钥的数据结构
钱包是私钥的容器，一般是通过结构化文件或简单数据库来实现

- web-base wallet
- mobile wallet

## privkey 存储

对称加密 AES 等

- bip38
- [V3 storage](https://github.com/ethereum/wiki/wiki/Web3-Secret-Storage-Definition)

## 导入

1. 需要扫描区块链并找到所有与这些被导入私钥相关的交易

## HD Wallet

bip32 HD 钱包
bip44 多币种和多帐户钱包

bip 39 -> seed

seed -> extended key (master key 的扩展 + chain code)

CKD

- m
- a
- 索引号 32bit

extended key = parent key + parent chaincode
xpriv 构建所有子私钥 + 子公钥 (可以导出)
xpub  只能构建子公钥 (可以导出)   --> 构建需要的子公钥 --> 构建需要的地址 

bip 44
m/purpose'/coin_type'/account'/change/address_index

意义：

1. 持有一个 seed 就持有多个比特币 privkey
2. 多个比特币 privkey 的意义在于： 对应多个 比特币地址 (xpub 可以推导出) , 收款的时候填写多个地址 (多个地址对应一个 seed, 达到一个 seed 管理多个账户的目的)
3. 定制不同的 dreive 规则, 导出不同的钱包私钥(多钱包)

## 钱包设计

前端部分

1. 加密存储 private keys (加密后的文件 本地存储 + 数据库存储?)
2. transactions signTx

服务器部分

- 历史记录
- 余额
- provider transactions arguments

## 钱包

DApp

如何妥善的备份你的钱包(密码弄丢)? 

- 普通方式：
    1. 向服务商提交忘记密码的申请
    2. 收到一封邮件或者短息
    3. 填写信息, 重置密码, 重新获得账户的支配权
- 数字货币:
    1. 备份私钥

常见钱包

1. Ethereum 官方钱包 + 浏览器 Mist
2. Parity
3. MyEtherWallet
4. imToken
5. MetaMask
6. Legder

### 钱包生成机制

钱包 (非对称加密算法 - ECC 椭圆曲线算法)

1. 公钥 
2. 私钥 
    - 账户的支配权
    - 交易需要：每笔交易都需要一个 **有效的数字签名** (有效的私钥产生) 才会被存储在区块链

生成过程

1. 私钥 k 是一个数字, 通常是随机选出的
2. 私钥 k --> 椭圆曲线乘法(单向加密函数) --> 公钥 K
3. 公钥 K --> 单向加密哈希函数 --> 账户地址 A

钱包形态

1. Private Key
    - 随机生成的 256 位二进制数字
2. Keystore && Password
    - 在以太坊官方钱包中, 私钥与公钥将会以加密 (创建钱包时设置的密码, 请务必记住) 的方式保存
    - JSON 文件, 存储在 /Users/yourname/Library/Ethereum/keystore 中
    - 这份 JSON 文件就是 keystore，所以你需要同时备份 keystore 和对应的 password
3. Mnemonic Seed
    - 由 BIP 39 提案提出
    - 通过随机生成 12 ~ 24 个容易记住的单词
    - 单词序列通过 PBKDF2 与 HMAC-SHA512 函数创建出随机种子
    - 该种子通过 BIP-0032 提案的方式生成确定性钱包

BIP 39 定义助记码创建过程如下：

1. 创造一个 128 到 256 位的随机顺序(熵)
2. 提出 SHA256 哈希前几位, 就可以创造一个随机序列的校验和
3. 把校验和加在随机顺序的后面
4. 把顺序分解成 11 位的不同集合, 并用这些集合去和一个预先已经定义的 2048 个单词字典做对应
5. 生成一个 12 至 24 个单词的助记码

所以当你记住 12 ~ 24 个助记码后，就相当于记住私钥。
助记码要比私钥更方便记忆和保管
目前支持助记码的钱包有 imToken 和 jaxx

防盗: 分离备份, Keystore && Password 不要放在一起
防丢：多处备份
分散风险：资金适当分散, 多重签名, 提取超过限制金额, 需要多把私钥授权

常用的备份方式：

1. 多处和分离备份 - 生成 keystore JSON 文件到处存着
2. 纸钱包 - 纸钱包实质就是将 keystore 或 私钥以纸质化形式保存, 一般为二维码形式
3. 脑钱包 - 通过 BIP 39 提案的方式生成足够随机的，可记忆的助记码
4. 多重签名

## Private key

种子 Seed

- Mnemonic word

Seed - 算法1 -> private key - 算法2 -> public key -> Address

算法1: 可以考虑通用的一套算法 (可以自己编写, 不同钱包给的 seed --> privateKey 方案不同)
算法2: 不同 系统 算法不同 (必须不同, 必须指定的 lib)