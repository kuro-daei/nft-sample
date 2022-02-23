async function main() {
  const nftFactory = await ethers.getContractFactory('NFT');
  const nft = await nftFactory.deploy();
  await nft.deployed();
  console.log('NFT deployed to address:', nft.address);
}
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
