
### Run a deployment
npx hardhat run scripts/deploy-champagne.ts --network rinkeby

## MAINNET
CHAMPAGNE NFT 0x64f9EcFd62c9AE1cC8dEeC41d319a18f241d4e66
TIMELOCK 0x54C3F9d681d2B815349CD2eAD14793cDAe37cE3e
GOVERNER 0xBBaB3cf44acc3Bbf359cb02F38D9262472B236C4

### Verify on Etherscan
npx hardhat verify --network mainnet --constructor-args ./scripts/arguments-gov.ts 0xBBaB3cf44acc3Bbf359cb02F38D9262472B236C4
npx hardhat verify --network mainnet --constructor-args ./scripts/arguments-timelock.ts 0x54C3F9d681d2B815349CD2eAD14793cDAe37cE3e
npx hardhat verify --network mainnet 0x64f9EcFd62c9AE1cC8dEeC41d319a18f241d4e66