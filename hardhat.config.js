// Load the Hardhat plugins
require('@nomiclabs/hardhat-waffle');
require('hardhat-abi-exporter');

require('dotenv').config()

module.exports = {
  solidity: '0.8.9',
  abiExporter: {
    path: './abi/',
    clear: true,
  },
};