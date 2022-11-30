const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ["red", "green", "blue", "yellow", "pink", "orange"];

// given a hash, return the color that created the hash
function findColor(hash) {
  for (let i = 0; i < COLORS.length; i++) {
    let colorToBytes = utf8ToBytes(COLORS[i]);
    if (toHex(hash) === toHex(sha256(colorToBytes))) {
      return COLORS[i];
    }
  }
}

module.exports = findColor;
