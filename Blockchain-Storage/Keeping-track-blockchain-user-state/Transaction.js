class Transaction {
  constructor(inputUTXOs, outputUTXOs) {
    this.Transaction = {
      inputUTXOs,
      outputUTXOs,
    };
    this.fee = 0;
  }
  execute() {
    let totalValueInput = 0;
    let totalValueOutput = 0;
    for (let i = 0; i < this.Transaction.inputUTXOs.length; i++) {
      totalValueInput = totalValueInput + this.Transaction.inputUTXOs[i].amount;
      if (this.Transaction.inputUTXOs[i].spent == true) {
        throw Error;
      }
    }
    for (let i = 0; i < this.Transaction.outputUTXOs.length; i++) {
      totalValueOutput =
        totalValueOutput + this.Transaction.outputUTXOs[i].amount;
    }
    if (totalValueInput < totalValueOutput) {
      throw Error;
    }

    for (let i = 0; i < this.Transaction.inputUTXOs.length; i++) {
      this.Transaction.inputUTXOs[i].spent = true;
    }
    let fee = totalValueInput - totalValueOutput;
    if (fee < 0) {
      throw Error;
    }
    this.fee = fee;
  }
}

module.exports = Transaction;
