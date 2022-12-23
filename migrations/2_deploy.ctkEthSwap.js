const CookieToken = artifacts.require("CookieToken");
const EthSwap = artifacts.require("EthSwap");

module.exports = async function (deployer) {
  await deployer.deploy(CookieToken);
  const token = await CookieToken.deployed();

  await deployer.deploy(EthSwap, token.address);
  await EthSwap.deployed();
};
