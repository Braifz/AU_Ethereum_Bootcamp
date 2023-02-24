const { providers } = require("ethers");
const { ganacheProvider } = require("./config");

const provider = new providers.Web3Provider(ganacheProvider);

/**
 * Given an ethereum address find all the addresses
 * that were sent ether from that address
 * @param {string} address - The hexidecimal address for the sender
 * @async
 * @returns {Array} all the addresses that receieved ether
 */
async function findEther(address) {
  const blockNumber = await provider.getBlockNumber();
  const recipients = [];

  for (let i = 0; i <= blockNumber; i++) {
    const response = await provider.getBlockWithTransactions(i);
    response.transactions.map((tx) => {
      if (tx.from === address) {
        recipients.push(tx.to);
      }
    });
  }
  return recipients;
}

module.exports = findEther;
