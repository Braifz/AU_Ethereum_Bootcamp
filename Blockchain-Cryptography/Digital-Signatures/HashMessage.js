const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

function hashMessage(message) {
  const messageToBytes = utf8ToBytes(message);
  const hash = keccak256(messageToBytes);
  return hash;
}

module.exports = hashMessage;
