# ETH (etherenum)

[ethereum](https://www.ethereum.org/)
EIPs

定义

- deterministic but practically unbounded state machine
  1. a globally accessible singleton state
  2. a virtual machine that applies changes to that state
- an open source, globally decentralized computing infrastructure that **executes programs called smart contracts**.
  1. uses a **blockchain** to synchronize and store the system’s state changes
  2. along with a cryptocurrency called **ether** to meter(计量) and constrain(约束) **execution resource costs**.

虚拟机支持

- build powerful decentralized applications with **built-in economic functions**.
- Like a general-purpose stored-program computer, Ethereum can
  1. load code into its state machine
  2. run that code
  3. storing the resulting state changes in its blockchain

## Client

- [go](https://github.com/ethereum)
- [ethereumjs](https://github.com/ethereumjs)
- other - cpp py ...

## UTXO

好处: 并行化处理
不好处: 并行化处理复杂性太高, 并且 stateless (资产发行 ok, 合约不 ok)

ETH -> 账户

## 

1. etherenum
2. 智能合约
3. EVM
4. Gas
5. Ether (ETH)
6. 账户
7. 交易
8. Solidity

特点:

1. 运行起来极其缓慢
    - 如今的普通计算机的运行速度缓慢约5至100倍(90年代智能手机)
2. 成本很高
3. 只能做些微不足道的小事
4. 以太坊需要几千人在自己的计算机上运行一个软件, 为该网络提供动力
    - 网络节点(计算机)
    - 运行 EVM 虚拟机 (EVM 是一个操作系统)
        1. 理解并执行通过以太坊特定编程语言编写的软件
        2. 由以太坊虚拟机执行的 **智能合约** (软件/应用程序)

要在这一世界计算机上做任何事都需付费 , 自带加密货币, 以太币 Ether (ETH)

用户：

1. 人
2. 智能合约
    - 人做的事情
    - 智能合约也可以执行预定义的计算机程序, 在程序被触发时执行各种操作

## 账户

每个账户都是由一个地址标识的, 同一地址空间由两种账户共享

1. 公私钥对控制的外部账户, 该账户通常由人拥有, 用来存储ETH (外部账户才能启动交易)
2. 由它存储的代码控制的合约账户

## 智能合约

程序

开始说历史了：

两个人为天气打赌, 确保输家履行诺言

1. 互相信任  - 不现实
2. 签署法定合同 - 成本太高, 太麻烦
3. 寻求共同朋友的帮助 (寻求第三方托管) - 第三方也不一定可靠

以太坊中的方式： 编写智能合约(软件)

特点：

1. 智能合约一旦完成，无论如何都无法被编辑或修改
2. 可以肯定的是不管合约中有何规定，无论如何都会被执行

不管智能合约于何时执行,它都记录了在区块上执行的交易的信息

1. Timestamp
2. Sender
3. Recipient
4. Amount
5. Data

以太坊区块链上的任何给定区块都可以包含以下三种交易：

1. 人类用户和用户之间的常见以太币转账 (直接将 以太币 转账)
    - Sender = Human Sender
    - Recipient = Human Recipient
    - Data = No Data
2. 无接收方的以太币转账 - 网络中利用 Data 项的内容创建一个智能合约
    - Sender = Sender
    - Recipient = No Recipient
    - Data = Create Smart Contract (软件代码, 该代码会像网络中的其它用户一样进行操作)
3. 用户和智能合约之间的以太币转账
    - Sender = Human Sender | 智能合约
    - Recipient = Smart Contract Recipient
    - Data = Execute Smart Contract

1. 不管上述三个事件中任一个在何时发生，都会发布在整个网络之中，每个人都会记录下来
2. 除了记录之外，每个节点也会执行收到指令的智能合约，让以太坊虚拟机的状态与余下的网络同步
3. 每个节点执行软件的一部分，因此使整个网络充当巨大（却运行缓慢）的分布式计算机
4. 每次执行都会存储在区块链上，从而达到永久存储的目的

我说过使用智能合约的用户必须支付一定费用去执行该合约
该费用支付给实际使用内存、硬盘、计算和电力执行这一智能合约的节点

为了计算智能合约的费用，每个语句都有指定的成本， 特定成本的单位被称作Gas
最终，Gas通过一定的兑换率转换成以太币

无论你何时执行智能合约，你必须确定要消耗的最大Gas量
当合约执行完成之时，或是达到Gas限制之时，都会停止执行该合约

以太坊不只是一种用于交易的加密货币
其真正的价值在于其**目的** - 让拥有以太币的人能**使用**通过几千个节点提供动力的分布式世界计算机

## DApp 开发

1. transcation
2. user interface

## Ether 以太币

1 ether = 10^18 wei

## 区块查询

- [etherscan](https://etherscan.io/)

## 参考资料

- [Mastering Ethereum](https://github.com/ethereumbook/ethereumbook)