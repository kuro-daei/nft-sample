require('@nomiclabs/hardhat-waffle');
const config = require('config');

task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});
module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: config['rinkeby'].provider_url,
      accounts: [config['rinkeby'].private_key],
    },
  },
};
