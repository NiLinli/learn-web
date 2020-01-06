const router = require('koa-router')();
const accountController = require('../controllers/account');
const transactionController = require('../controllers/transaction');
var bip39 = require('bip39');
var hdkey = require('ethereumjs-wallet/hdkey');
var util = require('ethereumjs-util');

router.get('/', accountController.getAccountList);      // accout page

router.post('/account/create', accountController.createAccount);


router.get('/mnemonic', accountController.mnemonicPage);
router.post('/mnemonic/create', accountController.getMnemonic);
router.post('/mnemonic/privatekey', accountController.getPrivatekey);

router.post('/', (ctx) => {
    const body = ctx.request.body;
    ctx.body = 'Hello Router POST ' + JSON.stringify(body);
});

router.post('/account/privatekey', accountController.getAccountByPrivatekey);   // 通过 privatekey 获取账户
router.post('/account/keystore', accountController.getAccountByKeystore);       // 通过 keystore 获取账户
router.get('/transaction', transactionController.transaction);                  // transaction page
router.post('/transaction/signed/send', transactionController.sendSignedTransaction);




// 测试
router.post('/transaction/unsigned/send', transactionController.sendTransaction)

module.exports = router;

