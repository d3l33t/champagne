import { ethers } from "hardhat";
import { getContractAddress } from '@ethersproject/address'

async function main() {
  const [owner] = await ethers.getSigners()

  
  // We get the contract to deploy
  const Champagne = await ethers.getContractAt("ChampagneCollective", "0x2406cE61A146805C4E335D73986011269eB8b21A", owner);
  console.log(await Champagne.safeMint("0x036731DDc861Eae89d70e04FB9AF2aF23D2dFC90"))
  // console.log(await Champagne.safeMint("0x036731DDc861Eae89d70e04FB9AF2aF23D2dFC90"))
  // console.log(await Champagne.safeMint("0x036731DDc861Eae89d70e04FB9AF2aF23D2dFC90"))
  // console.log(await Champagne.safeMint("0x036731DDc861Eae89d70e04FB9AF2aF23D2dFC90"))
  // console.log(await Champagne.safeMint("0x036731DDc861Eae89d70e04FB9AF2aF23D2dFC90"))
  // console.log(await Champagne.safeMint("0x036731DDc861Eae89d70e04FB9AF2aF23D2dFC90"))
  // console.log(await Champagne.safeMint("0x036731DDc861Eae89d70e04FB9AF2aF23D2dFC90"))
  // console.log(await Champagne.safeMint("0x036731DDc861Eae89d70e04FB9AF2aF23D2dFC90"))
  // console.log(await Champagne.safeMint("0x036731DDc861Eae89d70e04FB9AF2aF23D2dFC90"))
  // console.log(await Champagne.safeMint("0x036731DDc861Eae89d70e04FB9AF2aF23D2dFC90"))

  // console.log(await Champagne.tokenURI('1'))

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });