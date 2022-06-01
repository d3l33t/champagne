
### Run a deployment
npx hardhat run scripts/deploy-champagne.ts --network rinkeby

### Verify on Etherscan
npx hardhat verify --network rinkeby --constructor-args ./scripts/arguments.ts 0xcd66aa252adf9c37b0eacfb9b899c4b3a997ee10