import { ethers } from "hardhat";

async function main () {

	// console.log(token)
	const transferCalldata = token.interface.encodeFunctionData('deposit', []);	
	console.log()

	// const Champagne = await ethers.getContractAt("ChampagneCollective", "0x1f8C66c5d93A276842eEe1a02B4F55cd47599F17");
	// const r = await Champagne.delegate("0x036731DDc861Eae89d70e04FB9AF2aF23D2dFC90")
	// console.log(r)

  	const ChampagneGov = await ethers.getContractAt("ChampagneGovernor", "0xCbF57955A973f7A7f781A44d90bACbf1b793E85a");
  	ChampagneGov.propose(['0xc778417E063141139Fce010982780140Aa0cD5Ab'], ['1'], [transferCalldata], 'Wrap 1 Ethereum')



}

main()