const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
  const sliceKey = publicKey.slice(1, publicKey.length);
  const hashRestKey = keccak256(sliceKey);
  const sliceRestKey = hashRestKey.slice(-20);
  return sliceRestKey;
}

module.exports = getAddress;
