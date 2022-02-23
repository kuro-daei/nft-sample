const hre = require('hardhat');
const Web3 = require('web3');
const Config = require('config');
const Contract = require('../artifacts/contracts/nft.sol/NFT.json');

async function main() {
  const config = Config[hre.network.name];
  const web3 = new Web3(config.provider_url);
  const contract = new web3.eth.Contract(Contract.abi, config.contract.address);
  const nonce = await web3.eth.getTransactionCount(config.public_key, 'latest');

  const tx = {
    from: config.public_key,
    to: config.contract.address,
    nonce: nonce,
    gas: 500000,
    data: contract.methods.mint(config.public_key).encodeABI(),
  };
  const signedTx = await web3.eth.accounts.signTransaction(
    tx,
    config.private_key
  );
  const transactionReceipt = await web3.eth.sendSignedTransaction(
    signedTx.rawTransaction
  );
  console.log(`Transaction Hash: ${transactionReceipt.transactionHash}`);
}

main();
