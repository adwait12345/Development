import React, { useState } from 'react'
import LoginModal from '../../Metamask Login Modal \'/LoginModal'
import Sidebar from '../SideBar/Sidebar'
import Topbar from '../Topbar/Topbar'
import Modal from "react-modal"
import safezen from '../Stake/safezen.png'
import check from '../check.svg'
import Ethrum from '../Ethrum.svg'
import {StakingAbi,stakingAddress,Buy_Sell,BuySell,Dai,GSZTToken} from '../../../Constants/index'
import './sell-stake.css'
import { useMoralis,useWeb3Contract } from 'react-moralis'
import { useEffect } from 'react'
import { ethers } from "ethers";

// import Web3 from "web3"
import { Network, Alchemy } from 'alchemy-sdk';
import Loader from '../../Loader/Loader'
import Transaction from '../../Transaction/Transaction'

export default function Sell_Stake() {

  

    const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner();
    const [open, setOpen] = useState(false)
    const [amount,setAmount] = useState("")
    const [balance, setBalance] = useState("")
    const [sellamount, setSellamount] =useState("")
    const [issuedTokens,setIssuedTokens]= useState("")
    const [confirmations, setConfirmations]= useState(false)
    const [loading, setloading]=useState(false)
    var { enableWeb3, isWeb3Enabled, authenticate, isAuthenticated, user, Moralis ,account,web3} = useMoralis();
 
var contract = null;

    // let acc = account.toString()
    // console.log(account)
//     const runner = async()=>{
//               // await window.ethereum.send('eth_requestAccounts');
//         // window.web3 = new Web3(wind.ethereum);

//         // var accounts =await web3.eth.getAccounts();
//         // account =accounts[0]
//         // document.getElementById('lol').textContent=account;
//         // contract = new web3.eth.Contract(StakingAbi, stakingAddress);
//         contract = new ethers.Contract(stakingAddress,StakingAbi, provider);
//     var  contractSigned = new ethers.Contract(stakingAddress,StakingAbi, signer);
//         // updateCurrentCount();
//     const value = await contract.decimals();
//     const value1 = await contract.name();
//     const value2 = await contract.symbol();
//     const value3 = await contract.balanceOf(account);
//     const value7 = BigInt(value3).toString()
//     const value4 = await contract.totalSupply()
//     const value6 = BigInt(value4).toString()
    
//   let value5 =  await contractSigned.transfer("0xDbDB0f30d51Eda693a88AEca322071974602FE34",`${amount*1000000000000000000}`)
//    Boolean(value5)

// console.log(value)  
// console.log(value1)  
// console.log(value2)  
// console.log(value7)  
// console.log(value6)  
// console.log(value5)
//     }

 
const DaiGET = new ethers.Contract(Dai,StakingAbi, provider);
var  DaiPOST = new ethers.Contract(Dai,StakingAbi, signer);

const updateCurrentCount = async () =>{
//    if(contract){
//     var totalSupply = contract.methods.totalSupply().call()
//     console.log(totalSupply)

//    }

}
const increaseCurrentCount = async ()=>{

}

( async()=>{
    contract = new ethers.Contract(stakingAddress,StakingAbi, provider);

    const Extract = await contract.balanceOf(account)
    var User_Balance = BigInt(Extract).toString()
    setBalance(User_Balance/1e18)
    // console.log(balance)

})()


// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
    apiKey: 'qFF72R9T59pOGZHY7I3xrJOUX6Fnf4mT', // Replace with your Alchemy API Key.
    network: Network.ETH_GOERLI, // Replace with your network.
  };
  const alchemy = new Alchemy(settings);
  
  // Access standard Ethers.js JSON-RPC node request
//   alchemy.core.getAssetTransfers(

    
//   ).then(console.log);

  
 
// const TransPrev= async()=>{
//     contract = new ethers.Contract(stakingAddress,StakingAbi, provider);
//     // const networkProvider = new ethers.providers.EtherscanProvider(alchemy.network)
//     // const signer2 = networkProvider.getSigner();

//     const currentAddress = await signer.getAddress();
//     let currentHistory = await provider.getHistory(currentAddress);
// console.log(currentHistory)
// //    const Previous=  contract.filters.Transfer(account, "0xDbDB0f30d51Eda693a88AEca322071974602FE34")
//     // console.log(Previous)
// }

// useEffect(()=>{
//     {isWeb3Enabled && TransPrev()}
// })


const Approve =async()=>{

    var trans =await DaiPOST.approve(BuySell,  amount)
}

const Buy = async()=>{
    try {
        setloading(true)
     contract = new ethers.Contract(BuySell,Buy_Sell, provider);
    var  contractSigned = new ethers.Contract(BuySell,Buy_Sell, signer);
    var trans =await contractSigned.buySZTToken(`${amount}`)

    // "0xDbDB0f30d51Eda693a88AEca322071974602FE34",
    console.log(trans)


    var receipt = await trans.wait();

    console.log(receipt.confirmations)
    if(receipt.confirmations>0){
        setConfirmations(true)
        setloading(false)
    }
    } catch (error) {
        setloading(false)
        console.log(error)
    }
   
}

const random=async()=>{
    // contract = new ethers.Contract(stakingAddress,StakingAbi, provider);
    var  contractSigned = new ethers.Contract(stakingAddress,StakingAbi, signer);
   
    var trans =await contractSigned.approve(BuySell, `${sellamount*1000000000000000000}`)
    const GSZT = async()=>{
        // contract = new ethers.Contract(GSZTToken,StakingAbi, provider);
        var  contractSigned = new ethers.Contract(GSZTToken,StakingAbi, signer);
       var gszt = await contractSigned.approve(BuySell, `${sellamount*1000000000000000000}`)  
    }
    GSZT()
}

  

