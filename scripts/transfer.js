const Web3 = require("web3");
const config = require("config");
const network = config[hre.network.name];
async function transferNFT() {
  const web3 = new Web3(network.provider_url);
  const nftFactory = await ethers.getContractFactory("NFT");
  const nft = await nftFactory.attach(network.contract_address);
  await nft.transferToken(network.send_to, network.token_id);
}
transferNFT();
