// const { artifacts } = require("hardhat");

const USDToken = artifacts.require('./USDToken.sol');

module.exports = function (deployer, network, accounts) {
  console.log(network, accounts)
  return deployer.then(() => {
    return deployContracts(deployer, network, accounts)
  })
}

async function deployContracts(deployer, network, accounts) {
  let usd = await deployer.deploy(USDToken);
}
