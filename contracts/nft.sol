//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;
import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/presets/ERC721PresetMinterPauserAutoId.sol";

contract NFT is ERC721PresetMinterPauserAutoId {
  constructor()
    ERC721PresetMinterPauserAutoId(
      "MOTSUI",
      "MTI",
      "https://storage.googleapis.com/motsui/"
    )
  {}
}
