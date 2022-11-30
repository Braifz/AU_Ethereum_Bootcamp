const Block = require("./Block");

class Blockchain {
  constructor() {
    const block = new Block();
    this.chain = [block]; // genesis block
  }

  addBlock(block) {
    block.previousHash = this.chain[this.chain.length - 1].toHash();
    this.chain.push(block);
  }

  isValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const previousBlock = this.chain[i - 1];
      const currentBlock = this.chain[i];
      if (
        previousBlock.toHash().toString() !=
        currentBlock.previousHash.toString()
      ) {
        return false;
      }
    }
    return true;
  }
}

module.exports = Blockchain;
