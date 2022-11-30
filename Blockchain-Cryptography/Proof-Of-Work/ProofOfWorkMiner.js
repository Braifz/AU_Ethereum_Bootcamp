const SHA256 = require("crypto-js/sha256");
const TARGET_DIFFICULTY =
  BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

let mempool = [];
const blocks = [];

function addTransaction(transaction) {
  // TODO: add transaction to mempool
  return mempool.push(transaction);
}

function mine() {
  // TODO: mine a block
  let block = {
    id: blocks.length,
  };
  let transactions = mempool.splice(0, MAX_TRANSACTIONS); //save mempool array and clean mempool
  let nonce = 0;
  while (true) {
    const stringifiedBlock = JSON.stringify(block);
    const hash = SHA256(stringifiedBlock);
    const int = BigInt(`0x${hash}`);
    block = { ...block, hash, transactions, nonce };
    if (int <= TARGET_DIFFICULTY) {
      blocks.push(block);
      break;
    }
    nonce++;
  }
}

module.exports = {
  TARGET_DIFFICULTY,
  MAX_TRANSACTIONS,
  addTransaction,
  mine,
  blocks,
  mempool,
};
