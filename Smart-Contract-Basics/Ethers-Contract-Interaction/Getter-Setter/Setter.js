/**
 * Modify the `value` stored in the contract
 *
 * @param {ethers.Contract} contract - ethers.js contract instance
 * @return {promise} a promise of transaction
 */
async function setValue(contract) {
  const modifyValue = await contract.modify(12);
}

module.exports = setValue;
