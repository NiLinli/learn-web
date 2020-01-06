const Web3 = require('web3');

module.exports = {
    getWeb3() {
        if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider);
        } else {
            web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
        }
        return web3;
    }
}