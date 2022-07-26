// Load the Hardhat plugins
require('@nomiclabs/hardhat-waffle');
require('hardhat-abi-exporter');

require('dotenv').config()

// Replace this private key with your Mumbai wallet private key
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

// Replace this with your Datahub api key
const DATAHUB_API_KEY = process.env.YOUR_DATAHUB_API_KEY;

module.exports = {
  solidity: '0.8.9',
  abiExporter: {
    path: './abi/',
    clear: true,
  },
  networks: {
    rinkeby: {
      url: `https://ethereum-rinkeby--rpc.datahub.figment.io//apikey/${DATAHUB_API_KEY}`,
      accounts: [`0x${RINKEBY_PRIVATE_KEY}`],
    },
  },
};