const web3 = require('../utils/web3helper').getWeb3();
const path = require('path');
const fileUtil = require('../utils/fileUtil');
const config = require("../config/config");

var bip39 = require('bip39');
var hdkey = require('ethereumjs-wallet/hdkey');
var util = require('ethereumjs-util');

module.exports = {
    // keystore & password 创建 account
    async getAccountList(ctx) {
        console.log('version: ' + web3.version);
        const accountList = await web3.eth.getAccounts();
        console.log('accountList...' + accountList);
        await ctx.render('account');
    },
    // mnemonic words 创建 account
    async mnemonicPage(ctx) {
        await ctx.render('mnemonic');
    },
    // 新建账户
    async createAccount(ctx) {
        console.log('createAccount')
        const returnResult = {
            code: 0,
            msg: 'Success!!!',
            data: {}
        };
        const data = ctx.request.body;
        const pwd = data.pwd;
        const account = await web3.eth.accounts.create();

        // encrypt 返回一个 JSON 对象
        const keystoreJSON = await account.encrypt(pwd);

        // 将 JSON 对象转为 string
        const keystoreStr = JSON.stringify(keystoreJSON);

        // 生成随机文件存储 keystore 的字符串
        const randFilename = "UTC--" + new Date().valueOf() + "--" + account.address;

        // 设置存储文件的目录
        const filePath = path.join(__dirname, "../static/keystore/" + randFilename)

        // 将 keystore 的内容写入文件中
        fileUtil.writeFile(filePath, keystoreStr).then((res) => {
            console.log(res)
        }, (error) => {
            console.log('error');
            console.log(error);
        });

        const result = {
            account: account.address,
            privateKey: account.privateKey,
            keystore: config.keystoreUrl + randFilename
        }
        returnResult.data = result;
        ctx.body = returnResult;
    },
    // 获取助记词
    async getMnemonic(ctx) {
        const mnemonic = bip39.generateMnemonic(null, null, bip39.wordlists.chinese_simplified);  // 创建 mnemonic code
        ctx.body = mnemonic;
    },
    // 通过 mnemonic words 获取 private key
    async getPrivatekey(ctx) {
        const data = ctx.request.body;
        const mnemonicWords = data.mnemonic;

        const seed = bip39.mnemonicToSeed(mnemonicWords);   // mnemonic code 转成 binary 的 seed
        const hdWallet = hdkey.fromMasterSeed(seed);        // 使用 seed 产生 EthereumHDKey (产生 Master Key 并记录起来)

        const keypairs = hdWallet.derivePath("m/44'/60'/0'/0/0");       // 推导出 keypairs

        const address = util.pubToAddress(keypairs._hdkey._publicKey, true);  // publickey -> address
        console.log('Origin address = ', util.bufferToHex(address));

        const checksumAddress = util.toChecksumAddress(address.toString('hex'));     // eip 55 编码 变得比较难输入, 避免转错
        console.log('checksumAddress = ' + checksumAddress);


        const privateKey = util.bufferToHex(keypairs._hdkey._privateKey);
        console.log('Private key = ' + privateKey);

        ctx.body = {
            privateKey,
            address: checksumAddress
        };
    },
    // 通过 private key 获取 account
    async getAccountByPrivatekey(ctx) {
        const returnResult = {
            code: 0,
            msg: '成功！',
            data: {}
        };
        const data = ctx.request.body;
        const privateKey = data.privateKey;

        // 根据私钥获取用户地址
        const account = web3.eth.accounts.privateKeyToAccount(privateKey);

        // 查询账户的余额
        const balance = await web3.eth.getBalance(account.address);
        const ethNum = web3.utils.fromWei(balance, 'ether');

        returnResult.data.address = account.address;
        returnResult.data.privateKey = account.privateKey;
        returnResult.data.balance = ethNum;
        ctx.body = returnResult;
    },
    // 通过 keystore 获取 account
    async getAccountByKeystore(ctx) {
        const returnResult = {
            code: 0,
            msg: '成功！',
            data: {}
        };

        const data = ctx.request.body;    // 获取上传文件

        const keystoreFile = ctx.request.files.file;
        const filePath = keystoreFile.path;

        // 获取 keystore 里面的json字符串
        const keystoreStr = await fileUtil.readFile(filePath)


        JSON.stringify(JSON.parse(keystoreStr));
        console.log(`keystoreStr = ${keystoreStr}`);
        console.log(typeof keystoreStr);

        // 获取账户的密码
        const password = data.password;
        console.log(`password = ${password}`);

        // 获取账户的信息地址及私钥
        const account = web3.eth.accounts.decrypt(keystoreStr, password);

        const balance = await web3.eth.getBalance(account.address)

        const ethNum = web3.utils.fromWei(balance, 'ether')

        returnResult.data.address = account.address
        returnResult.data.privateKey = account.privateKey
        returnResult.data.balance = ethNum

        ctx.body = returnResult
    }
};