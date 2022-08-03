import React, { useState } from 'react'
import './Topbar.css'
// import { NavLink } from 'react-router-dom'
import Modal from "react-modal"
import { useMoralis } from 'react-moralis'
import LoginModal from '../../Metamask Login Modal \'/LoginModal'
// import Connect_to_Wallet from '../Connect to Wallet/Connect_to_Wallet'


export default function Topbar({setOpen},props) {
  // const [open , setOpen] = useState(false)
  const {enableWeb3,isWeb3Enabled} = useMoralis();
  const Handler=()=>{
    setOpen(true)
  }


  return (
    <>

             <div className="top_content">
            <h1>{props.name}</h1>
            <div className="connect_wallet">
                <button>More on Gitbook</button>

                <button onClick={Handler}  id='connect'>{isWeb3Enabled?"Connected":"Connect Wallet"}</button>
                
            </div>

        </div>
        {/* <Modal   isOpen={open} setOpen={setOpen} className="Modal" >
          <LoginModal setOpen={setOpen}/>
        </Modal> */}
        
    </>
  )
}
