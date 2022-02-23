const hre = require("hardhat");
async function main() {
  const nftFactory = await hre.ethers.getContractFactory("NFT");
  const nft = await nftFactory.deploy();
  await nft.deployed();
  console.log("NFT deployed to:", nft.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
