require("dotenv").config();

const HDWalletProvider = require("@truffle/hdwallet-provider");
const infuraProjectId = process.env.INFURA_PROJECT_ID;

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1", // "192.168.0.243"
            port: 8545, // 9000
            network_id: "*", // 1234
        },
        goerli: {
            provider: () =>
                new HDWalletProvider(
                    process.env.DEV_MNEMONIC,
                    "https://goerli.infura.io/v3/" + infuraProjectId
                ),
            network_id: 5,
        },
    },
    compilers: {
        solc: {
            version: "0.8.17",
        },
    },
};
