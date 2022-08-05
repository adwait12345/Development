import React, { useEffect } from 'react'
import './Metamask.css'
import { useMoralis } from 'react-moralis'
import {Navigate} from 'react-router-dom'

export default function LoginModal({setOpen,open}) {
  const Close = ()=>{
   setOpen(false)
  }
  var {enableWeb3,isWeb3Enabled,} = useMoralis();


   {isWeb3Enabled && setOpen(false)}


  

  return (
    <>
    <div className="outer-login" >
          
    
          <div className="Login">
             <button onClick={Close} className='Close' >
             <img src="https://img.icons8.com/material-sharp/24/000000/delete-sign.png"/>             </button>
        <div className="metamask" onClick={enableWeb3}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png" alt="" />
          <h3>Connect to your MetaMask Wallet</h3>
        </div>
        <div className="wallet-connect">
          <img src="https://1000logos.net/wp-content/uploads/2022/05/WalletConnect-Logo.png" alt="" />
          <h3>Connect to your WalletConnect</h3>

        </div>
    </div>  
    </div>

    </>
  )
}
