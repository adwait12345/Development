import React, { useEffect } from 'react'
import './Metamask.css'
import { useMoralis } from 'react-moralis'
import {Navigate} from 'react-router-dom'

export default function LoginModal({setOpen}) {
  const Close = ()=>{
   setOpen(false)
  }
  var {enableWeb3,isWeb3Enabled,authenticate,isAuthenticated,user,Moralis} = useMoralis();

    {isWeb3Enabled && setOpen(false)}
   
 async function authenticatee(){
try {
  user = await Moralis.Web3.authenticate({provider:"walletconnect"});
  web3 = await Moralis.Web3.enable({provider:"walletconnect"});
} catch (error) {
  console.log('auth failed ', error)
}
LoginModal()
  
 }

 useEffect(()=>{
  if(!isWeb3Enabled && isAuthenticated){
      enableWeb3({provider:"walletconnect",chainId:56});
     
      console.log("web3 activated")
  }


 },[isWeb3Enabled,isAuthenticated,enableWeb3])

 async function enableWeb3(){
  try {
    web3 = await Moralis.Web3.enable({provider:"walletconnect"});
  } catch (error) {
    console.log("test call failed",error)
  }
  LoginModal()
 }
  
// document.addEventListener("visibilitychange",()=>{
//        if(document.visibilityState === 'hidden'){
//           window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE")
//        }
// })
  return (
    <>
    <div className="outer-login" >
          
    
          <div className="Login">
             <button onClick={Close} className='Close' >
             <img src="https://img.icons8.com/material-sharp/24/000000/delete-sign.png"/>             </button>
        <div className="metamask" onClick={()=>enableWeb3()}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png" alt="" />
          <h3>Connect to your MetaMask Wallet</h3>
        </div>
        <div className="wallet-connect" onClick={()=>authenticatee()}>
          <img src="https://1000logos.net/wp-content/uploads/2022/05/WalletConnect-Logo.png" alt="" />
          <h3>Connect to your WalletConnect</h3>

        </div>
    </div>  
    </div>

    </>
  )
}
