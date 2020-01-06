const bip39 = require('bip39'); // 生成 Mnemonic 并且转化为 seed
const bip32 = require('bip32'); // 生成 HD wallet
const hdkey = require('ethereumjs-wallet/hdkey'); // 生成 ETH HD Wallet

// mnemonic 和 seed 之间的转换必须是同一个算法
// seed 512 bit

// seed -> HD wallet
// HD wallet -> derivePath 

// 不同的 HDWallet 推导出的 privkey 都是一样的
// 不同的 HDWallet 只是在实现 public key 和 address 方面不同

const mnemonic = bip39.generateMnemonic( // 创建 mnemonic code
    null,
    null,
    bip39.wordlists.chinese_simplified
);
console.log(`mnemonic -- ${mnemonic}`);

const seed = bip39.mnemonicToSeed(mnemonic); // seed
// console.log(seed);
// console.log(`mnemonic HEX -- ${bip39.mnemonicToSeedHex(mnemonic)}`);

// bip32 生成 HDWallet
const hdWalletBybip32 = bip32.fromSeed(seed);

console.log(hdWalletBybip32);
console.log(hdWalletBybip32.publicKey);

// bip32.fromBase58 --  xprv 生成 hd
// bip32.fromPrivateKey
// bip32.fromPublicKey

const keypairsByBip32 = hdWalletBybip32.derivePath("m/44'/60'/0'/0/0");
// console.log(keypairsByBip32.privateKey);


// ethereumjs-wallet/hdkey 生成 HDWallet
const hdWallet = hdkey.fromMasterSeed(seed); // Master key 使用 seed 产生 EthereumHDKey (产生 Master Key 并记录起来)
console.log(hdWallet.getWallet);
const keypairs = hdWallet.derivePath("m/44'/60'/0'/0/0"); // 推导出 keypairs
console.log(keypairs.getWallet().getPrivateKey());


// hdwallet 
// master private key 
// chain code

// master public key

// network
// wif: 128
// bip32/version
//      public
//      private

