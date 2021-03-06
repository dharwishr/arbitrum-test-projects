require('dotenv').config()
require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.2",
        settings: {},
      },
     
      {
        version: "0.7.2",
        settings: {},
      },
      {
        version: "0.6.12",
        settings: {},
      },
      {
        version: "0.6.11",
        settings: {},
      },
    ],
  },
  networks: {
    l1: {
      gas: 2100000, 
      gasLimit: 0,
      url: process.env['L1RPC'] || '',
      accounts: process.env['DEVNET_PRIVKEY'] ? [process.env['DEVNET_PRIVKEY']] : [],
    
    },
    l2: {
      url: process.env['L2RPC'] || '',
      accounts: process.env['DEVNET_PRIVKEY'] ? [process.env['DEVNET_PRIVKEY']] : [],
    },
  },
};
