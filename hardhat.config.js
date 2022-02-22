require("@nomiclabs/hardhat-waffle");
const config = require("config");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});
module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: config["goerli"].provider_url,
      accounts: [config["goerli"].private_key],
    },
  },
};