require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
    evmVersion: "paris",
  },
  networks: {
    hardhat: {
      hardfork: "berlin",
      forking: {
        url: process.env.BSC_URL,
        accounts: [process.env.PRIVATE_KEY],
        blockNumber: 38570859,
      },
    },
    bsc: {
      url: "https://bsc-dataseed.binance.org/",
      accounts: [process.env.PRIVATE_KEY]
    },
    chapel: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      accounts: [process.env.PRIVATE_KEY]
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: [process.env.PRIVATE_KEY]
    },
    polygonAmoy: {
      url: "https://rpc-amoy.polygon.technology",
      accounts: [process.env.PRIVATE_KEY]
    },
    sepoliaBase: {
      url: `https://base-sepolia-rpc.publicnode.com`,
      accounts: [process.env.PRIVATE_KEY]
    },
    sepoliaOptimism: {
      url: `https://optimism-sepolia.blockpi.network/v1/rpc/public`,
      accounts: [process.env.PRIVATE_KEY]
    },

  },
  etherscan: {
    apiKey: {
      mainnet: `${process.env.API_KEY}`,
      goerli: `${process.env.API_KEY}`,
      sepolia: `${process.env.API_KEY}`,
      bsc: `${process.env.API_KEY}`,
      bscTestnet: `${process.env.API_KEY}`,
      polygonAmoy: `${process.env.API_KEY}`,
      sepoliaOptimism: `${process.env.API_KEY}`,
      sepoliaBase: `${process.env.API_KEY}`,
    },
  customChains: [
    {
      network: "polygonAmoy",
      chainId: 80002,
      urls: {
        apiURL: "https://api-amoy.polygonscan.com/api",
        browserURL: "https://amoy.polygonscan.com",
      },
    },
    {
      network: "sepoliaOptimism",
      chainId: 11155420,
      urls: {
        apiURL: "https://api-sepolia-optimistic.etherscan.io/api",
        browserURL: "https://api-sepolia-optimistic.etherscan.io",
      },
    },
    {
      network: "sepoliaBase",
      chainId: 84532,
      urls: {
        apiURL: "https://api-sepolia.basescan.org/api",
        browserURL: "https://api-sepolia.basescan.org/api",
      },
    },
  ]},
};
