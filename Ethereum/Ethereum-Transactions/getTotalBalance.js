const provider = require("./provider");

async function getTotalBalance(addresses) {
  const querys = [];

  addresses.map((address, index) => {
    querys.push({
      jsonrpc: "2.0",
      id: index,
      method: "eth_getBalance",
      params: [address, "latest"],
    });
  });

  // doing many request to the node and save the response
  const responses = await provider.send(querys);
  let totalBalance = 0;
  responses.map((res) => {
    const hexToInteger = parseInt(res.result);
    totalBalance = totalBalance + hexToInteger;
  });
  return totalBalance;
}

module.exports = getTotalBalance;
