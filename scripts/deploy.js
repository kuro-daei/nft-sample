const hre = require("hardhat");
async function main() {
  const nftContract = await hre.ethers.getContractFactory("NFT");
  const nft = await nftContract.deploy();
  await nft.deployed();
  console.log("NFT deployed to:", nft.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
