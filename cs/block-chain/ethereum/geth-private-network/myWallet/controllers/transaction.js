const web3 = require("../utils/web3helper").getWeb3()


module.exports = {

    async transaction(ctx) {
        await ctx.render('transaction');
    },

    // unlock 之后直接发送
    async sendTransaction(ctx) {

        const result = {};

        const data = ctx.request.body;

        console.log(data);
        web3.eth.personal.unlockAccount(data.from, data.phrase, 600)
            .then(() => {
                console.log('Account unlocked!')
                web3.eth.sendTransaction({
                    from: data.from,
                    to: data.to,
                    value: 1000000000000000
                }, (error, transactionHash) => {
                    if (error) {
                        console.log('sendTransaction' + error);
                        return;
                    }

                    result.transactionHash = transactionHash;

                    web3.eth.getTransaction(transactionHash, function (error, transactionInfo) {
                        if (error) {
                            console.log('sendTransaction' + error);
                            return;
                        }
                        console.log(transactionInfo);

                        result.transactionInfo = transactionInfo;
                        ctx.body = result;
                    });
                });
            });
    },

    // 非本地用户 使用 privateKey 交易
    async sendSignedTransaction(ctx) {
        const returnResult = {
            code: 0,
            msg: '成功！',
            data: {}
        }

        const data = ctx.request.body;

        console.log(data);

        const currentAccount = data.currAccount;            // from 当前用户
        const privateKey = data.privateKey;                 // private key 私钥
        const reciptAccount = data.reciptAccount;           // to 接受用户
        const txValue = data.txValue;
        // 获取指定账户地址的交易数
        let nonce = await web3.eth.getTransactionCount(currentAccount);

        // 将 ether 转为 wei
        let value = web3.utils.toWei(txValue, 'ether');
        console.log(value)
    

        // 获取当前gasprice
        const gasPrice = await web3.eth.getGasPrice();

        // 以太币转账参数    
        const txParms = {
            from: currentAccount,
            to: reciptAccount,
            nonce: nonce,
            gasPrice: gasPrice,
            value
        };

        let gas = await web3.eth.estimateGas(txParms); // 获取一下预估gas
        txParms.gas = gas;

        console.log(privateKey)
        console.log(txParms);

        let signTx = await web3.eth.accounts.signTransaction(txParms, privateKey);  // 用密钥对账单进行签名

        // 将签过名的账单进行发送
        try {
            await web3.eth.sendSignedTransaction(signTx.rawTransaction, function (error, hash) {
                if (!error) {
                    returnResult.data.hash = hash
                } else {
                    returnResult.code = "101"
                    returnResult.msg = "失败！"
                    returnResult.data.error = error.message

                }
            });
        } catch (error) {
            console.log(error);
        }

        ctx.body = returnResult;
    }
}