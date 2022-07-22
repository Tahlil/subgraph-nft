# Create Subgraph for NFT

### Instruction
Export ABI:
```
yarn run hardhat export-abi
```
To Deploy:
```
npx hardhat run scripts/deploy.js --network rinkeby
```
Creating a subgraph:
```
graph init --contract-name NFT --index-events --studio \
  --from-contract <YOUR MUMBAI SMART CONTRACT ADDRESS> \
  --abi abi/contracts/nft.sol/NFT.json \
  --network rinkeby \
  funnft
```