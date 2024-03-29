const { Wallet, providers } = require('ethers');
const { ganacheProvider } = require('./config');

const provider = new providers.Web3Provider(ganacheProvider);

async function findMyBalance(privateKey) {
    // retrieve the balance, given a private key
    const wallet = new Wallet(privateKey,provider) 
    return await wallet.getBalance()
}

module.exports = findMyBalance;