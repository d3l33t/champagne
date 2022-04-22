import { ethers } from "hardhat";
import { getContractAddress } from '@ethersproject/address'

async function main() {
  const [owner] = await ethers.getSigners()

  
  // We get the contract to deploy
  const Champagne = await ethers.getContractAt("Champagne", "0x83aD340361702595D88F051dDf7Bdbfc3d6c300B", owner);
  console.log(await Champagne.safeMint("0x036731DDc861Eae89d70e04FB9AF2aF23D2dFC90"))
  // console.log(await Champagne.tokenURI('1'))

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });