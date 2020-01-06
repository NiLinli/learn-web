const web3 = require('../utils/web3helper').getWeb3();


console.log(web3.utils.fromWei('138997979000000000000', 'ether'));
console.log(web3.utils.toWei('10', 'ether'));