import { ethers } from "hardhat";

async function main() {


  const AdvNftFactory = await ethers.getContractFactory("AdvNFT");
  const marketplaceAddr = "0x909e9efE4D87d1a6018C2065aE642b6D0447bc91"
  const advNFT = await AdvNftFactory.deploy("AdvNFT", "ADV", marketplaceAddr);
  console.log("deployment for ADV NFT started, hash: ", advNFT.deployTransaction.hash);
  await advNFT.deployed();


  const MusicNftFactory = await ethers.getContractFactory("MusicNFT")
  const musicNFT = await MusicNftFactory.deploy("MusicNFT", "MZK", advNFT.address);
  console.log("deployment for MUSIC NFT started, hash: ", musicNFT.deployTransaction.hash);

  await musicNFT.deployed();
  await advNFT.setNftContractAddr(musicNFT.address).then(e => e.wait())
  console.log("ADVNft:", advNFT.address);
  console.log("MusicNFT:", musicNFT.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
