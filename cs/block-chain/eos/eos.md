# EOS

[eos.io](https://developers.eos.io/)

1. privkey 256bit
2. pubkey

钱包密码: PW5KJSagcZNEaifG9s2KCa6oj3FQkawtVi5mkLQz3zpd9nCGe9jdv

新建私钥：
对应的公钥： EOS public key: EOS7vkLv3prTaqwtYf3hcHwiUFBaXgQhp8C29RDCUoJt7c9AAEcJX

What a wallet does is

1账户(keosd):

2签名:

1. create transaction object
2. sends transaction object to the wallet to be signed -> a signature transaction object
3. broadcast to the network
4. network confirms that the transaction is valid -> it is included into a block on the blockchain

Every new EOSIO chain has a default "system" user called "eosio".
This account is used to set up the chain by loading system contracts that dictate the governance and consensus of the EOSIO chain.
Every new EOSIO chain comes with a development key, and this key is the same.
On a production chain, the eosio user is forfeited(丧失) once the chain is set up.
Load this key to sign transactions on behalf of the system user (eosio)

导入账户:

5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3 - 51
EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV - 53

An account is a collection of authorizations

- stored on the blockchain
- used to identify a sender/recipient (An account is required to send or receive a valid transaction to the blockchain)

创建 account
需要 wallet unlock

- owner key: keep cold
- active key: