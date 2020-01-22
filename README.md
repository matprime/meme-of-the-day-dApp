# Meme of the day dApp (decentralized) for Fantom/Opera blockchain

Upload your meme, vote and comment on other memes, discover top memes with this dApp.


dApp is created for use with Fantom's Opera blockchain and IPFS Interplanetary File System. Frontend of dApp is running in web browser window, where it possible to interact with dApp.

Memes of the day is a fun social platform that encourages new users to join the Opera Network. Through the dApp interface, the user uploads a meme image that is saved in the InterPlanetary File System (IPFS), which creates a hash that is stored on the Opera Network. This is our initial proof of concept functionality. 

Beyond this, our vision is for people to vote (and possibly comment) on the memes they like, which would be featured in a list that is updated in real-time. After a user pays for their first vote, they would receive three free votes, paid directly from the transaction fee of the first vote (equal to the required gas for four total vote operations). The smart contract would save that gas in a dedicated Opera account that it would access to implement the three free votes. We are hopeful that Decentralized Memes and the future voting mechanism would encourage more user interest and engagement with Opera Network and the Fantom Protocol. 


**Dependencies are:**
- Node.js 10.1x.x
> download from https://nodejs.org and follow installation instructions
- Truffle
> npm install -g truffle@5.0.5 (important is to use this version)
- Web3.js
- IPFS
- Opera blockchain
- Metamask extension from Google Chrome web store

**Installation procedure**
```shell
git clone https://github.com/matprime/meme-of-the-day-dApp
cd meme-of-the-day-dApp
npm install
npm run start
```
Before starting the dApp with last command "npm run start" you need to make sure that local Opera blockchain is running. Please look into Opera blockchain documentation, how to start it. After Opera blockchain is running and you started application, you should see web browser open up and application will load and show the latest meme uploaded in browser window.

**Command to migrate smart contract to blockchain**
```shell
truffle migration
```
After succesfull migration of smart contract to blockhain you can interact with him using truffle console.

**Some commands you can use with truffle console**
After smart contracts deployment to blockchain with migration, you can use truffle console to interact with smart contracts using CLI. To start truffle console from command shell type:
```shell
truffle console
```
After truffle console is running you can get contract from blockchain with command:
```javascript
truffle(development)> const fileshandler = await FilesHandler.deployed()
```
You can store hash of file to blockchain using contracts set function:
```javascript
truffle(development)> result = fileshandler.setFileHash('filehash123')
```
To get the hash of file stored on blockchain you can type:
```javascript
truffle(development)> const filehash = await fileshandler.getFileHash()
```
You needed to type constant as command to get value stored in it:
```javascript
truffle(development)> filehash
'filehash123'
```

**To run tests defined in folder /test run from shell command**  
```javascript
truffle test
```
Tests will check if contracts deployment on blockchain was done correctly.  Also if get and set methods of smart contract are working corectly. After running command you will see outpot similar to:
```shell
Using network 'development'.

Compiling ./src/contracts/FilesHandler.sol...


  Contract: FilesHandler
    deployment
0xDA228234a792cb9C7C8cf9E9E0dB48A8F57C7D08
      ✓ deployed successfully!
    storage access
Saving and retrieveing from Blockhain
test123
      ✓ Hash saved and retrieved (282ms)


  2 passing (422ms)

```
