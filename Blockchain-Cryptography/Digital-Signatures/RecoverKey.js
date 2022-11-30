const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

async function recoverKey(message, signature, recoveryBit) {
  const messageHashed = hashMessage(message);
  const publicKey = secp.recoverPublicKey(
    messageHashed,
    signature,
    recoveryBit
  );
  return publicKey;
}

module.exports = recoverKey;
