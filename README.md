# Meme of the day dApp (decentralized) for Fantom/Opera blockchain

Upload your meme, vote and comment on other memes, discover top memes with this dApp.


dApp is created for use with Fantom's Opera blockchain and IPFS Interplanetary File System. Frontend of dApp is running in web browser window, where it possible to interact with dApp. Code base originates from my other repository, which is dApp version for Ethereum and IPFS: https://github.com/matprime/decentralized-memes

Memes of the day is a fun social platform that encourages new users to join the Opera Network. Through the dApp interface, the user uploads a meme image that is saved in the InterPlanetary File System (IPFS), which creates a hash that is stored on the Opera Network. This is our initial proof of concept functionality. 

Beyond this, our vision is for people to vote (and possibly comment) on the memes they like, which would be featured in a list that is updated in real-time. After a user pays for their first vote, they would receive three free votes, paid directly from the transaction fee of the first vote (equal to the required gas for four total vote operations). The smart contract would save that gas in a dedicated Opera account that it would access to implement the three free votes. We are hopeful that Decentralized Memes and the future voting mechanism would encourage more user interest and engagement with Opera Network and the Fantom Protocol. 


**Dependencies are:**
- Node.js 10.1x.x
> download from https://nodejs.org and follow installation instructions
- Truffle
> npm install -g truffle@5.0.5 (important is to use this version)
- Web3.js
- IPFS 
> public open IPFS trough Infura is already coded into Meme dApp, find more about IPFS here
> https://infura.io/
- Opera blockchain: https://github.com/Fantom-foundation/go-lachesis
> You need to configure blockhain to run in local private mode not public
> after you pull it and compile it from repository, run the blockchain and enable WebSocket endpoint with command
```shell
lachesis --fakenet 1/1 --ws
```
- Fantom desktop wallet: https://github.com/Fantom-foundation/desktop-web-wallet


**Installation procedure**
```shell
git clone https://github.com/matprime/meme-of-the-day-dApp
cd meme-of-the-day-dApp
npm install
npm run start
```
Before starting the dApp with last command "npm run start" you need to make sure that local Opera blockchain is running. Please look into Opera blockchain repository https://github.com/Fantom-foundation/go-lachesis, how to start it. After Opera blockchain is running and you started dApp, you should see web browser open up and dApp will load and show the latest meme uploaded in browser window.

**Command to migrate smart contract to blockchain**
```shell
truffle migrate
```
After succesfull migration of smart contract to blockhain you can interact with him using truffle console.

**Some commands you can use with truffle console**
After smart contracts deployment to blockchain with migration, you can use truffle console to interact with smart contracts using CLI. To start truffle console from command shell type:
```shell
truffle console
```
After truffle console is running you can get contract from blockchain with command:
```javascript
truffle(development)> const memeshandler = await MemesHandler.deployed()
```
You can store hash of meme to blockchain using contracts set function:
```javascript
truffle(development)> result = memeshandler.newMeme('QmYHaaWHgpT2iBGNxMCCFpDKgskej6bhubd5cnytUuJKRp')
```
To get the account under which was meme stored on blockchain you can type:
```javascript
truffle(development)> const memesList = memeshandler.getMemesList()
```
You needed to type constant as command to get value stored in it:
```javascript
truffle(development)> memesList
[ '0x787eBC47F34081a0Df4dc3923798828ae52C538C' ]
```
Read the IPFS file hash from meme stored on blockchain:
```javascript
const meme = memeshandler.getMemeByAddress('0x787eBC47F34081a0Df4dc3923798828ae52C538C')
```
Output IPFS file hash into console:
```javascript
meme
'QmYHaaWHgpT2iBGNxMCCFpDKgskej6bhubd5cnytUuJKRp'
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
