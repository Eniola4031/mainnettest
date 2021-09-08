const hre = require("hardhat");

async function main() {

 const vitalik ="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
 const myAddress = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8"
//connect to the mainnet through ether js
//const url = "https://eth-mainnet.alchemyapi.io/v2/rUIUhx7Sx2K0cx1c4--h6hMtHYBSikgX"; //alternative use for non-mainnet forking
const provider =
  new ethers.providers.JsonRpcProvider();
  //const signer =  provider.getSigner(); //signer is like the msg.sender
  vitalikBalance = await provider.getBalance(vitalik);//check vitalik acct balance
 // console.log(await vitalikBalance.toString()); //.toString interpretes the hexa output into string
  await hre.network.provider.request({ // Begin impersonatiion
        method: "hardhat_impersonateAccount",
        params: [vitalik], //address of impersonatee
      });    
    const signer = await ethers.getSigner(vitalik)
   const tx =await signer.sendTransaction({to: myAddress, value: 300000000})
   tx.wait(); //wait for all the nodes to mine and return balance
   myBalance = await provider.getBalance(myAddress);//check my acct balance
console.log(vitalikBalance.toString(), myBalance.toString())
   // Using ethers.js

}
 
main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});
