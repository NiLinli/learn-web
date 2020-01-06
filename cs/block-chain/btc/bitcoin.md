# bitcoin

## privkey / pubkey / address

### privkey

256bit / 32byte

表示方法:

- WIF = Base58Check (preifx = 0x80, base58 output prefix = 5) 用于生成非压缩格式公钥的私钥
- WIF-compressed = (HEX + suffix = 0x01) (prefix = 0x80, output prefix = K, L) 用于生成压缩格式公钥的私钥

prikey 选择一种表示形式(导入的时候确定是 WIF 还是 WIF-compressed) --> 后面的流程都相同

### pubkey

520bit / 85byte

- ECC secp256k1 标准, 私钥单向生成公钥
- OpenSSL 可以实现这个操作 EC_POINT_mul()
- 0x04 开头 - 非压缩  WIF 生成
- 0x03 开头 (264bit/33byte) - 压缩 WIF-compressed 生成

### address

ADDRESS = RIPEMD160(SHA256(PUBLIC_KEY))  160bit/20byte

地址表示方法(Base58Check 编码):

- 普通 P2PKH: input prefix = 0x00, base58 output prefix = 1
- P2SH (Pay-to-Script-Hash Address): 付款脚本 0x05 3
- Bitcoin Testnet Address: 0x6F     m or n

## 账户查询

你可以搜索比特币的地址、交易和区块，以及可以看他们之间的关系和资金流动

不存在存储比特币账户的地址和余额的数据库, 只有被锁住的/分散的 UTXO

## 交易

交易的本质是数据结构, 交易的相关信息, 交易最小单位 satoshi

### 余额

比特币钱包通过扫描所有区块链, 并且聚合所有的属于该用户的 UTXO 来计算用户的余额
交易输出 -- 比特币完整节点跟踪所有可找到的和可使用的输出(unspent transaction outputs) UTXO
比特币钱包通过扫描区块链并聚集所有属于该用户的UTXO来计算该用户的余额 , 个人 UTXO 集

UTXO 作为交易输入了?

### 生命周期

1. 创建比特币交易 (不需要链接网络) -- 本质: 300 到 400 字节的数据
   - 交易建立(交易发起人)
   - 交易签名(资金所有者)
2. 将比特币交易传输到比特币网络
   - 发送到千万个节点的其中一个
   - 发送交易的节点和发送者彼此不需要相互信任
3. 比特币网络
   - 收到交易的节点验证交易信息
      + 验证通过: 交易成功的信息, 发送交易去其他节点
      + 验证失败: 交易失败的信息, 并且拒绝接受这笔交易

### 交易结构

交易输入 + 交易输出

交易的普遍情况(UTXO 是不可以分割的):

A -> B , A 拥有 20 个比特币, 需要支付给 B 1 个比特币

1. IN 确定输入 20 UTXO (找到一个 UTXO 设置为输入) -- 消耗 UTXO 的过程, 被交易消耗的 UTXO 被称为交易输入
2. OUT
   - 1 比特币 (交易创建的 UTXO 称为交易输出)
   - 18.5 比特币找零 (交易创建的 UTXO 称为交易输出)
3. IN - OUT 的差额被称为交易费(矿工费)

说明:

1. IN 所有者签名解锁 UTXO
2. OUT 新的所有者的比特币 Address 锁定 UTXO

### UTXO

UTXO 指交易输出

1. 比特币数量
2. 锁定脚本 + 锁定脚本尺寸 (privkey 去解锁输出)

交易输入

交易输入是指向 UTXO 的指针

1. UTXO 哈希指针 /32 个字节
2. 解锁脚本(签名)
3. ...

### 交易脚本

P2PKH - Pay ­to­ Public­Key ­Hash

脚本的创建

1. 锁定脚本中含有 public key or address
2. 解锁脚本中含有 private key, 包含一个数组签名 SrciptSig

执行锁定脚本  scriptPubKey 加 解锁脚本 scriptSig 验证一笔交易

1. 验证软件指向 检索输入的 UTXO, 获取锁定脚本(address)
2. 获取 UTXO 在输入状态下的解锁脚本(数字签名)

### 钱包在交易中的作用

1. 余额, 即获取 UTXO 集
2. 寻找 UTXO 组合, 做 IN
3. 设置交易费(通过服务动态实时获取)

### 交易费

交易费的大小和交易中的比特币数量无关, 和交易数据的大小有关

- `https://bitcoinfees.21.co/api/v1/fees/recommended` GET 方式

## 参考资料

图书, 文献类

- [MASTERING BITCOIN](https://bitcoinbook.info/wp-content/translations/cmn/book.pdf)

区块链数据库查询网站

- [Blockchain info](https://www.blockchain.com/explorer)
- [Bitcoin Block Explorer](https://blockexplorer.com/)
- [insight](https://insight.bitpay.com/)
- [blockr Block Reader](https://www.coinbase.com/)