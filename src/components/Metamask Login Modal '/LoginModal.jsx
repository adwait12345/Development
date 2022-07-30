import React from 'react'
import './Metamask.css'
export default function LoginModal() {
  return (
    <>
    <div className="outer-login">
          <div className="Login">
        <div className="metamask">
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
