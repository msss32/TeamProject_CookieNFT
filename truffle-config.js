module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // 192.168.0.243
      port: 8545, // 9000
      network_id: 7722, // 1234
    },
  },
  compilers: {
    solc: {
      version: "0.8.17",
    },
  },
  goerli: {
    provider: () =>
      new HDWalletProvider(
        process.env.MNEMONIC,
        "https://goerli.infura.io/v3/" + infuraProjectId
      ),
    networkId: 5,
  },
};
