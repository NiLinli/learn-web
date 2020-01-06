// 
const bitcoin = require('bitcoinjs-lib');
const Wallet = require('ethereumjs-wallet');
const Web3 = require('web3');
const ECC = require('eosjs-ecc');

const wif_compress = 'KwjHVC5gjAi3FBDJGK5RtjrvfzUxVyHH64A8CBwcYZ9wUxcEJePz';

// BTC
console.log('--BTC--');
const keyPair = bitcoin.ECPair.fromWIF(wif_compress);
// console.log(keyPair.privateKey);
console.log(keyPair.privateKey.toString('hex'));
console.log(keyPair.publicKey.toString('hex'));
// Ox 02 92e0ff07acb48c66d8b0f0818712fdf69ed62b5c63aefc23b60ccb025ff0c8d0

// ETH
console.log('--ETH--');

const web3 = getWeb3();
const account = web3.eth.accounts.privateKeyToAccount('0x0f36cdc0dc0cebe566a788086c455c5fa163b9d07a290fae9e1efad368dc7b77');
console.log(account.privateKey);

const wallet = Wallet.fromPrivateKey(keyPair.privateKey);
console.log(wallet.getPrivateKeyString());
console.log(wallet.getPublicKeyString()); // 128 * 2 = 256 bit
// 0x 92e0ff07acb48c66d8b0f0818712fdf69ed62b5c63aefc23b60ccb025ff0c8d0 d2e58af513ae96f78969c5295a599f7fa44d754b217fbaf7d1b860e548d4285a

// EOS
console.log('--EOS--');
const privateKey = ECC.PrivateKey.fromString(wif_compress);
console.log(privateKey.toWif());
console.log(ECC.privateToPublic(privateKey.toWif()));

function getWeb3() {
  let web3;
  if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
  }
  return web3;
}

