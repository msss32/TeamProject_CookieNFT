const CookieToken = artifacts.require("CookieToken");
const EthSwap = artifacts.require("EthSwap");
const MintNft = artifacts.require("MintNft");

module.exports = async function (deployer) {
  await deployer.deploy(CookieToken);
  const token = await CookieToken.deployed();

  await deployer.deploy(EthSwap, token.address);
  await EthSwap.deployed();

  await deployer.deploy(MintNft, token.address);
  await MintNft.deployed();
};