const SellToken = async()=>{
      contract = new ethers.Contract(BuySell,Buy_Sell, provider);
    var  contractSigned = new ethers.Contract(BuySell,Buy_Sell, signer);
    var sell = await contractSigned.sellSZTToken(sellamount)

    // "0xDbDB0f30d51Eda693a88AEca322071974602FE34",
    console.log(sell)


    var receipt = await sell.wait();

    console.log(receipt.confirmations)
    if(receipt.confirmations>0){
        setConfirmations(true)
        Request()
    }
    // try {
        

    // } catch (error) {
    //     console.log(error)
    // }
   
}









//    const [rtBalance, setRtBalance]= useState("0")

// const {runContractFunction:getRtBalance}= useWeb3Contract({
//     abi:StakingAbi,
//     contractAddress:stakingAddress,
//     functionName:"balanceOf",
//     params:{
//         account:account,
//     }
// })

// useEffect(()=>{
//     if(isWeb3Enabled && account){
//             updateUiValues()

//     }
// },[account, isWeb3Enabled])

// async function updateUiValues(){
//     const rtBalanceFromContract = (
//          await getRtBalance({onError:(error)=>console.log(error)}).toString()
//     )
//     const formattedRtBalanceFromContract = ethers.utils.formatUnits(
//         rtBalanceFromContract,
//         "ether"
//     )
//     setRtBalance(formattedRtBalanceFromContract)
//     setRtBalance(rtBalanceFromContract)
// }

const [request,setRequest]=useState("Request Sell")

const Request=()=>{
setTimeout(()=>{
setRequest("Sell")
},120000)

}

const RequestSell=()=>{
    SellToken()
    
}

     return (
    <>
    
    <div className="Navbar_Cover">
                <Sidebar setOpen={setOpen} />
                <div className="ri_content">
                    <Topbar setOpen={setOpen} name="Buy & Sell" />

                    <div className="Bottom-Content">
                    <div className="DashBoard_Boxes">
                            <div className="box-dashboard">
                                <h4 id='lol'>My Balance:</h4>
                                <h3>{balance} SZT</h3>
                            </div>
                            <div className="box-dashboard">
                                <h4>Current SZT Price:</h4>
                                <h3>0.00 USD</h3>
                            </div>
                            <div className="box-dashboard">
                                <h4>Issued SZT till Date:</h4>
                                <h3>{issuedTokens} SZT</h3>
                            </div>
                        </div>
                        <div className="outer-stake">



                            <div className="Stake">
                                <div className="stake_title">
                                    <h3>Buy SZT Token</h3>
                                    <span>Contract Address: <h5>{account}</h5> </span>

                                </div>

                                 <div className="stake-bot">
                                  <div className="stake-box">
                              <div className="stake-top">
                                            <img src={safezen} alt="" />
                                            <div className="stake-top-title">
                                                <h3>SafeZen (SZT)</h3>
                                                <p>Native Platform Token</p>
                                            </div>
                                            <div className="eth">
                                                <img src={Ethrum} alt="" />
                                            </div>
                                        </div>
                                        <div className="stake-bott">
                                              <div className="stake-input">
                                                <div className="stake-input-lim">
                                                    <h4>Amount</h4>
                                                    <h4>Max</h4>
                                                </div>
                                                <div className="stake_input">
                                                    <input type="text" placeholder='Amount' onChange={(event)=>{setAmount(event.target.value)}} />
                                                    <span>SZT</span>
                                                </div>
                                              </div>
                                              <div className="buy-button">
                                                 <button onClick={Approve}>Approve</button>
                                              <button  onClick={Buy}>{loading?<Loader/>:"Buy"}</button>
                                              </div>
                                           <div className="time">
                                            <div className="time1">1</div>
                                            <div className="time2">2</div>
                                            </div>                                       
                                        </div>
                            </div>
                            <div className="stake-box">
                              <div className="transaction-Details">
                                <h4>Transaction History  </h4>
                                 <Transaction/>
                              </div>
                             
                            </div>
                                 </div>
                                 <div className="sell-tit">
                                   <h3>Sell SZT Token</h3> 
                                 </div>
                                
                                <div className="stake-bot">
                                    <div className="stake-box">
                            <div className="sell">
                            <h3>Sell SZT Token</h3>
                <div className="selectStake">
                  <input type="text" placeholder='Enter no of tokens'onChange={(event)=>{setSellamount(event.target.value)}} />
                   <span>SZT</span>
                </div>
                <div className="sell-button">
                  <button onClick={random}>Approve</button>
                  <button id="sellbtn" onClick={RequestSell}>{request}</button>
                </div>
                <div className="time-sell">
                               <div className="time">
                                            <div className="time1">1</div>
                                            <div className="time2">2</div>
                                            </div>     
                </div>
  
                
            </div>
                                    </div>
                                    <div className="stake-box">
                                             <div className="approve-szt">
                                               <span >Approve SZT</span>
                                             </div>
                                             <div className="timeline">
                                                <div className="timeline-line">
                                            <div className="blob">
                                                 <img src={check} alt="" />
                                                </div>
                                                </div>

                                             </div>
                                             <div className="transfer-szt">
                                            <span>Transfer SZT</span>
                                             </div>
                                    </div>
                                </div>

                            </div>

                                                                 
   
                        </div>



                    </div>

                </div>


            </div>
            <Modal isOpen={open} className="Modal" >
                <LoginModal open={open} setOpen={setOpen} />
            </Modal>
    </>
  )
}
