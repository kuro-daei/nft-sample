const Web3 = require("web3");
const config = require("config");
const network = config[hre.network.name];

async function main() {
  const web3 = new Web3(network.provider_url);
  const contract = require("../artifacts/contracts/nft.sol/NFT.json");
  const nftContract = new web3.eth.Contract(
    contract.abi,
    network.contract_address
  );
  const nonce = await web3.eth.getTransactionCount(
    network.public_key,
    "latest"
  );
  const tx = {
    from: network.public_key,
    to: network.contract_address,
    nonce: nonce,
    gas: 500000,
    data: nftContract.methods
      .safeTransferFrom(network.public_key, network.send_to, network.token_id)
      .encodeABI(),
  };
  const signPromise = web3.eth.accounts.signTransaction(
    tx,
    network.private_key
  );
  signPromise
    .then((signedTx) => {
      const tx = signedTx.rawTransaction;
      if (tx !== undefined) {
        web3.eth.sendSignedTransaction(tx, function (err, hash) {
          if (!err) {
            console.log("The hash of your transaction is: ", hash);
          } else {
            console.log(
              "Something went wrong when submitting your transaction:",
              err
            );
          }
        });
      }
    })
    .catch((err) => {
      console.log("Promise failed:", err);
    });
}

main();
