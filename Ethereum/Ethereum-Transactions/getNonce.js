const provider = require("./provider");

async function getNonce(address) {
  const response = await provider.send({
    jsonrpc: "2.0",
    id: 1,
    method: "eth_getTransactionCount", // <-- fill in the method
    params: [address, "latest"], // <-- fill in the params
  });
  return response.result;
  // return the nonce for the address
}

module.exports = getNonce;
