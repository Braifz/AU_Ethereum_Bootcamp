class TXO {
  constructor(owner, amount) {
    this.owner = owner;
    this.amount = amount;
    this.spent = false;
  }
  spend() {
    return (this.spent = true);
  }
}

module.exports = TXO;
