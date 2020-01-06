# private network

1. Defining the private genesis state 定制初始文件 `genesis.json`
2. Creating the rendezvous point
3. Starting up your member nodes  定制数据目录
4. Running a private miner   (推荐)关闭节点发现

`genesis.json` 文件配置

```json
{
  "config": {
        "chainId": 0,       // chainID 指定了独立的区块链网络 ID , 以太坊公网的网络 ID 是 1
        "homesteadBlock": 0,
        "eip155Block": 0,
        "eip158Block": 0
    },
   // If you'd like to pre-fund some accounts for easier testing, you can populate the alloc field with account configs:
  "alloc"      : {
        "0x0000000000000000000000000000000000000001": {"balance": "111111111"},
        "0x0000000000000000000000000000000000000002": {"balance": "222222222"}
  },
  "coinbase"   : "0x0000000000000000000000000000000000000000",
  "difficulty" : "0x20000",     // 挖矿难度
  "extraData"  : "",
  "gasLimit"   : "0x2fefd8",    // Gas 消耗限制
  "nonce"      : "0x0000000000000042", // we'd recommend changing the nonce to some random value so you prevent unknown remote nodes from being able to connect to you
  "mixhash"    : "0x0000000000000000000000000000000000000000000000000000000000000000",
  "parentHash" : "0x0000000000000000000000000000000000000000000000000000000000000000",
  "timestamp"  : "0x00"
}
```

` geth --datadir data0 init genesis.json` 


keep the data directory of your private network separated

`--datadir=` 定制数据目录

- /data0
  + geth
      - chaindata 区块数据
      - lightchaindata 
  + keystore 账户数据


启动私有节点

`geth --datadir data0 --networkid 110 console` 进入交互式控制台


发起交易：

account[0] -> account[1]

1. personal.unlockAccount 0
2. eth.sendTransaction  返回 hash 可以查询交易记录

通过区块号 查询 区块(包含 hash)

通过 hash 查询 交易


rpc 激活节点上的 rpc 界面 
`geth --datadir data0 --networkid 110  --rpc --rpcapi="db,eth,net,web3,personal,web3" console`

`--rpc`
`--rpcapi="db,eth,net,web3,personal,web3"`

## mnemonic words

HD Wallet: 钱包机制 
1. Hierarchical  分层的
2. Deterministic 确定的

实际存在钱包中的是我的帐户对应的 key
有了这把 key 我就可以在虚拟货币世界证明我的身份
   - 更改我帐户的状态（像是送钱给别人）
   - 管理和储存 key 的工具
   - 这把 key 就是我的私钥,而帐户是从我的公钥衍伸出来。

bip: BIP 全名是 Bitcoin Improvement Proposals
   - 提出 Bitcoin 的新功能或改进措施的文件
   - 可由任何人提出，经过审核后公布在 bitcoin/bips 上

bip32:
- 定义  wallet (简称 "HD Wallet")
- 一个系统可以从单一个 seed 产生一树状结构储存多组 keypairs
- 好处是可以方便的备份、转移到其他相容装置（因为都只需要 seed），以及分层的权限控制等

bip39：
- 将 seed 用方便记忆和书写的单字表示
- 一般由 12 个单字组成，称为 mnemonic code(phrase)，中文称为助记词或助记码

bip44：
- 基于 BIP32 的系统，赋予树状结构中的各层特殊的意义
- 让同一个 seed 可以支援多币种、多帐户等

`m / purpose' / coin_type' / account' / change / address_index`

- purpose
- coin_type 不同币种  Bitcoin 就是 0'，Ethereum 是 60'
- account
- change
- address_index


Ethereum HD Wallet 采用 Bitcoin HD Wallet 的架构, 并订 coin_type' 为 60'

1. 收 Adress 上面收钱
2. 发 (支持 Eehereum 的钱包)  就是开发重点


MetaMask 钱包离线存储方案 [vault-decryptor](https://github.com/MetaMask/vault-decryptor)

1. 加密存 Local Storage
2. 加密：用户设置密码 + mnemonic code = 存放结果
3. 解密：读取结果 + 用户设置密码 = mnemonic code

