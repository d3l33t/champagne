import { ethers } from "hardhat";
import { getContractAddress } from '@ethersproject/address'

async function main() {
  const [owner] = await ethers.getSigners()

  
  // We get the contract to deploy
  const Champagne = await ethers.getContractFactory("ChampagneCollective");
  const champagne = await Champagne.deploy();

  console.log("champagne deployed to:", champagne.address);

  // get the next contract (governor) address
  const transactionCount = await owner.getTransactionCount()
  const futureAddress2 = getContractAddress({
    from: owner.address,
    nonce: transactionCount + 1
  })
  
  const Timelock = await ethers.getContractFactory("TimelockController");
  const timelock = await Timelock.deploy('0', [futureAddress2], [futureAddress2]);

  console.log("timelock deployed to:", timelock.address);

  const Gov = await ethers.getContractFactory("ChampagneGovernor");
  const gov = await Gov.deploy(champagne.address, timelock.address);

  console.log("gov deployed to:", gov.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });