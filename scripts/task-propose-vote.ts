import { ethers } from "hardhat";

async function main () {
	
  	const ChampagneGov = await ethers.getContractAt("ChampagneGovernor", "0xCbF57955A973f7A7f781A44d90bACbf1b793E85a");
  	ChampagneGov.castVote('16474253399583363322688081732645165704566252246765075975180791222870567639451', '1')

}

main()